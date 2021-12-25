FROM node:16.13-alpine3.12

WORKDIR /app

COPY ./package*.json ./
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "start"]