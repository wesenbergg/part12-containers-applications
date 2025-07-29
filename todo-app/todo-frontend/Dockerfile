FROM node:20 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run lint
RUN npm run test
RUN npm run build

FROM nginx:1.25-alpine

EXPOSE 8080

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html