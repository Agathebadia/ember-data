import Route from '@ember/routing/route';

export default class CharacterRoute extends Route {
  model() {
    return this.store.findAll('character');
  }
}
