import axios from "axios";
import xhr from "axios/lib/adapters/xhr";
import mockMap from "./_mock";

const http = axios.create({
  baseURL: "/api"
});

http.defaults.adapter = (config) => {
  const { method, url, baseURL } = config;
  const key = `${method?.toUpperCase()} ${baseURL}${url}`;
  console.log(key, method);
  const fn = mockMap![key];
  console.log(fn);
  if (fn) {
    return Promise.resolve({
      config,
      data: fn()
    });
  } else {
    return xhr(config);
  }
};

export { http };
