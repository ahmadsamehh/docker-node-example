FROM node:alpine
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then npm install --omit=dev; else npm install; fi
COPY index.js package-lock.json ./
EXPOSE ${PORT}
