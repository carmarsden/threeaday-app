import config from '../config';
import TokenService from './token-service';

const EntriesService = {
    getSomePublic(quantity) {
        return fetch(`${config.API_BASE_URL}/entries?quantity=${quantity}`)
            .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
    },

    getByUser() {
        return fetch(`${config.API_BASE_URL}/entries/byuser`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
    },
}

export default EntriesService;