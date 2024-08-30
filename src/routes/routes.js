import { lazy } from "react";


export const Home = lazy(() => import("../components/home/home.jsx"))
export const GetById = lazy(() => import("../components/getById/getById.jsx"))
export const Login = lazy(() => import("../components/login/login.jsx"))
export const Basket = lazy(() => import("../components/store/basket.jsx"))