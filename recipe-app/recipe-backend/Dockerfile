FROM node:22-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

USER node

CMD ["npm", "start"]