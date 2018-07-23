import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewMovieForm extends Component {
  render() {
    return (
      <div>
        <h2>
          Add a new movie:
        </h2>
        <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="title" name="title" id="title" placeholder="title of the movie" />
        </FormGroup>
        {/* <FormGroup>
          <Label for="rate">Rate this movie</Label>
          <Input type="select" name="rate" id="rate" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default NewMovieForm