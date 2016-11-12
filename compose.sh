#!/bin/bash

echo "INFO" "Loading settings..."
source settings.env

COMPOSE_ARGS=$@

# run docker-compose
echo "INFO" "Running docker-compose ${COMPOSE_ARGS}"

DOCKER_COMPOSE=`which docker-compose`
if [ $? -ne 0 ]; then
    DOCKER_COMPOSE=bin/docker-compose
fi

$DOCKER_COMPOSE $COMPOSE_ARGS