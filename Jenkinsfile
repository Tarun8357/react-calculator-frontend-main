pipeline {
    agent any

    stages {
		stage('FrontEnd Build') {
            steps {
               withCredentials([usernamePassword(credentialsId: 'accessId-1', usernameVariable: 'Tarun8357', passwordVariable: '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')]) {
                    git branch: 'main', credentialsId: 'accessId-1', url: 'https://github.com/Tarun8357/react-calculator-frontend-main.git'
                }

                // To install the node 
                 bat "npm install"
				 
				// To run the application 
				 bat "npm run build"
            }
			
            steps {
                bat 'npm install --save @testing-library/react @testing-library/jest-dom'
                echo "Test called"
                bat 'npm test'
                
            }
        }

    }
}