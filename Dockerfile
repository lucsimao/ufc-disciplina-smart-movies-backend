FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i --production

COPY . . 

EXPOSE 8080

CMD ["npm", "start"]