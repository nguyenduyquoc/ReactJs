import {Button, Card} from "react-bootstrap";
export default function CategoryGrid(props){
    const image = props.image;
    const category = props.category;
    const text = props.text;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Add to card</Button>
            </Card.Body>
        </Card>
    )
}