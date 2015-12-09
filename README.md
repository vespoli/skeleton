# skeleton2

## What is it

Use this as a scaffold to quickly stand up new front end projects. Can be used for either traditional multi-page, static output type projects or your latest greatest single page application. Looking for the [original skeleton](https://github.com/navigationarts/skeleton)?

## Changes from v1:

- Angular is the default js library (no jQuery).
- Build process now done with gulp. Codekit is gone.
- Updated project structure with conventions application development common/best practices.
- Dev environment setup changes
- Using Bower when possible for external libraries/plugins/modules

## Project Structure

To be updated

## Getting Started

- update package.json and gulpfulie.js for desired project build dependancies
- update bower.json with external library dependancies
- Open terminal and navigate to client > src >

**Install dependencies:**

```
npm install
bower install
```


## Troubleshooting

If you are receiving dependency errors you may be running a newer version of node than what is supported. You should install [nvm](https://github.com/creationix/nvm) . Once installed type "nvm install 0.12.0" and then "nvm use 0.12.0". If you are having trouble getting nvm installed, see this issue for help: https://github.com/creationix/nvm/issues/576



