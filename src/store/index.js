
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import home from './home.js';
import search from './search.js';
import detail from "./detail.js";
import shopcart from "./shopcart";
import user from "./user";


export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
    }
})