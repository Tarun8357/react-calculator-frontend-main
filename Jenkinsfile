pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                branches: [[name: '*/main']], 
                doGenerateSubmoduleConfigurations: false, 
                userRemoteConfigs: [[url: 'https://github.com/Tarun8357/react-calculator-frontend-main.git']]])
            }
        }
        
        stage('Build') {
            steps {
                echo "Build called"
                bat ' set CI=false && npm install'
                bat ' set CI=false && npm run build'
            }
        }
        
        stage('Test') {
            steps {
				bat 'set CI=false && npm install jest'
                echo "Test called"
                bat ' set CI=false && npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy called"
                
                // Uncomment these lines if you want to deploy using an HTTP server
                // bat 'npm install -g http-server'
                // bat 'http-server -p 4200 -c-1 dist/calculatormvc'
            }
        }
        
        // Add other stages as needed
        
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'dist/*', allowEmptyArchive: true
            cleanWs()
        }
        
        success {
            echo 'Build successful!'
            
            emailext (
                subject: 'Build Successful',
                body: 'Your build was successful.',
                to: 'tarun.dhakad@unoveo.com'
            )
        }
        
        failure {
            echo 'Build failed!'
            
            emailext (
                subject: 'Build Failed',
                body: 'Your build has failed.',
                to: 'tarun.dhakad@unoveo.com'
            )
        }
    }
}
