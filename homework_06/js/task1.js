let http = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function () {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.response);
          resolve(json);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function (error) {
        reject(error);
      };
      xhr.send();
    });
  },
  post: function (url, parameters) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      let params = JSON.stringify(parameters);
      xhr.open("POST", url);
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function (error) {
        reject(error);
      };
      xhr.send(params);
    });
  }
};