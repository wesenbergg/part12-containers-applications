FROM node:22-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=playground:*

USER node

CMD ["npm", "start"]