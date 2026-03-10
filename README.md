# Node Docker Example

Small Express app prepared for Docker Compose development and production-style runs.

## What Changed

This project now uses a layered Docker Compose setup:

- `docker-compose.yml` defines the shared app build plus a MongoDB service
- `docker-compose.dev.yml` adds the development container settings
- `docker-compose.prod.yml` adds the production container settings
- `development.env` and `production.env` provide environment-specific values

## Stack

- Node.js
- Express
- Mongoose
- Docker Compose
- MongoDB

## Project Structure

```text
.
|-- config/
|   `-- config.js
|-- development.env
|-- docker-compose.dev.yml
|-- docker-compose.prod.yml
|-- docker-compose.yml
|-- Dockerfile
|-- index.js
|-- package-lock.json
|-- package.json
|-- production.env
`-- README.md
```

## Application Behavior

The server reads:

- `PORT` to decide which port to listen on
- `NODE_ENV` to switch the root page message between development and production text
- MongoDB connection settings from environment variables through [`config/config.js`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/config/config.js)

Available routes:

- `GET /` returns a small HTML page with the current environment message
- `GET /health` returns JSON with `status`, `message`, and `uptime`
- `GET /ahmad` returns a simple HTML response

## Local Run

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Start in development

```bash
npm run dev
```

### Start normally

```bash
npm start
```

Default local port:

```text
http://localhost:3003
```

## Docker Compose

### Development

Runs the app with bind mounts and `nodemon`, using values from [`development.env`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/development.env).

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml --env-file development.env up --build
```

Expected app URL:

```text
http://localhost:5055
```

### Production-style run

Runs the production container settings from [`docker-compose.prod.yml`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/docker-compose.prod.yml) with values from [`production.env`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/production.env).

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml --env-file production.env up --build
```

Expected app URL:

```text
http://localhost:5050
```

## Environment Files

[`development.env`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/development.env):

- `PORT=5055`
- `NODE_ENV=development`
- `MONGO_IP=mongodb-container`
- `MONGO_PORT=27017`
- `MONGO_USERNAME=ahmadsamehh`
- `MONGO_PASSWORD=66788`

[`production.env`](/Users/ahmadsameh/Desktop/Work/Portofolio/docker-node-example/production.env):

- `PORT=5050`
- `NODE_ENV=production`

## Scripts

- `npm start` runs `node index.js`
- `npm run dev` runs `nodemon -L index.js`

## Notes

- The base Compose file creates a named volume, `mongodb-volume`, for MongoDB data.
- MongoDB is configured in Compose and through environment variables, but the current app routes do not perform any database operations.
