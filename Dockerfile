FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./

RUN npm install
ENV PORT=8000
EXPOSE 8000

CMD [ "npm", "start" ]