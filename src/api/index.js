import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });
export const reqFloorList = () => mockRequests.get("/floor");
export const reqGetSearchList = (params) =>
  requests({ url: "/list", method: "post", data: params });
export const reqGoodInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
export const reqCartList = () =>
  requests({ url: `/cart/cartList`, method: "get" });
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
