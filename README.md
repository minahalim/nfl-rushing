### Installation and running this solution

## Requirements to run locally

- Node v12.18.3
- NPM v7.5.3

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all the dependencies needed for the project to run

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

This will generate a build folder with index.html file that could be run using a server like http-server

to run the production version of the app, first install http-server globally

### `sudo npm install -g http-server`

after installing http-server globally, navigate to the build folder

### `cd build`

once you are inside the build folder, you can serve the files

### `http-server .`

this will start a local server with localhost and external address on port 8080

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

**Note: I have duplicated the data to rushing.json so now it's exceeding 6k records**
