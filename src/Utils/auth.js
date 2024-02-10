import axios from "axios";

export function isLoggedIn() {
  const token = localStorage.token;
  if (!token) return Promise.reject(new Error("token not found"));

  return axios.get(process.env.REACT_APP_BACK_END_API_URI + "/token", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
}
