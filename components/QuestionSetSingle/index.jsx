import React from 'react'
import {GridItem} from '@chakra-ui/react'
import {
    Img,
    Radio,
    RadioGroup,
  } from "@chakra-ui/react"
  
const QuestionSetSingle = ({answers}) => {
    const onSave = () => { console.log("SAVED")}
    return (
        <RadioGroup name="choice">
        {
            answers.map((item,i) => {
                return (
                    <GridItem rowSpan={1} colSpan={{base: 1, md: 2}} key={i}>
                        {item.image &&
                            <Img width="100%" alt={item.image.name} 
                                src={`https://${item.image.defaultHost}/i/${item.image.endpoint}/${item.image.name}`}/>
                        }
                        <Radio>{item.text}</Radio>
                    </GridItem>
                )
            })
        }
        </RadioGroup>
    )
}

QuestionSetSingle.displayName = 'Amplience Question Set Single'

export default QuestionSetSingle
