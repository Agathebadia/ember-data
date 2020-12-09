import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.results;
    return this._normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }
}
