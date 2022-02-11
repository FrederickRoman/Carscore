# Carscore

<div style="display:flex; flex-direction:column;"><img src="https://github.com/FrederickRoman/Carscore/blob/main/client/src/assets/img/carscoreMetalLogo.svg" alt="Carscore logo" height="320"/>
</div>

## ML-drive car resell scoring

This is a scoring system that uses a neural network train on [UCI car evaluation dataset](https://archive.ics.uci.edu/ml/datasets/car+evaluation). This neural net runs on the back-end and send its response through a REST API.

<div style="display:flex; justify-content:center; align-items:center;">
    <img src="https://github.com/FrederickRoman/Carscore/blob/main/docs/mockups/Homepage_mobile.png" height="300" alt="Carscore home page mobile mockup"/>
    <img src="https://github.com/FrederickRoman/Carscore/blob/main/docs/mockups/Homepage_desktop.png" height="300" alt="Carscore home page desktop mockup"/>
</div>

## Live website

See [Carscore website](https://carscore.heroku.app).

## Tech stack used in this project (all is in this repo)

- Client-side:
    + Vue.js (2)
    + Vuetify
- Server-side:
    + Node 
    + Express
- Machine Learning (NN):
    + Tensorflow.js (Node)

## Project setup

```
npm install
```

### Compiles and hot-reloads for client development

```
npm run client_dev
```

### Compiles and hot-reloads for server development

```
npm run server_dev
```

### Compiles and minifies for production

```
npm run postinstall
```

### Lints and fixes client-side files

```
npm run client_lint
```

### Retrains neural network (this is will overwrite the current one). The best one found so far is on the top level as /neural_network.

```
npm run server_train_nn
```
