import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';

const NewMovieForm = ({ onClickSubmit }) => {
  return (
    <Form onSubmit={onClickSubmit}>
    <FormGroup>
      <Label for="title">Title</Label>
      <div>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="nouveau titre"
        />
      </div>
    </FormGroup>
    <Button type="submit">Submit</Button>
  </Form>
  )
}


NewMovieForm = reduxForm({
  form: 'simple'
})(NewMovieForm)

export default NewMovieForm