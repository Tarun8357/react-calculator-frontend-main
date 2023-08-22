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
			

            post {
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                      emailext body: 'Build Installed Successfully', subject: 'Build Mail', to: 'tarun.dhakad@unoveo.com'
		      echo "Build Successfull" 
                }
            }
			

        }
		stage('Test') {
			steps {

				bat 'npm install --save @testing-library/react @testing-library/jest-dom'
				bat 'ng test --include src/app/components/display/display/display.component.spec.ts --no-watch --no-progress'           	 	
			    
            }      	
        }
    }
}