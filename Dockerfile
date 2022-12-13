FROM node:16.16.0

WORKDIR /messenger

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
