FROM node:25-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js package-lock.json ./
EXPOSE 3003
CMD ["npm", "run", "dev"]