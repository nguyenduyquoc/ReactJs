import {useContext} from "react";
import UserContext from "../context/userContext";
import {Table} from "react-bootstrap";

function FavouritesPage(){
    const {state, setState} = useContext(UserContext);
    const favourites = state.favourites;

    return (
        <div>
            <h2>Favourite page</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    favourites.map((e,i)=>{
                        return  (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img src={e.thumbnail} width={50}/></td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}
export default FavouritesPage;