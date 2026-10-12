export class BaseEndpoint {
    constructor(api, path) {
        this.http = api.http;
        this.path = path;
    }
    getAll() {
        return this.http.get(this.path);
    }
    create(resource) {
        return this.http.post(this.path, resource);
    }
}
