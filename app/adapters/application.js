import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';
  host = 'https://rickandmortyapi.com';

  pathForType(type) {
    return type; //format to build the url: ex. `underscore(straw-berrry)` https://myapi.com/straw_berry
  }
}
