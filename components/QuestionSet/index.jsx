import React, { useState } from 'react'
import { GridItem } from '@chakra-ui/react'
import fetch from 'cross-fetch'

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

const QuestionSet = ({ multiple, question, answers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState();
    const [checkedState, setCheckedState] = useState(
        new Array(answers.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    const onSave = () => {
        console.log("SAVED");
        if (multiple.allowMultiple) {
            console.log("MULTIPLE", checkedState);
            console.log(answers.filter((item, i) => checkedState[i]));
            answers.filter((item, i) => checkedState[i]).forEach(element => {
                console.log("ACTION", element.action);
                let url = `https://project-steve.ngrok.io${element.action.endpoint}?email=davelilly@johndoe.com`;
                element.action.parameters.forEach(parameter => {
                    url += `&${parameter.name}=${parameter.value}`;
                });
                console.log(url);
                fetch(url, { method: 'GET' })
                    .then(response => { if (response.status != 200) { console.error("Request error"); } });
            });
        } else {
            console.log("SINGLE", value);
            console.log(answers[value]);
            console.log("ACTION", answers[value].action);
            let url = `https://project-steve.ngrok.io${answers[value].action.endpoint}?email=davelilly@johndoe.com`;
            answers[value].action.parameters.forEach(parameter => {
                url += `&${parameter.name}=${parameter.value}`;
            });
            console.log(url);
            fetch(url, { method: 'GET' })
                .then(response => { if (response.status != 200) { console.error("Request error"); } });
        }
        resetValues();
        onClose();
    }

    const closeModal = () => {
        resetValues();
        onClose();
    }

    const resetValues = () => {
        setValue(undefined);
        setCheckedState(new Array(answers.length).fill(false));
        onClose();
    }

    let checker = arr => arr.every(v => v === false);

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
                        {
                            multiple.allowMultiple &&
                            <QuestionSetMultiple answers={answers} changeHandler={handleOnChange} />
                        }
                        {
                            !multiple.allowMultiple &&
                            <QuestionSetSingle answers={answers} valueSetter={setValue} />
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onSave} isDisabled={(multiple.allowMultiple && checker(checkedState))
                            || (!multiple.allowMultiple && !value)}>
                            Save
                        </Button>
                        <Button mr={3} onClick={closeModal}>
                            Skip
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </GridItem>

    )
}

QuestionSet.displayName = 'Amplience Question Set'

export default QuestionSet
