import { environment } from 'src/environments/environment';

export const appConstants = {
    baseUrl: environment.apiHost + '/api',
    version: '/v1',
    api: {
        auth: {
            login: '/users/login',
        },
        categoryskill: {
            category: '/categories',
            skill: '/skills'
        },
    }
};
