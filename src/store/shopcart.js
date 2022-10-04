import {
  reqCartList,
  reqDeleteCartById,
  reqUpdateCheckedById,
} from "@/api/index";
import { Promise } from "q";
const state = { cartList: [] };
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      if (item.isChecked == 1) {
        PromiseAll.push(dispatch("deleteCartListBySkuId", item.skuId));
      }
    });
    return Promise.all(PromiseAll);
  },
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
