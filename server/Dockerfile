FROM node:16.13-alpine3.12

RUN npm i -g typescript

WORKDIR /app

COPY ./package*.json ./
RUN npm i

COPY . .
RUN tsc

EXPOSE 8000


CMD ["node", "dist/server.js"]