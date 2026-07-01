# Carscore

ML-powered car resale scoring app. Users input six car attributes and receive a score from 0–3 (unacceptable → very good), predicted by a neural network trained on the UCI car evaluation dataset.

## Architecture

Monorepo with two sub-packages:

- `client/` — Vue 2 SPA (Vuetify, Vuex, Vue Router)
- `server/` — Express API with TensorFlow.js-node for inference

The root `package.json` orchestrates installs and builds across both. In production, Express serves the built frontend statically from `server/public/`.

## Commands

All commands run from the repo root unless noted.

```bash
npm install          # Install all deps (client + server) and build both
npm run client_dev   # Vue dev server with hot-reload
npm run server_dev   # Express with nodemon (port 8080)
npm run client_lint  # ESLint on client code
npm start            # Production server (NODE_ENV=production, port 8080)

# Retrain the neural network from scratch (run from root)
npm run server_train_nn
```

## API

**POST /api/score**

Request body:
```json
{
  "car": {
    "buying":  "vhigh | high | med | low",
    "maint":   "vhigh | high | med | low",
    "doors":   "2 | 3 | 4 | 5more",
    "persons": "2 | 4 | more",
    "lug_boot":"small | med | big",
    "safety":  "low | med | high"
  }
}
```

Response:
```json
{ "score": 0 }  // 0=unacceptable, 1=acceptable, 2=good, 3=very good
```

## Data flow

```
CarscoreMainForm.vue (client)
  → Vuex scoring module (store/modules/scoring.js)
  → POST /api/score via Axios
  → scoreRouter → scoreController → ScoringService
  → one-hot encodes 6 attributes → 24-feature tensor
  → TF.js model inference (sigmoid hidden layer, softmax output)
  → argmax of 4-class probability vector → score 0–3
  → ResultStars.vue renders score
```

## Key file locations

| Purpose | Path |
|---|---|
| Server entry point | `server/server.js` |
| Express app setup | `server/app.js` |
| Score API route | `server/api/routes/scoreRouter.js` |
| Score controller | `server/api/controllers/scoreController.js` |
| ML inference service | `server/api/services/scoring/ScoringService.js` |
| Trained model | `server/api/services/scoring/neuralNet/carscoreNN/model.json` |
| Feature encoding map | `server/api/services/scoring/neuralNet/encoding.js` |
| Training script | `server/api/services/scoring/neuralNet/train.js` |
| Vuex store root | `client/src/store/store.js` |
| Scoring Vuex module | `client/src/store/modules/scoring.js` |
| Main form component | `client/src/components/form/CarscoreMainForm.vue` |

## Compatibility notes

**Node 22+ / webpack 4:** `client/package.json` build and serve scripts prefix `NODE_OPTIONS=--openssl-legacy-provider`. Webpack 4 uses OpenSSL's MD4 algorithm, which OpenSSL 3.x (Node 17+) disabled by default.

**Node 22+ / TF.js-node 3.x:** `server/server.js` polyfills `util.isNullOrUndefined` at startup. This function was removed from Node core after v21; `@tensorflow/tfjs-node@3.6.1` calls it internally during tensor operations.

**TF.js native addon:** The server `build` script rebuilds the TF.js native addon from source (`npm rebuild @tensorflow/tfjs-node --build-addon-from-source`). This runs automatically during `npm install` via the root `postinstall` hook.
