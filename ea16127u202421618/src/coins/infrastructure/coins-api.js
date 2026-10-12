import axios from 'axios';
export class CoinsApi {
    getCollectionTypes() {
        return axios.get(import.meta.env.VITE_COLLECTION_TYPES_URL, {
            timeout: 15000,
        });
    }
    getCoins() {
        return axios.get(import.meta.env.VITE_COINS_URL, { timeout: 15000 });
    }
}
