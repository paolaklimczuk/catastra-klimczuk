import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Container from '@mui/material/Container';

// En la pagina principal siempre se muestran todos los productos de la base
const HomePage = () => {

    return (
        <Container>
            <ItemListContainer/>
        </Container>
    )

}

export default HomePage
