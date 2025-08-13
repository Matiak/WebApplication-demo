# Task Manager Demo

A simple fullstack app with:
- Backend: Node.js + Express (in `server/`)
- Frontend: HTML/CSS/JavaScript (in `client/`)

## 🚀 Deploy Instructions

### Backend (Render)
1. Create a free [Render](https://render.com/) account.
2. Click "New Web Service" → "Connect to GitHub".
3. Select this repo, set **Root Directory** to `server/`, **Build Command** to `npm install`, and **Start Command** to `npm start`.
4. Deploy and copy the URL (e.g., `https://myapp.onrender.com`).

### Frontend (Vercel)
1. Create a free [Vercel](https://vercel.com/) account.
2. "New Project" → Import GitHub repo.
3. Set **Root Directory** to `client/`.
4. Edit `index.html` → replace `API_URL` with your Render backend URL.
5. Deploy.

✅ Done! Your fullstack app is live.
