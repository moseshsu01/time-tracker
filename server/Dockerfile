FROM node:18-alpine

ARG Timezone="America/Vancouver"
ENV TZ=${Timezone}

WORKDIR /app

EXPOSE 8000

COPY ./package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]