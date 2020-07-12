import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {uniq} from '../formValidate';

export const renderTextField = ({
  label,
  input,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    required={true}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderAutoComplete = ({
  label,
  input,
  meta: { touched, error, invalid },
  ...custom
}) => {
  const raw = localStorage.getItem('posts') || '{}';
  const posts = Object.values(JSON.parse(raw));
  const authorsNames = posts.map(post => post.author);
  const filteredNames = uniq(authorsNames);
  return (
    <Autocomplete
        freeSolo
        id="free-solo-demo"
        options={filteredNames.map((name) => name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            required={true}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
          />
        )}
      />
  )
}

export const renderTextareaAutosize = ({
  input,
  meta: { touched, error, invalid },
  ...rest
}) => (
  <>
    <TextareaAutosize
      aria-label="minimum height"
      rowsMin={3}
      rowsMax={7}
      className="textarea"
      placeholder="Текст записи..."
      required={true}
      {...input}
      {...rest}
    />
    <FormHelperText error={touched && invalid}>
      {touched && error}
    </FormHelperText>
  </>
);
