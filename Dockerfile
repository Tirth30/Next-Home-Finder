FROM node:15.0.0-alpine3.12
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD [ "sh", "-c", "export NODE_OPTIONS=--openssl-legacy-provider && npm start" ]
