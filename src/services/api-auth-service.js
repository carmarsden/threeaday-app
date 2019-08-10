import config from '../config';

const ApiAuthService = {
    postLogin({ user_name, password }) {
        return fetch(`${config.API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        })
            .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
    },
}

export default ApiAuthService;