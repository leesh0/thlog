FROM node:14.17.5

RUN npm i -g npm && npm i -g yarn
WORKDIR /app

COPY ./src/package.json ./
# COPY ./src/package-lock.json ./
RUN yarn

COPY ./src/ ./

EXPOSE 3000