FROM node:14.17.5

WORKDIR /app
COPY ./src/package.json ./
# COPY ./src/package-lock.json ./

COPY ./src/ ./
RUN yarn
RUN ls

EXPOSE 3000