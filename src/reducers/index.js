import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {reducer as formReducer} from 'redux-form';
import * as actions from '../actions';

const initialState = JSON.parse(localStorage.getItem('posts')) || {};

const posts = handleActions({
  [actions.addPost](state, {payload: { post }}) {
    const posts = {
      ...state,
      [post.id]: post,
    }
    localStorage.setItem('posts', JSON.stringify(posts))
    return posts;
  },
}, initialState);

export default combineReducers({
  posts,
  form: formReducer,
});