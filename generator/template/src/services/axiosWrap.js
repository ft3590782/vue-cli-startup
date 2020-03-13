import axiosBase from "./axiosBase";

const axiosWrap = config => {
  return new Promise((resolve, reject) => {
    axiosBase(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        //network error handler
        console.log("系统出错,请稍后再试...", err);
      });
  });
};

export default axiosWrap;
