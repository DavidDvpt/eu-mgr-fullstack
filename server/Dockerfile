FROM node:16.13-alpine3.12

RUN npm i -g typescript
RUN npx prisma

WORKDIR /app

COPY ./package*.json ./
RUN npm i

COPY . .

RUN npx prisma generate
RUN tsc

EXPOSE 8000


CMD ["npm", "start"]