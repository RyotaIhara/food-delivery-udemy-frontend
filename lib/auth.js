import axios from "axios"
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//新しいユーザーを登録
export const registerUser = async (userame, email, password) => {
    await axios.post(`${API_URL}/auth/local/register`, {
        username: userame,
        email: email,
        password:password,
    })
    .then((res) => {
        Cookies.set('token', res.data.jwt, { expires: 7 });
        window.location.href = "/";
    })
    .catch((err) => {
        console.log(err);
    });
};

// ログイン処理
export const login = async (identifier, password) => {
    await axios.post(`${API_URL}/auth/local`, {
        identifier: identifier,
        password:password,
    })
    .then((res) => {
        Cookies.set('token', res.data.jwt, { expires: 7 });
        window.location.href = "/";
    })
    .catch((err) => {
        console.log(err);
    });
};
