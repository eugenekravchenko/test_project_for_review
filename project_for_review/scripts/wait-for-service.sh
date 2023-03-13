#!/usr/bin/env bash

if [ -z ${DOCKER_COMPOSE+x} ]; then echo "DOCKER_COMPOSE is unset"; exit 1; fi;

container_id=$(${DOCKER_COMPOSE} ps -q $1)
echo "Waiting for $1 with id $container_id"
while [ $(docker inspect --format "{{json .State.Health.Status }}" "$container_id") != "\"healthy\"" ];
    do printf ".";
    sleep 1;
done

echo ""
