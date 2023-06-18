import { BASE_URL } from "./URL";
import axios from "axios";

const config = (data, URL, header = null) => {
  return {
    method: "post",
    url: BASE_URL + URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: header,
    },
    data: data,
  };
};

export const CheckData = async data => {
    return axios(config(data, "/CheckData", null));
  };
  