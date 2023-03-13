#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

export DOCKER_TESTS_COMPOSE_FILE=${PROJECT_DIR}/docker-compose.hub.yml
export DOCKER_COMPOSE="docker-compose --log-level ERROR -f ${DOCKER_TESTS_COMPOSE_FILE}"
export TIMEOUT=200

function build_docker_compose_command {
        export DOCKER_COMPOSE="${DOCKER_COMPOSE} -f ${PROJECT_DIR}/docker-compose.hub.yml"
}

function stop_service {
        ${DOCKER_COMPOSE} stop chrome firefox edge selenium-hub
}

build_docker_compose_command
stop_service
