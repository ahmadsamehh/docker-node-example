FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js package-lock.json ./
ENV PORT=5003
EXPOSE 5003
CMD ["npm", "run", "dev"]