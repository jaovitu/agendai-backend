FROM node:20.9-alpine

WORKDIR /agendai-backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
