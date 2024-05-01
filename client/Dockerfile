FROM node:18-alpine

ARG Timezone="America/Vancouver"
ENV TZ=${Timezone}

WORKDIR /app

EXPOSE 3000

COPY ./package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]