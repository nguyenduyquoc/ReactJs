import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from "react-bootstrap";
import NavLayout from "./layouts/NavLayout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import STATE from "./context/initState";
import {useReducer, useState} from "react";
import {UserProvider} from "./context/userContext";
import FavouritesPage from "./pages/FavouritesPage";
import reducer from "./context/reducer";
import Loading from "./components/loading";

function App() {
    // const [state,setState] = useState(STATE);
    const [state, dispatch] = useReducer(reducer,STATE);
    // khởi tạo biến state và hàm setState để cập nhập trạng tái cho biến state

    return(
        <UserProvider value={{state,dispatch}}>
            {/*các thành phần con của UserProvider có thể truy cập và sử dụng state và setState*/}
            <Loading display={state.loading} />
            <div className="App">
                <Container>
                    <NavLayout/>
                </Container>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/category' element={<CategoryPage/>}/>
                        <Route path='/product' element={<ProductPage/>}/>
                        <Route path='/product/:id' element={<ProductDetailPage/>}/>
                        <Route path='/cart' element={<CartPage/>}/>
                        <Route path='/favourite_product' element={<FavouritesPage/>}/>
                    </Routes>
                </Container>
            </div>
        </UserProvider>

    );
}

export default App;
