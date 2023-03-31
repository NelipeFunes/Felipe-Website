FROM node:18.14.1-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3010
