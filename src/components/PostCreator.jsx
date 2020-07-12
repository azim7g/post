import React from 'react';
import Helmet from 'react-helmet';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {addPost} from '../actions';
import Button from '@material-ui/core/Button';
import {validate} from '../formValidate';
import {renderAutoComplete, renderTextareaAutosize, renderTextField} from './renderFields';

const PostCreator = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (formValues) => {
    const post = {
      ...formValues,
      id: Date.now(),
      date: Date.now(),
    };
    dispatch(addPost({post}));
    props.reset();
  };

  return (
    <div className="post__add">
      <Helmet>
        <title>Добавить запись</title>
      </Helmet>
      <form onSubmit={props.handleSubmit(handleSubmit)} autoComplete="off">
        <Field 
          label="Заголовок записи..."
          component={renderTextField}
          name="title"
        />
        <Field 
          label="Ваше имя"
          component={renderAutoComplete}
          name="author"
        />
        <Field
          component={renderTextareaAutosize}
          name="content"
        />

        <Button
          className="add"
          type="submit"
          variant="contained"
        >
          ДОБАВИТЬ ЗАПИСь
        </Button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'addPost',
  validate,
})(PostCreator);