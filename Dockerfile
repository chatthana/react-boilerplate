FROM node:carbon

WORKDIR /usr/src/app

RUN npm install -gs serve

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["serve", "-s", "build"]

