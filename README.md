# semantic
Semantic highlighting demo project.  The backend is provided by Python Flask with the frontend provided by Vue.js

## Project setup frontend
```
git clone https://github.com/CognitiveDave/semantic.git
cd to the semantic folder
brew install node
node -v - just make sure node is installed correctly
npm -v - just make sure npm is installed
npm install
npm install -g @vue/cli - install the vue.js command line
vue upgrade - because the code base was written with the current version of tools - vue upgrade will update dependencies and configuration
npm run build - to create the ./dist folder and build the chunks
```

##Python backend
```
pip install -r requirements.txt

cd to the semantic folder
python backend.py

Now you have a development server up and running with a Vue.js frontend.
Python servers the Vue.js created index.html so there is no CORS issues.
There is only one server running.  NPM run serve (is not used and creates a CORS issue)
Navigate to http://192.168.1.8:5006/
and the vue.js application will open and demonstrate semantic highlighting
```
