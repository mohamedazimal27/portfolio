# Full-Stack Deployment Guide (React + FastAPI)

This guide provides a comprehensive overview of deploying and maintaining your full-stack application, with a React frontend and a Python/FastAPI backend.

## 1. Best Free Hosting Platforms

Here are some of the best platforms that offer generous free tiers suitable for a portfolio project.

### Frontend (React + Tailwind)

Your best options are platforms specializing in static and Jamstack hosting. They offer seamless integration with Git and provide CI/CD out of the box.

*   **[Vercel](https://vercel.com/):** Highly recommended. It's built by the creators of Next.js but has excellent, first-class support for Create React App. The free tier is very generous, and its integration with GitHub makes deployment automatic on every `git push`.
*   **[Netlify](https://www.netlify.com/):** Another top-tier choice and a direct competitor to Vercel. It offers a very similar feature set, a generous free tier, and a fantastic developer experience.
*   **[GitHub Pages](https://pages.github.com/):** A completely free option directly from GitHub. It's great for simple static sites, but setting it up for a React application requires more manual configuration for things like client-side routing.

**Recommendation:** **Vercel** or **Netlify**. They are beginner-friendly, professional, and the automatic deployment workflow will save you a lot of time.

### Backend (Python/FastAPI)

You need a platform that can run a persistent web service.

*   **[Render](https://render.com/):** Highly recommended for its ease of use. Render can host web services, databases, and more. Its free tier for web services is perfect for a portfolio project. It can deploy a Python service directly from your `requirements.txt` file.
*   **[Fly.io](https://fly.io/):** A powerful platform that deploys applications as Docker containers in global regions. It has a generous free tier but has a slightly steeper learning curve as you might need to create a `Dockerfile` for your backend.
*   **[PythonAnywhere](https://www.pythonanywhere.com/):** Specifically designed for hosting Python web applications. It's very easy to get started with but might be less flexible than Render or Fly.io.

**Recommendation:** **Render**. It strikes the best balance between ease of use, features, and a suitable free tier for your FastAPI backend.

---

## 2. Recommended Deployment Setup

The most common and professional setup is to use a Git-based workflow. You connect your GitHub repository to your hosting providers, and they handle the rest.

### The Workflow: GitHub → Vercel (Frontend) & Render (Backend)

#### Step 1: Prepare Your GitHub Repository

You can either:
a. **Split into two repositories:** One for `frontend` and one for `backend`. This is a clean approach.
b. **Use a monorepo:** Keep both in the same repository (as you have now). Both Vercel and Render can be configured to work with subdirectories.

#### Step 2: Deploy the Backend on Render

1.  **Sign up for Render** using your GitHub account.
2.  Click **New +** > **Web Service**.
3.  Connect your GitHub repository.
4.  **Configure the service:**
    *   **Name:** Give your service a unique name (e.g., `my-portfolio-backend`).
    *   **Root Directory:** `backend` (if you are using the monorepo).
    *   **Environment:** `Python 3`.
    *   **Region:** Choose a region closest to you.
    *   **Build Command:** `pip install -r requirements.txt`.
    *   **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`. (This assumes your FastAPI instance is named `app` in `server.py`).
5.  Click **Create Web Service**. Render will build and deploy your backend.
6.  Once deployed, Render will give you a public URL (e.g., `https://my-portfolio-backend.onrender.com`). **Copy this URL.**
7.  **Add Environment Variables:** Go to the "Environment" tab for your service on Render and add any secrets from your `backend/.env` file (like API keys or database URLs).

#### Step 3: Deploy the Frontend on Vercel

1.  **Sign up for Vercel** using your GitHub account.
2.  **Import Project** and select your GitHub repository.
3.  **Configure the project:**
    *   **Framework Preset:** Vercel will likely detect `Create React App`.
    *   **Root Directory:** `frontend` (if you are using the monorepo).
4.  **Environment Variables:** Expand this section and add a new variable:
    *   **Name:** `REACT_APP_API_URL`
    *   **Value:** The backend URL you copied from Render (`https://my-portfolio-backend.onrender.com`).
5.  Click **Deploy**. Vercel will build and deploy your React app.

#### Step 4: Handle CORS on the Backend

Your frontend, now hosted on a Vercel domain, will make requests to your backend on a Render domain. You must configure your FastAPI backend to allow this.

In your `server.py`, add the `CORSMiddleware` to allow requests from your Vercel frontend's domain.

```python
# In your server.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000", # For local development
    "https://your-frontend-app.vercel.app" # Your deployed frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ... rest of your API code
```

You will need to redeploy the backend after adding this code.

---

## 3. How to Update Your Site (CI/CD)

This setup provides a full **CI/CD (Continuous Integration/Continuous Deployment)** pipeline.

*   **How it works:** Both Vercel and Render are connected to your GitHub repository's `main` branch.
*   **To update:**
    1.  Make your code changes locally.
    2.  Commit and push your changes to GitHub: `git push origin main`.
    3.  Vercel and/or Render will automatically detect the push.
    4.  They will trigger a new build and deployment for the respective service (frontend or backend).
    5.  Within minutes, your changes will be live.

This is the standard for modern web development. You don't need to manually upload files or run deployment commands.

### CMS Integration

A **CMS (Content Management System)** is used to manage content (like blog posts or project descriptions) without needing to change the code.

*   **Headless CMS:** For your stack, a "headless" CMS is the way to go. It provides a content API, and your React app fetches the content from it.
*   **Popular Options:** [Sanity](https://www.sanity.io/), [Strapi](https://strapi.io/), [Contentful](https://www.contentful.com/).
*   **Is it necessary?** For a personal portfolio, it's likely overkill unless you plan to blog frequently. For now, managing content directly in your code is perfectly fine. It's a great concept to explore for future, larger projects.

---

## Summary: Your Professional Setup

*   **Code:** Hosted on **GitHub**.
*   **Frontend:** Deployed on **Vercel** (or Netlify).
*   **Backend:** Deployed on **Render**.
*   **Workflow:** `git push` automatically updates your live site.

This setup is beginner-friendly, highly professional, scalable, and uses the same patterns and tools found in many tech companies.
