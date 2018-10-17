// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  baseUri:"http://localhost:8080/api/",
  ORDERS_URI:"http://localhost:8080/shopify/orders",
  TOKEN:"https://mnk-angular-express.herokuapp.com/access/t",
  VENDORS_URI_GET: "http://localhost:8080/api/vendors",
  VENDORS_URI_SAVE: "http://localhost:8080/api/vendor",
  COURIER_URI_SAVE: "http://localhost:8080/api/courier",
  production: false
};
