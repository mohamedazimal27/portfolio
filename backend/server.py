from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import json


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (Commented out as mongod is not running)
# mongo_url = os.environ['MONGO_URL']
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# JSON File Storage Setup
MESSAGES_FILE = ROOT_DIR / 'messages.json'

def save_message_to_json(msg_dict):
    if not MESSAGES_FILE.exists():
        with open(MESSAGES_FILE, 'w') as f:
            json.dump([], f)
    
    with open(MESSAGES_FILE, 'r+') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            data = []
        
        # Convert datetime to string for JSON serialization
        msg_dict['timestamp'] = msg_dict['timestamp'].isoformat()
        data.append(msg_dict)
        
        f.seek(0)
        json.dump(data, f, indent=2)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    # Mock status check for now
    return StatusCheck(client_name=input.client_name)

class Message(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return []

@api_router.post("/contact", response_model=Message)
async def create_message(input: Message):
    msg_dict = input.dict()
    # Save to JSON file instead of MongoDB
    save_message_to_json(msg_dict)
    return input

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://mohamedazimal.vercel.app"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
