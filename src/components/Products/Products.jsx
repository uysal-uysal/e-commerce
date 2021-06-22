import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product'

import useStyles from './styles';

const products=[
    { id:1 , name:'Shoes', description:'Running shoes.', price :'$5', image :'https://static4.fashionbeans.com/wp-content/uploads/2020/01/michal-kubalczyk-oL-gSFVpI6A-unsplash-675x340.jpg'},
    { id:2 , name:'MacBook', description:'Apple laptop.', price : '$4', image: 'https://productimages.hepsiburada.net/s/32/375/10354045517874.jpg'}
]

const Products = () =>{
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4} >
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>    
    );
    
}


export default Products;
