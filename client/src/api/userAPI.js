import Auth from '../utils/auth';

const apiFetch = async (url, method = 'GET', body = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.getToken()}`,
        };

        const options = {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;

    } catch (err) {
        console.log('Error from data retrieval:', err);
        return null; 
    }
};


const retrieveUser = (id) => {
    return apiFetch(`/api/users/${id}`);
};

const retrieveUserByEmail = (email) => {
    return apiFetch(`/api/users/email/${email}`);
};

const updateUser = (id, userInfo) => {
    return apiFetch(`/api/users/${id}`, 'PUT', userInfo);
};

export { retrieveUser, retrieveUserByEmail, updateUser, apiFetch };
