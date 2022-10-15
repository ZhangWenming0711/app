import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from '@/pages/ShopCart';
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
export default [
  {
    path: "/home",
    component: Home,
    meta: {
      show: true,
    },
    name: "home",
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
    name: "search",
    props: true,
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
    name: "register",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
    name: "login",
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: {
      show: false,
    },
    name: "detail",
  },
  {
    path: "/addcartsuccess/:",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
    name: "addcartsuccess",
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
    name: "shopCart",
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      show: true,
    },
    name: "trade",
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true,
    },
    name: "pay",
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: {
      show: true,
    },
    name: "paysuccess",
  },
  {
    path: "*",
    redirect: "/home",
  },
];
