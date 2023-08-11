/**
 * ASYNC
 */

const jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/";

// const get = (url, cb) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.send();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         cb(null, response);
//       } else {
//         cb("Hata: " + xhr.status, null);
//       }
//     }
//   };
// };

//callback hell

// get(`${jsonPlaceholderUrl}users/1`, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//       get(`${jsonPlaceholderUrl}users/2`, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//           get(`${jsonPlaceholderUrl}users/3`, (err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log(data);
//               get(`${jsonPlaceholderUrl}users/4`, (err, data) => {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   console.log(data);
//                   get(`${jsonPlaceholderUrl}users/5`, (err, data) => {
//                     if (err) {
//                       console.log(err);
//                     } else {
//                       console.log(data);
//                     }
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });

// Promise

// const getRequest = (endpoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (request.readyState === 4) {
//         if (request.status === 200) {
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else {
//           reject(`${request.status} - Hata`);
//         }
//       }
//     };
//     request.open("GET", endpoint);
//     request.send();
//   });
// };

// console.log(1);
// console.log(2);
// getRequest(`${jsonPlaceholderUrl}users/1`).then((res) => {
//   console.log(res);
//   return getRequest(`${jsonPlaceholderUrl}users/2`).then((res) => {
//     console.log(res);
//     return getRequest(`${jsonPlaceholderUrl}users/3`).then((res) => {
//       console.log(res);
//       return getRequest(`${jsonPlaceholderUrl}users/4`).then((res) => {
//         console.log(res);
//         return getRequest(`${jsonPlaceholderUrl}users/5`).then((res) => {
//           console.log(res);
//         });
//       });
//     });
//   });
// });
// console.log(3);
// console.log(4);

// //fetch
// // GET
// fetch(`${jsonPlaceholderUrl}comments/`)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data));
// //POST

// const newComment = {
//   postId: 3,
//   name: "Lorem Ipsum",
//   email: "cem@gmail.com",
//   body: "Lorem ipsum dolor sit amet non elit",
// };

// fetch(`${jsonPlaceholderUrl}comments/`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newComment),
// })
//   .then((res) => {
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => console.log(data));

// asycn / await

const getTodoByID = async (todoId) => {
    // console.log("inner 1");
    // console.log("inner 2");
    const res = await fetch(`${jsonPlaceholderUrl}todos/${todoId}`)
    // console.log(res);
    const data = await res.json()
    console.log(data);
    // console.log("inner 3");
    // console.log("inner 4");

    return data
}

console.log("outer 1");
console.log("outer 2");
getTodoByID(7)
console.log("outer 3");
console.log("outer 4");
