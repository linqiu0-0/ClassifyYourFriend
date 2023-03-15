# ClassifyYourFriend
Classify the breed of your dog or cat.

Try our classifier on [ClassifyYourFriends](https://linqiu0-0.github.io/ClassifyYourFriend)!


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


## Build & Deployment
Frontend is deployed through Github static page hosting. To cut a new release on the frontend, 
1. Go to `client` directory
2. run `npm run deploy`

    > That will cause the `predeploy` and `deploy` scripts defined in `client/package.json` to run.
    >
    > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.
    > By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:
    > ```shell
    > $ npm run deploy -- -m "Deploy React app to GitHub Pages"
    > ```
At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. 
You can view our deployed version at [ClassifyYourFriends](https://linqiu0-0.github.io/ClassifyYourFriend).
3. Backend flask server is deployed on the Google cloud run. Follow this [tutorial](https://medium.com/firebase-developers/hosting-flask-servers-on-firebase-from-scratch-c97cfb204579) to learn more.
