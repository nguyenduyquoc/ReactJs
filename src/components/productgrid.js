import {Card, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
export default function ProductGrid(props){
    const product = props.product;

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>
                    <NavLink to={"/product/"+ product.id}>
                        {product.name}
                    </NavLink>
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">Add to card</Button>
            </Card.Body>
        </Card>
    )
}