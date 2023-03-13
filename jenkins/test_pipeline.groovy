@Library('pipeline-shared')
import com.apollo.TestAutomationHelper

def utils = new TestAutomationHelper()

pipeline {
  options { ansiColor('xterm') }
  agent {
    label 'Autotest'
  }
  stages {
    stage('Preparation') {
      steps {
        script {
          sh 'hostname'
          cleanWs()

          checkout([
            $class: 'GitSCM',
            branches: [[name: '*/${GIT_BRANCH}']],
            userRemoteConfigs: [
              [
                credentialsId: 'GITLAB_CREDENTIALS_ID',
                url: "https://gitlab.com/${env.URL}.git"
              ]
            ]
          ])

          sleep(time: 30, unit: 'SECONDS')
          try {
            sh './scripts/start_services.sh'
            sh './scripts/start_selenium_hub.sh'
          } catch (Exception e) {
            sh './scripts/stop_services.sh'
          }
        }
      }
    }

    stage('Test') {
      steps {
        script {
          sh './scripts/run_tests.sh'
          sh './scripts/stop_selenium_hub.sh'
          sh './scripts/stop_services.sh'
        }
      }
    }

    stage('Report') {
      steps {
        script {
          utils.allure(this)
        }
      }
    }
  }
}
