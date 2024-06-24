FROM node:20.9-alpine

WORKDIR /agendai-backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npx sequelize db:create
RUN npx sequelize db:migrate

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
