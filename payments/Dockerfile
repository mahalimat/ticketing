FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=prod
COPY . .

CMD ["npm", "start"]