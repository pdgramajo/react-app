import axios from 'axios';

const host = 'http://localhost:3000/';
const namespace = 'api/';

const BASE_URL = host + namespace;

export default class Api {
    static get(url) {
        return new Promise((resolve, reject) => {
            axios.get(BASE_URL + url)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}
