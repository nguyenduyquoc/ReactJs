import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductGrid from "../components/productgrid";
import {getProduct} from "../services/product.service";
// import axios from "axios";
// import api from "../services/api";
export default class ProductPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }

    async componentDidMount() {
        /*fetch(url).then(rs=>rs.json())
            .then(rs=>{
                this.setState({products:rs.products});
            })
            .catch(err=>{

            })
         */

        const products = await getProduct(12);
        this.setState({products:products});
    }


    render(){
        const products = this.state.products;
        return(
            <div>
                <h1>Product Page</h1>
                <Row>
                    {
                        products.map((prod,i)=>{
                            return (
                                <Col xs={3}>
                                    <ProductGrid product={prod} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}