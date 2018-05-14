import { FirebaseApp } from "angularfire2";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {

    apiKey: "AIzaSyDKTWWDOban6bo2mZD6kkNzNc4swPaFbs0",
    authDomain: "cita4-fdef8.firebaseapp.com",
    databaseURL: "https://cita4-fdef8.firebaseio.com",
    projectId: "cita4-fdef8",
    storageBucket: "cita4-fdef8.appspot.com",
    messagingSenderId: "148389082836"

  }
};
