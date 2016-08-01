# frontend-job

The challenge is to create a modern web application with pages to display static content, POST to API, plus as a bonus, listing, editing, and deleting the created resource .

This project has a suggestion to implement this application using React, Flux and Webpack. But it is optional to use it, feel free to create otherwise.

But the test **app/questions.js** must be made and validated by automated tests .

In addition to the web application React, this project has the API server, which stores the data in a local JSON. Once started, the API documentation can be viewed in [http://localhost:3001/documentation](http://localhost:3001/documentation)

The rest of the information is in the home design, [http://localhost:3000](http://localhost:3000).

## Setup

### Node.js 4.x.x

For Mac or Linux is recommended install Node.js from [nvm](https://github.com/creationix/nvm).

```
nvm install 4
nvm alias default 4
```

For Windows, download Node.js's official website.

### Global dependencies

```
npm install -g webpack webpack-dev-server karma-cli
```

### Local dependencies represented in the file **package.json**.

```
npm install
```

## Running...

### Start API

```
npm run server
```

[http://localhost:3001/documentation](http://localhost:3001/documentation)

### Start Webapp

```
npm start
```

[http://localhost:3000](http://localhost:3000)

### Start Karma Tests

```
npm test
```
