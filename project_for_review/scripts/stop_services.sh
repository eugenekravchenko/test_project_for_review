#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

docker-compose --log-level ERROR -f ${PROJECT_DIR}/docker-compose.yml down -v
docker-compose --log-level ERROR -f ${PROJECT_DIR}/docker-compose.hub.yml down -v
