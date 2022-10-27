import axios from "axios";
import { setLoader } from "../store/Actions/loader";
import store from "../store/store";

export const axiosinstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
