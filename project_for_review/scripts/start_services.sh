#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

export DOCKER_COMPOSE_FILE=${PROJECT_DIR}/docker-compose.yml
export DOCKER_COMPOSE="docker-compose --log-level ERROR -f ${DOCKER_COMPOSE_FILE}"
export DOCKER_REPOSITORY=${DOCKER_REPOSITORY:-"docker.com"}
export EXPOSE_PORTS=${EXPOSE_PORTS:-'true'}
export SERVER_TAG=${SERVER_TAG:-'latest'}
export SITE_TAG=${SITE_TAG:-'latest'}
export TIMEOUT=200

function cleanup {
    ${DOCKER_COMPOSE} rm -fsv migrate-apollo-matchcenter-db migrate-apollo-betting-db init-apollo-db
}

function create_volume {
    docker volume ls -q -f "name=$1" | grep -q . || docker volume create --name=$1
}

function build_docker_compose_command {
    if [ ${EXPOSE_PORTS} = 'true' ]; then
        export DOCKER_COMPOSE="${DOCKER_COMPOSE} -f ${PROJECT_DIR}/docker-compose.local.yml"
    fi
}

function start_service {
    ${DOCKER_COMPOSE} up -d "$1" || exit 1
}

function wait_until_service_is_up {
    sh ${PROJECT_DIR}/scripts/wait-for-service.sh $1 || exit 1
}

function start_service_and_wait {
    start_service $1
    wait_until_service_is_up "$1"
}

function start_db {
    start_service_and_wait db 
}

function start_backend {
    start_service server
    wait_until_service_is_up server
}

function start_frontend {
    ${DOCKER_COMPOSE} up -d site
}

build_docker_compose_command
docker-compose --log-level ERROR -f ${DOCKER_COMPOSE_FILE} pull
start_db
start_backend
start_frontend