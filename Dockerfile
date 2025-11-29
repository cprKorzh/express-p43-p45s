FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5500

EXPOSE 5500

CMD ["npm", "start"]