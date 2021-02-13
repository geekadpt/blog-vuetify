/**
 * Imports the LvBlog API URL from the config.
 */
import { APP_CONFIG } from '../config.js';
import { post,get,patch ,put , del } from './axios'

export default {

    indexTags: function(data){
        return get(APP_CONFIG.API_URL + 'tags');
    },
}
