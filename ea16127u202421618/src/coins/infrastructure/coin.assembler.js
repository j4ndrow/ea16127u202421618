import { Coin } from '../domain/model/coin.entity.js';
export class CoinAssembler {
    static toEntityFromResource(resource) {
        return new Coin(resource);
    }
    static toEntitiesFromResponse(response) {
        const resources = Array.isArray(response.data)
            ? response.data
            : response.data.coins;
        if (!Array.isArray(resources)) throw new Error('Invalid coins response');
        return resources.map((resource) => this.toEntityFromResource(resource));
    }
}
