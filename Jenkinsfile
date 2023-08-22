pipeline {
    agent any

    stages {
        stage('FrontEnd Build') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'accessId-1', usernameVariable: 'Tarun8357', passwordVariable: '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')]) {
                    git branch: 'main', credentialsId: 'accessId-1', url: 'https://github.com/Tarun8357/react-calculator-frontend-main.git'
                }
                bat " CI = false npm install"
                bat " CI = false npm run build"
            }

            post {
                success {
                    emailext body: 'Build Installed Successfully', subject: 'Build Mail', to: 'tarun.dhakad@unoveo.com'
                    echo "Build Successful"
                }
            }
        }

        stage('Test') {
            steps {
                bat "npm install --save @testing-library/react @testing-library/jest-dom"
                bat "process.env.CI = false npm test"  // This line runs Jest tests
            }
        }
    }
}
