import { reqAddressInfo, reqOrderInfo } from "@/api";
const state = { address: [], orderInfo: {} };
const mutations = {
  ADDRESSINFO(state, address) {
    state.address = address;
  },
  GETORDERINFO(state, data) {
    state.orderInfo = data;
  },
};
const actions = {
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("ADDRESSINFO", result.data);
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
