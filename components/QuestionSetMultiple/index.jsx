import React from 'react'
import {GridItem} from '@chakra-ui/react'
import {
    Img,
    Checkbox,
  } from "@chakra-ui/react"
  
const QuestionSetMultiple = ({answers}) => {
    const onSave = () => { console.log("SAVED")}
    return (
        <div>
        {
            answers.map((item,i) => {
                return (
                    <GridItem rowSpan={1} colSpan={{base: 1, md: 2}} key={i}>
                        {item.image &&
                            <Img width="100%" alt={item.image.name} 
                                src={`https://${item.image.defaultHost}/i/${item.image.endpoint}/${item.image.name}`}/>
                        }
                        <Checkbox>{item.text}</Checkbox>
                    </GridItem>
                )
            })
        }
        </div>
    )
}

QuestionSetMultiple.displayName = 'Amplience Question Set Multiple'

export default QuestionSetMultiple
