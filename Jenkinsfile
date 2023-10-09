pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Define the URL of the Git repository and branch
                    def gitRepoUrl = 'https://github.com/azmeera3/docker_script.git'
                    def gitBranch = 'main' // Replace with the desired branch name

                    // Checkout the Git repository
                    checkout([$class: 'GitSCM',
                        branches: [[name: gitBranch]],
                        userRemoteConfigs: [[url: gitRepoUrl]]
                    ])

                    // Copy the Dockerfile to the workspace
                    sh "cp Dockerfile \${WORKSPACE}/dockerfile"
                }
            }
        }

        stage('Build') {
            steps {
                // Build the Docker image
                sh "docker build -t azmeera3/my-docker-image \${WORKSPACE}"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub and push the image
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
