import React from 'react'
import {Grid, GridItem, Center, AspectRatio, Box, Flex, Heading, Img, Text, VStack, useTheme} from '@chakra-ui/react'
import ContentBlock from '../ContentBlock'

const SplitBlock = ({
        split = '50/50',
        bgcol,
        content = []
    }) => {

    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
            alignItems="center"
            columnGap={1}
            rowGap={1}
        >
            {
                content.map(item => {
                    return (
                        <GridItem rowSpan={1} colSpan={{base: 1, md: 2}}>
                            <Center>       
                                <ContentBlock content={item}/>
                            </Center>       
                        </GridItem> 
                    )
                })
            }
        </Grid>
    )
}

SplitBlock.displayName = 'Amplience Split Block'

SplitBlock.propTypes = {
}

export default SplitBlock
