import axios from 'axios';
export class BaseApi {
    constructor() {
        this.http = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            timeout: 15000,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
