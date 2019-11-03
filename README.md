![WeatherApp](https://re2005.github.io/weather-app/assets/weather.png "WeatherApp")


# Welcome to WeatherApp!

[![Build Status](https://travis-ci.com/re2005/weather-app.svg?branch=master)](https://travis-ci.com/re2005/weather-app)

[DEMO](https://re2005.github.io/weather-app/)

The app is kept as simple and lightweight as possible.
It's using Bulma as css framework and FontAwesome for cool icons.

Fully responsive and make use of reusable components to display the weather condition in the home page and city specific page.

You'll can see some cool techniques like:

- Class inheritance
- Cache control
- Pipes
- Route animation
- Child components using parent data
- Event/Data emission from child component to parent component
- Component reusability
- Cool UI ;)
- About 90% unit test coverage


Extra features was added: search and add more cities to the list

The app runs full standalone by just opening the 'index.html' inside the `dist` folder after running `npm run build:prod`  

Commit messages follow Angular guidelines:
https://github.com/angular/angular/blob/master/CONTRIBUTING.md

### References for cache
https://www.oodlestechnologies.com/blogs/Caching-HTTP-Requests-with-Angular/
https://blog.fullstacktraining.com/caching-http-requests-with-angular/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

##TODO
- Persist the added cities on localStorage
- Add e2e tests using Cypress/Nightwatch
- Dockerizer the APP ;)


## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `npm run build` to build the project, running `npm run build:prod` will build for production.
The build artifacts will be stored in the `dist/` directory.

Check dist folder and simple open the file index.html should run as the requirement for this APP.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


Renato Cardoso - https://github.com/re2005
