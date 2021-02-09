var api_url = '';
var app_url = '';
switch( process.env.NODE_ENV ){
  case 'development':
    api_url = 'http://blog.luoxune.com/api/v1/';
    app_url = 'http://blog.luoxune.com/';
    break;
  case 'production':
    api_url = 'http://blog.luoxune.com/api/v1/';
    app_url = 'http://blog.luoxune.com/';
    break;
}

export const APP_CONFIG = {
  API_URL: api_url,
  APP_URL: app_url,
};
