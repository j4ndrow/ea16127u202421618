
export class ValidationError extends Error {
    constructor(key) {
        super(key);
        this.name = 'ValidationError';
    }
}
