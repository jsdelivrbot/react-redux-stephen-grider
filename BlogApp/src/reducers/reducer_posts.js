import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); //assign objects key 'id'
                                                   //and return that object with the id
    default:
      return state;
  }
}
