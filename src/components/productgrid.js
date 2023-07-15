import React, { useState } from "react";
import {Card, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";
export default function ProductGrid(props){
    const product = props.product;// lấy dữ liệu từ ProductPage
    const {state,dispatch} = useContext(UserContext);// connect to   global
    const addToCart = ()=>{
        const cart = state.cart;
        let check = true;
        cart.map(e=>{
            if(e.id === product.id){
                e.buy_qty = e.buy_qty +1;
                check = false;
            }
            return e;
        })
        if(check){
            product.buy_qty = 1;
            cart.push(product);
        }
        // setState({...state,cart:cart});
        dispatch({type:"UPDATE_CART", payload:cart})
        setTimeout(()=>{
            dispatch({type:"HIDE_LOADING"});
        },2000);
        alert("Đã thêm vào giỏ hàng");
        // state.cart = cart;
        // setState(state);

    }
    const addToFavourite = ()=>{
        const favourite = state.favourites;
        let check = true;
        favourite.map((e) => {
            if (e.id === product.id) {
                check = false;
                return;
            }
        });
        if (check) {
            favourite.push(product);
            // setState({ ...state, favourites: favourite });
            dispatch({type:"UPDATE_FAVOURITE", payload: favourite});
            dispatch({type:"HIDE_LOADING"})
        } else {
            const updateFavourite = favourite.filter((e) => e.id !== product.id);
            //setState({ ...state, favourites: updateFavourite });
            dispatch({type:"UPDATE_FAVOURITE", payload: updateFavourite});
            dispatch({type:"HIDE_LOADING"})
        }
    }

    const isFavourite = state.favourites.find((p) => p.id === product.id);

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>
                    <NavLink style = {{textDecoration: 'none', color: 'black'}} to={"/product/"+ product.id}>
                        {product.name}
                    </NavLink>
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <div>
                    <Button style={{ margin:'3px' }} onClick={addToCart} variant="primary">Add to card</Button>
                    <Button className="btn btn-danger" style={{ margin: '3px', color: isFavourite ? 'white' : 'inherit' }} onClick={addToFavourite} variant="primary">
                        <i className="fa-solid fa-heart"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}