FROM node:18-alpine

WORKDIR /app

EXPOSE 8000

COPY ./package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]