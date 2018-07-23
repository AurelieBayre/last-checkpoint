import React from 'react'
import { Card, CardSubtitle, Button } from 'reactstrap'

const Movie = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
  <Card>
    {text}

    <CardSubtitle>
      <Button>
        Delete
      </Button>
    </CardSubtitle>
  </Card>
  </li>
)

export default Movie