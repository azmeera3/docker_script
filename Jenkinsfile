pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the code from the Git repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Define your Docker image name and tag
                    def dockerImage = 'asgn_docker'
                    def dockerTag = "${env.BUILD_NUMBER}" // You can use Jenkins build number as the image tag

                    // Build the Docker image
                    sh "docker build -t ${dockerImage}:${dockerTag} ."
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Docker Hub credentials
                    def dockerHubCredentials = credentials('your-dockerhub-credentials-id')

                    // Docker image name
                    def dockerImage = 'your-dockerhub-username/your-image-name'
                    def dockerTag = "${env.BUILD_NUMBER}"

                    // Log in to Docker Hub
                    withDockerRegistry([credentialsId: dockerHubCredentials, url: 'https://index.docker.io/v1/']) {
                        // Push the Docker image to Docker Hub
                        sh "docker push ${dockerImage}:${dockerTag}"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up: remove the local Docker image
            sh "docker rmi ${dockerImage}:${dockerTag}"
        }
    }
}
