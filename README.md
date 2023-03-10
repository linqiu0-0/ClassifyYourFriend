# ClassifyYourFriend
Classify the breed of your dog or cat
## Frontend
ClassifyYourFriend frontend uses the React framework with javascript. 

### How to run the system
1. `cd client` from the root directory
2. Install the dependencies: `$ npm install`
3. Start the server: `$ npm start`

## Backend
To run the sever, first install all dependencies in requirements.txt by running `pip install -r requirements.txt`. 
It will be easier to maintain the dependencies in the virtual environment.
Use `. env/bin/activate to activate` your virtual environment to manage the dependencies for your project

### How to run the system
1. `cd server` from the root directory
2. You can launch server by running `$ flask --app server --debug run` 

### How to update dependency

Use `pip freeze > requirements.txt` to introduce new dependencies.