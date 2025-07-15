# Full-Stack Portfolio Project

This repository contains the source code for a personal portfolio website, built with a modern full-stack architecture. The frontend is a responsive React application styled with Tailwind CSS, and the backend is a robust API powered by Python and FastAPI.

---

## 🚀 Live Demo

*   **Frontend (Vercel):** [https://mohamedazimal.vercel.app](https://mohamedazimal.vercel.app)
*   **Backend (Render):** The backend is live and serves the frontend. You can access its root endpoint to see a status message. *(Note: You will need to provide the user with the actual Render URL if you want them to be able to access it directly)*

---

## 🛠️ Tech Stack

### Frontend
*   **Framework:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Deployment:** [Vercel](https://vercel.com/)

### Backend
*   **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
*   **Database:** [MongoDB](https://www.mongodb.com/) with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
*   **Deployment:** [Render](https://render.com/)

---

## 🔧 Running Locally

To run this project on your local machine, you will need to run the frontend and backend in separate terminals.

### Prerequisites
*   [Node.js](https://nodejs.org/en/) (v18 or newer)
*   [Python](https://www.python.org/) (v3.8 or newer)
*   A local or cloud-based MongoDB instance.

### Backend Setup
1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Create a `.env` file** in the `backend` directory and add your environment variables:
    ```
    MONGO_URL="your_mongodb_connection_string"
    DB_NAME="your_database_name"
    ```
5.  **Run the server:**
    ```bash
    uvicorn server:app --reload
    ```
    The backend will be running at `http://127.0.0.1:8000`.

### Frontend Setup
1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    yarn start
    ```
    The frontend will open at `http://localhost:3000`.

---

## ☁️ Deployment

This project is configured for continuous deployment using a Git-based workflow:

*   The **frontend** is deployed on **Vercel**, connected to the `frontend` directory of this repository.
*   The **backend** is deployed on **Render**, connected to the `backend` directory.

Any `git push` to the `main` branch will automatically trigger new builds and deployments on both platforms. A detailed guide can be found in `DEPLOYMENT_GUIDE.md`.
