import React from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import CategoryGrid from "../components/categorygrid";
export default class CategoryPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories:[]
        }
    }

    componentDidMount() {
        const url = "https://dummyjson.com/products/category/smartphones";
        axios.get(url).then(rs=>{
            this.setState({
                categories: rs.data.products
            })
        }).catch(err=>{

        })
    }

    render() {
        const categories = this.state.categories;
        return(
            <div>
                <h1>Category Page</h1>
                <Row>
                    {
                        categories.map((e,i)=>{
                            return (
                                <Col xs={3}>
                                    <CategoryGrid image={e.thumbnail} category={e.category} text={e.description}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}