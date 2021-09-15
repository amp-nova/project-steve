import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure
  } from "@chakra-ui/react"
import QuestionSetMultiple from '../QuestionSetMultiple'
import QuestionSetSingle from '../QuestionSetSingle'
  
const QuestionSet = ({multiple, question, answers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const onSave = () => { console.log("SAVED"); onClose() }

    return (
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
                            rowGap={1}>
                            {
                                multiple.allowMultiple && 
                                <QuestionSetMultiple answers={answers}/>
                            }
                            {
                                !multiple.allowMultiple && 
                                <QuestionSetSingle answers={answers}/>
                            }
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onSave}>
                        Save
                    </Button>
                    <Button mr={3} onClick={onClose}>
                        Skip
                    </Button>
                    <Button mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
            </GridItem>

    )
}

QuestionSet.displayName = 'Amplience Question Set'

export default QuestionSet
