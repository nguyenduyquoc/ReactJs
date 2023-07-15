import {Badge, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {useContext} from "react";
import userContext from "../context/userContext";

export default function NavLayout(props){
    const {state, setState} = useContext(userContext);
    return (
        <Nav variant="pills" activeKey="1">
            <Nav.Item>
                <NavLink to="/" className="nav-link">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/category" className="nav-link">Category</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/product" className="nav-link">Product</NavLink>
            </Nav.Item>
            <NavLink to="/cart" className="nav-link">Cart <Badge bg="secondary">
                {state.cart.length}</Badge>
            </NavLink>
            <Nav.Item>
                <NavLink to="/favourite_product" className="nav-link">Favourite</NavLink>
            </Nav.Item>
        </Nav>
    );
}