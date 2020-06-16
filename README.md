# example-todo-list with ngx sdk

This is an example setup for creating angular 8 sdk from loopback 4 app using openapi spec and openapi-generator-cli that builds on top of `@loopback/example-todo-list`.

# Test the setup

1. Clone this repository.

2. Install the dependencies and start the server.

```sh
# install the dependencies:
npm install;

# start the loopback 4 server
npm start;
```

3. Run the script to create the typescript angular sdk

```sh
# build sdk
npm run sdk:build;

```

You should now get `./sdk` folder containing typescript apis and models ready
to integrate in a ngx app.

# How can I do the same on my Loopback 4 app?

Those are the steps I did to setup the process for building angular sdk.

## Install openapi generator cli

```sh
# install the latest version of "openapi-generator-cli"
npm install @openapitools/openapi-generator-cli -save-dev
```

## Add build-ngx-sdk.sh to loopback root

Copy the shell script from this repository `build-ngx-sdk.sh` to the root directory of your loopback 4 app.

This is the script:

```sh

############# download the openapi.json ################
curl http://127.0.0.1:3000/explorer/openapi.json \
  --output openapi.json

############## create the sdk ##################
./node_modules/.bin/openapi-generator generate \
  -i openapi.json \
  -g typescript-angular \
  -o sdk \
  --additional-properties=\"ngVersion=8.3.1\"

```

The script does two things:

1. it downloads the OpenApi specs
2. it creates the typescript angular sdk

Modify the parameters in the script as needed.

## Add script package.json

In package.json of the loopback root folder add those two scripts:

```jsonc
 "scripts": {

   // ...

    "sdk:build": "bash build-ngx-sdk.sh",
   // ...

  }
```

## Run the script to create the typescript angular sdk

```sh

# start server
npm start;

# build sdk
npm run sdk:build;

```
