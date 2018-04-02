FROM node:latest

RUN mkdir -p /portal-ui
WORKDIR /portal-ui

COPY package.json /portal-ui

RUN npm install

CMD [ "npm", "start" ]