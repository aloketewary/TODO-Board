// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase_config : {
    apiKey: 'AIzaSyAOeRvDcGcb0XpHwnOA6zFsAdlBoBZptuE',
    authDomain: 'todo-board-6dcea.firebaseapp.com',
    databaseURL: 'https://todo-board-6dcea.firebaseio.com',
    projectId: 'todo-board-6dcea',
    storageBucket: '',
    messagingSenderId: '274245745490'
  }
};
