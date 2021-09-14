import React from 'react'
import {Grid, GridItem, Heading} from '@chakra-ui/react'
import ContentBlock from '../ContentBlock'
import {
    Button,
    Img,
    Modal,
    Radio,
    RadioGroup,
    Checkbox,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure
  } from "@chakra-ui/react"
  
const QuestionSet = ({multiple, question, answers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState("1")

    return (
        <Grid
            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
            columnGap={1}
            rowGap={1}
        >        
            <GridItem rowSpan={1} colSpan={4} textAlign={'center'}>
                <Button onClick={onOpen}>Ask me some questions!</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Steve is asking</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {question}
                        <Grid
                            templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
                            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
                            columnGap={1}
                            rowGap={1}
                        >
                            {
                                multiple.allowMultiple && answers.map((item,i) => {
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
                            {
                                !multiple.allowMultiple && (
                                    <RadioGroup onChange={setValue} value={value}>
                                    {
                                        answers.map((item,i) => {
                                            return (
                                                <GridItem rowSpan={1} colSpan={{base: 1, md: 2}} key={i}>
                                                    <Radio value={i}>
                                                        {item.image &&
                                                            <Img width="100%" alt={item.image.name} 
                                                                src={`https://${item.image.defaultHost}/i/${item.image.endpoint}/${item.image.name}`}/>
                                                        }
                                                        {item.text}
                                                    </Radio>
                                                </GridItem>
                                            )
                                        })
                                    }
                                    </RadioGroup>
                                )
                            }
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Save
                    </Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>

            </GridItem>
        </Grid>

    )
}

QuestionSet.displayName = 'Amplience Question Set'

export default QuestionSet
