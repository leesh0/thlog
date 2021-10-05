FROM node:14

# Create app directory
WORKDIR /app
COPY ./src/ ./

# global install & update
# RUN npm i -g npm && npm i -g yarn

RUN rm yarn.lock
RUN yarn

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]