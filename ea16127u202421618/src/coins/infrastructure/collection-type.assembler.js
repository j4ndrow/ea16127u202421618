import { CollectionType } from '../domain/model/collection-type.entity.js';
export class CollectionTypeAssembler {
    static toEntityFromResource(resource) {
        return new CollectionType(resource);
    }
    static toEntitiesFromResponse(response) {
        const resources = Array.isArray(response.data)
            ? response.data
            : response.data.collectionTypes;
        if (!Array.isArray(resources))
            throw new Error('Invalid collection types response');
        return resources.map((resource) => this.toEntityFromResource(resource));
    }
}
