import axios from "axios";

const service = axios.create({
  withCredentials: false,
  baseURL: "https://cnodejs.org/api/v1",
  timeout: 3 * 60 * 1000
});

service.interceptors.request.use(
  config => {
    if (config.method === "POST") {
      config.headers["Content-type"] = "application/json;charset=UTF-8";
    }
    return config;
  },
  error => {
    Promise.reject(error).then(r => console.log(r));
  }
);

service.interceptors.response.use(response => {
  const res = response.data;
  if (res.success) {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject("服务异常，请稍后再试！");
  }
});

export default service;
