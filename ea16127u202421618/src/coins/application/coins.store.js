import { CoinsApi } from '../infrastructure/coins-api.js';
import { CoinAssembler } from '../infrastructure/coin.assembler.js';
import { CollectionTypeAssembler } from '../infrastructure/collection-type.assembler.js';
const api = new CoinsApi();
export default defineStore('coins', () => {
    const coins = ref([]);
    const collectionTypes = ref([]);
    const loading = ref(false);
    const errorKey = ref('');
    let requestNumber = 0;
    function clear() {
        requestNumber += 1;
        coins.value = [];
        errorKey.value = '';
        loading.value = false;
    }

    async function loadForType(typeId) {
        const currentRequest = ++requestNumber;
        loading.value = true;
        errorKey.value = '';
        coins.value = [];
        try {
            const responses = await Promise.all([
                api.getCollectionTypes(),
                api.getCoins(),
            ]);
            const types = CollectionTypeAssembler.toEntitiesFromResponse(
                responses[0],
            );
            const allCoins = CoinAssembler.toEntitiesFromResponse(responses[1]);
            const type = types.find((item) => String(item.id) === String(typeId));
            if (!type) throw new Error('Unknown collection type');
            if (currentRequest !== requestNumber) return;
            collectionTypes.value = types;
            coins.value = allCoins.filter(
                (coin) => String(coin.collectionTypeId) === String(typeId),
            );
        } catch {
            if (currentRequest === requestNumber) errorKey.value = 'errors.coins';
        } finally {
            if (currentRequest === requestNumber) loading.value = false;
        }
    }
    return { coins, collectionTypes, loading, errorKey, loadForType, clear };
});
