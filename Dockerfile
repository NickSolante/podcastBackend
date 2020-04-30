FROM node:13.5

WORKDIR /app
COPY ./app ./

RUN npm ci

EXPOSE 8080