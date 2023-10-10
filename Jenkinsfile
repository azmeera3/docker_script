pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    def gitRepoUrl = 'https://github.com/azmeera3/docker_script.git'
                    def gitBranch = 'main' // Replace with the desired branch name
                    
                    checkout([$class: 'GitSCM',
                        branches: [[name: gitBranch]],
                        userRemoteConfigs: [[url: gitRepoUrl]]
                    ])
                    
                    sh "cp Dockerfile \${WORKSPACE}/dockerfile"
                }
            }
        }

        stage('Build') {
            steps {
         
                sh "docker build -t azmeera3/my-docker-image \${WORKSPACE}"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "docker login -u azmeera3 -p Srikrishna1!"
                sh "docker push azmeera3/my-docker-image:latest"

            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
