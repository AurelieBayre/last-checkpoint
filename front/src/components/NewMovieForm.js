import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewMovieForm = ({ onClickSubmit }) => (
  <div>
    <h2>
      Add a new movie:
    </h2>
    <Form>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="title" name="title" id="title" placeholder="title of the movie" />
    </FormGroup>
    <Button onClick={() => onClickSubmit('Redux, the Movie...')}>Submit</Button>
  </Form>
  </div>
)


export default NewMovieForm