import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {
    Img,
    Radio,
    RadioGroup,
  } from "@chakra-ui/react"
  
const QuestionSetSingle = ({answers, valueSetter}) => {
    return (
        <RadioGroup onChangeCapture={event => { valueSetter(event.target.value); }}>
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
                                <Radio value={String(i)}>{item.text}</Radio>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </RadioGroup>
    )
}

QuestionSetSingle.displayName = 'Amplience Question Set Single'

export default QuestionSetSingle
