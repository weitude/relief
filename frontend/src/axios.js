import axios from "axios";

const instance = axios.create({
    baseURL: "https://nturelief.up.railway.app/api/",
});

const API_signin = async (name, password) => {
    console.log(password);
    const {
        data: {message, content, type},
    } = await instance.get("/signin", {
        params: {
            name,
            password,
        },
    });

    return {message, content, type};
};

const API_signup = async (name, email, password, role) => {
    const {
        data: {message, type},
    } = await instance.post("/signup", {
        name: name,
        email: email,
        password: password,
        role: role,
    });

    return {message, type};
};

const API_opencard = async (id, isAdmin) => {
    const {
        data: {message, content, type},
    } = await instance.get("/opencard", {params: {id, isAdmin}});

    return {message, content, type};
};

const API_post = async (title, question, tag) => {
    const {
        data: {message, content, type},
    } = await instance.post("/postcard", {
        title: title,
        question: question,
        tag: tag,
    });

    return {message, content, type};
};

const API_reply = async (id, response) => {
    const {
        data: {message, content, type},
    } = await instance.post("/reply", {
        id: id,
        response: response,
    });

    return {message, content, type};
};

const API_promote = async (name) => {
    const {
        data: {message, type},
    } = await instance.post("/promote", {
        name: name,
    });

    return {message, type};
};

const API_search = async (target, tag, isReply) => {
    const {
        data: {message, content, type},
    } = await instance.get("/search", {
        params: {
            target,
            tag,
            isReply,
        },
    });
    console.log("front2", message, content, type);
    return {message, content, type};
};

export {
    API_signin,
    API_signup,
    API_opencard,
    API_post,
    API_reply,
    API_promote,
    API_search,
};
