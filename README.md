<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">An Example of use cookie session in NestJs</p>

## Description

 This little project contains an example of the use of cookies session in NestJs. 
When I was making the project I installed the package with the command: 
```bash
$ npm install cookie-session @types/cookie-session
``` 

The previous command is not necessary if you clone the project. 



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Proving in the navigator

In navigator set the url: http://localhost:3000/colors/blue

This will set a cookie in the header, as an encrypted json of

```
 session --> { color: 'blue' }
```

session=eyJjb2xvciI6ImJsdWUifQ==;

> In the backed the Cookie-Session decode the string

> Next the value is added to the session object

Later with a new request to the url: http://localhost:3000/colors

> The session object is returned to front


## Stay in touch

- Author - [Rafael Gamez Diaz](https://github.com/rafaelgamezdiaz)