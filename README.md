# NestJS Railway Test Project

A simple NestJS application configured for deployment on Railway.

## 🚀 Features

- Basic NestJS setup with TypeScript
- Health check endpoint
- API test endpoint
- CORS enabled
- Railway deployment ready

## 📋 Available Endpoints

- `GET /` - Hello World message
- `GET /health` - Health check with timestamp
- `GET /api/test` - API test endpoint with framework info

## 🏃‍♂️ Running Locally

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run start:dev
```

3. Build for production:
```bash
npm run build
npm run start:prod
```

## 🚂 Deploy to Railway

1. Push this project to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Railway
3. Railway will automatically detect this as a Node.js project
4. The deployment will use the build and start scripts defined in package.json

## 🔧 Environment Variables

- `PORT` - Port number (Railway sets this automatically)

## 📖 Project Structure

```
src/
├── app.controller.ts    # Route handlers
├── app.service.ts       # Business logic
├── app.module.ts        # App module definition
└── main.ts             # Application entry point
```
