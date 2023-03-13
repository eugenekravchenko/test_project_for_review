pipelineJob('dsl-test') {
  logRotator(30, 5, 1, -1)

  parameters {
    stringParam('GIT_BRANCH', 'master', 'Branch of test project')
    stringParam('TEST_RAIL', 'false', 'If need to publish results to TestRail')
    stringParam('SERVER_TAG', 'latest')
    stringParam('SITE_TAG', 'latest')
  }

  environmentVariables {
    env('URL', 'test')
  }

  triggers {
    cron('H 3 * * 1-5')
  }

  definition {
    cps {
      script(readFileFromWorkspace('test_pipeline.groovy'))
      sandbox()
    }
  }
}
