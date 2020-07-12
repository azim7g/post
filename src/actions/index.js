import {createAction} from 'redux-actions';

export const addPost = createAction('POST_ADD');
export const changeName = createAction('NAME_CHANGE');
export const changeContent = createAction('CONTENT_CHANGE');
export const changeTitle = createAction('TITLE_CHANGE');
export const reset = createAction('RESET');