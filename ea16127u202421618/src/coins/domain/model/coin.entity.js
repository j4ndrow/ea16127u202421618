export class Coin {
    constructor({
                    id,
                    title,
                    collectionTypeId,
                    yearProduction,
                    price,
                    rarityScale,
                    weightGrams,
                    conditionGrade,
                }) {
        this.id = id;
        this.title = title;
        this.collectionTypeId = collectionTypeId;
        this.yearProduction = yearProduction;
        this.price = Number(price);
        this.rarityScale = rarityScale;
        this.weightGrams = weightGrams;
        this.conditionGrade = conditionGrade;
    }
}
