# starter_docker_nodejs
I am learning docker with nodejs and it's just simple repo to know how its works!

## Installation

Before clone the repo, you must have node.js, docker on your device.
 
    Fork this repo 
    $ git clone https://github.com/<username_github>/starter_docker_nodejs.git

## Remember to install all the dependencies...

    $ npm install
  
## Use this command to operate the docker   
    $ docker build -t hello-docker .
    $ docker run -it -p 7000:3000 hello-docker

## Usage and this time our server run in docker container 
    $ localhost:7000
    $ localhost:/name?name=any_name_here
    
#

## What I done - While using docker with nodejs
## Firstly,
  - we have to create a new dir name of ```Dockerfile``` and add this

        FROM node:10
        WORkDIR /index
        COPY package.json /index
        RUN npm install
        COPY . /index
        CMD node index.js
        EXPOSE 7000
        
 ## Secondly
  - use this command as to build an image from a ```Dockerfile```
  
        docker build -t hello-docker .
        
  - use this command as to run a command in a container

        docker run -it -p 7000:3000 hello-docker
   
  - know the running the docker container
        
        docker ps
        
  - stop our container 
      
        docker stop <container_name or id>
 #

## Check the endpoint
### Getting all data that we have in our db/api
       GET /
### Searching the name
       GET /name?name=<any_name>
#

## Remove node_modules from git in vscode
#### Run below commands in your terminal
    git rm -r --cached node_modules
    git commit -am "node_modules be gone!"
    git push origin master

    
## Resources   
[Nodejs Docs](https://nodejs.org/en/docs/)
    
[Expressjs Docs](https://expressjs.com/en/guide/writing-middleware.html)
    
[Docker Docs](https://docs.docker.com/reference)
