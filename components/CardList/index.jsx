import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import ContentBlock from '../ContentBlock'

const CardList = ({cards}) => {
    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
            columnGap={1}
            rowGap={1}
        >        
            {
                cards.map(item => { return (
                        <GridItem rowSpan={1} colSpan={{base: 1, md: 2}}>
                            <ContentBlock content={item}/> 
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

CardList.displayName = 'Amplience Card List'

export default CardList
