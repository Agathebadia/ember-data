import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  urlForFindAll(character) {
    let baseUrl = this.buildURL(character);
    return `https://rickandmortyapi.com/api${baseUrl}`
  }
}
