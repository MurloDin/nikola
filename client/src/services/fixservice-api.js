import axios from "axios";


const getProjects = () => {
    const apiUrl = 'http://localhost:8000/api/projects';
    const data = axios.get(apiUrl).then((resp) => {
        return resp.data;
    });
    return data
}

const getComments = () => {
    const apiUrl = 'http://localhost:8000/api/comments';
    return axios.get(apiUrl).then((resp) => {
        return resp.data;
    });
};

const getServices = () => {
    const apiUrl = 'http://localhost:8000/api/services';
    return axios.get(apiUrl).then((resp) => {
        return resp.data;
    });
};

export {getProjects, getComments, getServices}