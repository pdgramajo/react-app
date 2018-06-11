import axios from 'axios';

const host = 'http://localhost:3000/';
const namespace = 'api/';

const BASE_PATH = host ;//+ namespace;

export default class Api {
    // static Get(url) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(BASE_PATH + url)
    //             .then((response) => {
    //                 console.log('response',response)
    //                 resolve(response);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             })
    //     })
    // }

    static Get(url, params) {
        var config = {
          params,
          baseURL: BASE_PATH
        };
  
        return new Promise((resolve, reject) => {
          axios.get(url, config)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            })
        });
      }


}
