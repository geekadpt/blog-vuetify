/*
 |-------------------------------------------------------------------------------
 | VUEX store.js
 |-------------------------------------------------------------------------------
 | Builds the data store from all of the modules for the Supcell app.
 */

/**
 * Adds the promise polyfill for IE 11
 */
require('es6-promise').polyfill();

/**
 * Import Vue and Vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {app} from "./modules/app";
import {users} from "./modules/users";
import {articles} from "./modules/articles";
import {categories} from "./modules/categories";
/**
 * Initializes Vuex on Vue.
 */
Vue.use( Vuex );

/**
 * Export our data store.
 */
export default new Vuex.Store({
  modules: {
    app,
    users,
    articles,
    categories
  }
});
