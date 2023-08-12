FROM node:18.17.0-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3010
