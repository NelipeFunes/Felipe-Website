import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

const login = async (email:string , password: string) => {
    try {
        const {data: { token }} = await api.post(`/users/login`, { email, password });
        return token;
    } catch (error: any) {
        const { response: { data: { message } } } = error
        return message;
    }
}

export {
    login,
}