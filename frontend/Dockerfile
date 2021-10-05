FROM node:14.17.5

WORKDIR /app
COPY ./src/package.json ./
# COPY ./src/package-lock.json ./
RUN yarn install

COPY ./src/ ./

EXPOSE 3000