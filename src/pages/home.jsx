import { Box } from '@material-ui/core';
import styles from '../styles/css/home.module.css';
import React from 'react';
import PokeCards from '../components/pokeCards';
import { pokemonsImages } from '../assets/pokemons';
import { pokemonsNames, pokemonsTypes } from '../common/pokeInfos';
import Header from '../components/header';


export class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Box className={styles.principal}>
                <Header/>
                {pokemonsImages.map((image, index) => 
                    <PokeCards 
                        image={image} 
                        name={pokemonsNames[index]} 
                        type={pokemonsTypes[index]} />
                )}
            </Box>
        )
    }
}
