# Nutritionix API examples

A project with Nutritionix API examples which could be used as a boilerplate for your Angular 1.x web app integrated with Nutritionix API. It is based on [angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack), so to get a better understanding of the tools and workflow used, check [its documentation](https://angular-fullstack.github.io/)

## Getting Started

### Quick Start

1. Create `local.env.js` file in [server/config](server/config) folder, specifying Nutritionix app credentials
2. Ensure [Docker](http://docker.com/) is installed and run:

```sh
docker-compose up
```

Navigate to [localhost:9000](http://localhost:9000/)

### Developing

1. Create `local.env.js` file in [server/config](server/config) folder, with Nutritionix app credentials
2. Ensure the following tools installed:
    - [Git](https://git-scm.com/)
    - [Node.js and npm](nodejs.org) (Tested on node 7.9.0, but may also work on previous versions >4.x.x)
    - [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
3. Run `npm install` to install server dependencies.
4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve:dist` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
