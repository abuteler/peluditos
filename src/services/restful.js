import axios from 'axios';

function restAPI(url, method, params) {
    axios[method](
            url,
            { 'Access-Control-Allow-Origin': '*' },
            { params },
        ).then(response => {
            console.log('in then');
            // JSON responses are automatically parsed.
            return response.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        });
}

function getCB() {
    return Math.random()
        .toString(36)
        .substring(7);
}

export default {
    getAnimal(id) {
        return restAPI(
            'http://192.168.28.68:8080/entities/animals',
            'get',
            { id: id, cb: getCB() },
        );
    },

    getAllAnimalsList() {
        console.log('in getAllAnimalsList');
        return restAPI(
            'http://192.168.28.68:8080/entities/animals',
            'get',
            { cb: getCB() },
        );
    },
};
