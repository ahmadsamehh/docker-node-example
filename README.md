# Node Docker App

A simple Node.js + Express app designed for local development and Docker practice.

## Features

- Express server with a configurable port (`PORT`, default: `3003`)
- Basic routes for home, health check, and a custom endpoint
- Dockerized setup for container-based development
- `nodemon` support for rapid development

## Tech Stack

- Node.js
- Express
- Docker

## Project Structure

```text
.
|-- index.js
|-- Dockerfile
|-- package.json
|-- package-lock.json
`-- README.md
```

## API Routes

- `GET /`  
  Returns a basic HTML page with links to available routes.

- `GET /health`  
  Returns JSON health information:
  - `status`
  - `message`
  - `uptime`

- `GET /ahmad`  
  Returns a simple HTML response.

## Getting Started (Local)

### Prerequisites

- Node.js 18+ (or compatible current version)
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Run normally

```bash
npm start
```

The app will run at:

```text
http://localhost:3003
```

## Running with Docker

### Build image

```bash
docker build -t node-docker-app .
```

### Run container

```bash
docker run -p 3003:3003 --name node-docker-app node-docker-app
```

Then open:

```text
http://localhost:3003
```

## Environment Variables

- `PORT`: server port (default is `3003`)

## Available Scripts

- `npm start` -> runs `node index.js`
- `npm run dev` -> runs `nodemon -L index.js`

## Notes

This project is intended as a lightweight example for learning Docker with Node.js/Express and testing simple endpoint behavior.
