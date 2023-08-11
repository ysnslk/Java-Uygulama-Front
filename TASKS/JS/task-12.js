// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.
/**
 * XHR
 */
const jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/";

const getRequest = (callBackFn, endpoint) => {
  const request = new XMLHttpRequest();
  console.log(request);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callBackFn(null, data);
    } else if (request.readyState === 4) {
      callBackFn(`${response.status} - Couldn't fetch the data`, null);
    }
  });
  request.open("GET", endpoint);
  request.send();
};

getRequest((error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}, "https://jsonplaceholder.typicode.com/users");

const get = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        cb(null, response);
      } else {
        cb("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send();
};

get(`${jsonPlaceHolderUrl}users`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const postRequest = (callBack, endpoint, data) => {
  const request = new XMLHttpRequest();
  request.open("POST", endpoint, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(null, response);
    } else if (request.readyState === 4) {
      callBack("Hata :" + request.status, null);
    }
  };
  request.send(JSON.stringify(data));
};

const postData = {
  isim: "Yasin",
  yas: 27,
};

postRequest((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}, `${jsonPlaceHolderUrl}users`,postData);
