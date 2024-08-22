import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp = ({product}) => {
    if (!product) {
        return (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>No Product</Card.Title>
                <Card.Text>
                  No description available.
                </Card.Text>
                <Button variant="primary" disabled>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.category}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardComp