import requests from "./requests";

import mockRequests from "./mockRequests";
//箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
//下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
//return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });
export const reqFloorList = () => mockRequests.get("/floor");
export const reqGetSearchList = (params) =>
  requests({ url: "/list", method: "post", data: params });
