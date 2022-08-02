import React from 'react';
import {Container} from "react-bootstrap";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShopingCartContext";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar/>
            <Container className='mb-4'>
                <Store/>
            </Container>
        </ShoppingCartProvider>

    );
}

export default App;
