import React from 'react'
import { Card, CardSubtitle, Button } from 'reactstrap'

const Movie = ({ onClick, title }) => (
  <li>
  <Card>
    {title}

    <CardSubtitle>
      <Button onClick={onClick}>
        Delete
      </Button>
    </CardSubtitle>
  </Card>
  </li>
)

export default Movie