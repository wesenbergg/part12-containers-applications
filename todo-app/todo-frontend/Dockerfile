FROM node:20 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm run lint
RUN npm run test
RUN npm run build

RUN npm install -g serve

CMD [ "serve", "-s", "dist" ]