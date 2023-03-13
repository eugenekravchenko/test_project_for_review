#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

export DOCKER_TESTS_COMPOSE_FILE=${PROJECT_DIR}/docker-compose.hub.yml
export DOCKER_COMPOSE="docker-compose --log-level ERROR -f ${DOCKER_TESTS_COMPOSE_FILE}"
export TIMEOUT=200


function build_docker_compose_command {
        export DOCKER_COMPOSE="${DOCKER_COMPOSE} -f ${PROJECT_DIR}/docker-compose.hub.yml"
}


function start_service {
        ${DOCKER_COMPOSE} up -d selenium-hub chrome firefox edge
}

build_docker_compose_command
start_service
