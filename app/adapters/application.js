import RESTAdapter from '@ember-data/adapter/rest';
import urlForFindAll from '@ember-data/adapter';

export default class ApplicationAdapter extends RESTAdapter {
  urlForFindAll(character) {
    let baseUrl = this.buildURL(character);
    return `https://rickandmortyapi.com/api/${baseUrl}`
  }
}
