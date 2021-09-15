import React, { useState, useEffect } from 'react'
import fetch from 'cross-fetch'
import {Grid, GridItem, Img,Center,Heading} from '@chakra-ui/react'

const ProductsSpotlight = ({query = "", filters = ""}) => {
    const [products,setProducts] = useState([])

    const fetchData = async () => {
        let algoliaQuery = "";
        if (query) algoliaQuery = `query=${query}&`;

        let response;
        response = await fetch(`https://T7I8W0D1V2-dsn.algolia.net/1/indexes/prod_willow_products/query`,
            { 
                method: 'POST', 
                headers: { 
                    "X-Algolia-API-Key": "fa908d8e83b0aa627869a125c55f7c0e",
                    "X-Algolia-Application-Id": "T7I8W0D1V2"
                },
                body: JSON.stringify({
                    "params": `${algoliaQuery}hitsPerPage=6&getRankingInfo=1`,
                    "filters": filters
                })
            });
        const responseJson = await response.json()
        setProducts(responseJson);
    }

    useEffect(() => {
        fetchData();
      }, [query,filters]);

    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)'}}
            columnGap={4}
            rowGap={4}
            style={{marginBottom: 30}}>
            {
                products?.hits?.map(product=>{
                    return ( <GridItem>
                        {
                            product.variations[0]?.images[0] && <Img src={product.variations[0].images[0]}/>
                        }
                        <Heading as="h4" size="md" style={{textAlign: "center"}}>{product.product?.name?.en}</Heading>
                        <Center>${product?.price/100}</Center>
                    </GridItem> );
                })
            }
        </Grid>
    )
}

ProductsSpotlight.displayName = 'Amplience Recommendations Engine'

export default ProductsSpotlight
