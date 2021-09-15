import React, { useState } from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {
    Img,
    Checkbox,
  } from "@chakra-ui/react"
  
const QuestionSetMultiple = ({answers, changeHandler}) => {
    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
            columnGap={1}
            rowGap={1}>
            {
                answers.map((item,i) => {
                    return (
                        <GridItem key={i}>
                            {item.image &&
                                <Img width="100%" alt={item.image.name} 
                                    src={`https://${item.image.defaultHost}/i/${item.image.endpoint}/${item.image.name}`}/>
                            }
                            <Checkbox
                                value={String(i)}
                                onChange={() => changeHandler(i)}>{item.text}</Checkbox>
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

QuestionSetMultiple.displayName = 'Amplience Question Set Multiple'

export default QuestionSetMultiple
