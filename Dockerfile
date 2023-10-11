FROM node:20-alpine

WORKDIR /abhi/app/

COPY package.json .
COPY newplace.js .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["node", "newplace.js"]
