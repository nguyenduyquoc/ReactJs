import React, {useContext,useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {detailProduct} from "../services/product.service";
import UserContext from "../context/userContext";
import './ProductDetail.css';

function ProductDetailPage(){
    const {id} = useParams("id");
    const [product, setProduct] = useState({});

    const find = async ()=>{
        const p = await detailProduct(id);
        setProduct(p);
    }
    useEffect(()=>{
        // call api -> set data product
        find();
    }, []); // component did mount

    const {state, setState} = useContext(UserContext);// connect to global
    const addToCart = ()=>{
        // console.log(state);

        const cart = state.cart;
        let check = true;

        cart.map((e) => {
            if(e.id == product.id){
                e.buy_qty = e.buy_qty + 1;
                check = false;
            }
            return e;
        })

        if(check){
            product.buy_qty = 1;
            cart.push(product);
        }
        setState({...state, cart:cart});
        alert("Đã thêm vào giỏ hàng");
    }

    return (
        <div>
            <h1>{id} - {product.name}</h1>
            <p><img src={product.thumbnail}/></p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p><button onClick={addToCart} type="button" className="btn btn-danger">Add to cart</button></p>
        </div>
    );
}

export default ProductDetailPage;