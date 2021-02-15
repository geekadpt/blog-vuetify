var api_url = '';
var app_url = '';
var cdn_url = '';
switch( process.env.NODE_ENV ){
  case 'development':
    api_url = 'http://blog.locyin.com/api/v1/';
    app_url = 'http://blog.locyin.com/';
    cdn_url = 'http://blog.locyin.com/';
    break;
  case 'production':
    api_url = 'https://blog.locyin.com/api/v1/';
    app_url = 'https://blog.locyin.com/';
    cdn_url = 'https://locyin.oss-cn-beijing.aliyuncs.com/';
    break;
}

export const APP_CONFIG = {
  API_URL: api_url,
  APP_URL: app_url,
  CDN_URL: cdn_url,
};
