#!/bin/bash

up(){
  docker-compose -f "docker-compose-dev.yml" up -d
}

down(){
  docker-compose down
}


case $1 in
  "") up;;
  down) down;;
esac