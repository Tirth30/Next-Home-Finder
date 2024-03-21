FROM node:alpine as frontend
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
