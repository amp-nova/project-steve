import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import ContentBlock from '../ContentBlock'

const Container = ({contentTypes = []}) => {
    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
            columnGap={1}
            rowGap={1}
        >        
            {
                contentTypes.map((item,i) => { return (
                        <GridItem rowSpan={1} colSpan={4} key={i}>
                            <ContentBlock content={item}/> 
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

Container.displayName = 'Amplience Container'

export default Container
