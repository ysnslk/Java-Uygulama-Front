// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. update isteğini Put ve Patch olacak şekilde ayrı ayrı atın. Toplamda 5 then, 5 async/await isteği atacaksınız. isteklerinizi fonksiyon içerisinde tanımlayın.

//getCommentById, getAllComments, deleteComment, updateComment

/**
 * GET
 */
const url = "https://jsonplaceholder.typicode.com/";
// getAllCommentsFetch
const getAllCommentsFetch = () =>
  fetch(`${url}comments/`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data));

// getAllCommentsAwait
const getAllCommentsAwait = async () => {
  const res = await fetch(`${url}comments/`);
  const data = await res.json();
  console.log(data);

  return data;
};
getAllCommentsFetch();
getAllCommentsAwait();

/**
 *
 * GET BY ID
 */
//getCommentByIdFetch

const getCommentByIdFetch = (id) =>
  fetch(`${url}comments/${id}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data));

//getCommentByIdAwait

const getCommentByIdAwait = async (id) => {
  const res = await fetch(`${url}comments/${id}`);
  const data = await res.json();
  console.log(data);

  return data;
};
getCommentByIdFetch(1);
getCommentByIdAwait(2);

//updateComment

const comment = {
  postId: 1,
  body: "Lorem ipsum dolor sit amet non elit",
};

const updateCommentFetch = (comment,id) => {
  return fetch(`${url}comments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data));
};

updateCommentFetch(comment,5);

const updateCommentAwait = async (id,comment) => {
    const res = await fetch(`${url}comments/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    const data = await res.json(comment);
   
    console.log(data);
    console.log("aaa");
    return data;
  };

updateCommentAwait(5,comment);

// deleteComment
const deleteCommentFetch = (id) => {
  return fetch(`${url}comments/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data));
};

deleteCommentFetch(5);

const deleteCommentAwait = async (id) => {
  const res = await fetch(`${url}comments/${id}`,{
    method: "DELETE",
  });
  const data = await res.json();
  const data1 = "Data Deleted";
 
  console.log(data1);
  return data;
};
deleteCommentAwait(5).then(res => console.log(res));

const updateCommentFetch1 = (comment,id) => {
  return fetch(`${url}comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data));
};

updateCommentFetch1(comment,10);
getAllCommentsAwait(10);