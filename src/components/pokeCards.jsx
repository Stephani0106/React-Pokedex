import React from 'react';
import Card from '@material-ui/core/Card'; 
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styles from '../styles/css/pokeCards.module.css';

const useStyles = makeStyles({
    root: {
        borderRadius: '16px',
        maxWidth: '320px',
        height: '400px',
        margin: '20px 9px',
        display: 'inline-block',
        boxShadow: '0px 4px 9px rgb(0 0 0 / 40%);',
        backgroundImage: 'linear-gradient(#619fbd, #c5ecdf)',
    },
});

export default function PokeCards({ image, name, type }) {
    const stylesUI = useStyles();

    return (
        <Card className={stylesUI.root}>
            <CardContent>
                <Typography className={styles.title}>
                    {name}
                </Typography>
                <Typography className={styles.type}>
                    {type}
                </Typography>

                <CardMedia 
                    component='img'
                    alt={name}
                    image={image}
                    className={styles.image}
                />
            </CardContent>
        </Card>
    )
}