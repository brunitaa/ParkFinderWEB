import axios from "./axios";

export const get20Bidders = async () =>
  axios.get("/auth/admin/users/bidders/top/20");

export const get20Users = async () =>
  axios.get("/auth/admin/users/customers/top/20");

export const get20WorstBidders = async () =>
  axios.get("/auth/admin/users/bidders/worst/20");

export const get20WorstUsers = async () =>
  axios.get("/auth/admin/users/customers/worst/20");
