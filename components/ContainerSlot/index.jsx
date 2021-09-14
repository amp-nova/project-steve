import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import ContentBlock from '../ContentBlock'

const ContainerSlot = ({content}) => {
    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
            columnGap={1}
            rowGap={1}
        >        
            {
                content?.contentTypes?.map(item => { return (
                        <GridItem rowSpan={1} colSpan={4}>
                            <ContentBlock content={item}/> 
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

ContainerSlot.displayName = 'Amplience Container Slot'

export default ContainerSlot
