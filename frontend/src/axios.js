import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:4040/api" });

const API_signin = async (name, password) => {
  console.log(password);
  const {
    data: { message, content, type },
  } = await instance.get("/signin", {
    params: {
      name,
      password,
    },
  });

  return { message, content, type };
};

const API_signup = async (name, email, password, role) => {
  const {
    data: { message, type },
  } = await instance.post("/signup", {
    name: name,
    email: email,
    password: password,
    role: role,
  });

  return { message, type };
};

const API_post = async (title, question, tag) => {
  const {
    data: { message, content, type },
  } = await instance.post("/postcard", {
    title: title,
    question: question,
    tag: tag,
  });
};

// const restart = async () =>
// {
//     const {data: {msg, ans}} = await instance.post('/restart')
//     return {msg, ans}
// }

export { API_signin, API_signup };
