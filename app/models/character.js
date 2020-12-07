import Model, { attr } from '@ember-data/model';

export default class CharacterModel extends Model {
  @attr name;
  @attr status;
  @attr species;
  @attr type;
  @attr gender;
  @attr image;
}
