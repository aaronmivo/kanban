//@ts-nocheck

import React, {useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
    Textarea,
  } from "@chakra-ui/react"

const TaskModal = ({add, column, title}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [taskTitle, setTaskTitle] = useState("")
    const [taskText, setTaskText] = useState("")

    const handleTextChange = (e) => {
        e.preventDefault();
        setTaskText(e.target.value)

    }

    const handleTitleChange = (e) => {
        e.preventDefault();
        setTaskTitle(e.target.value)

    }

    const addNote =(event) => {
        event.preventDefault();

        const noteObject = {
            title: taskTitle,
            text: taskText,
        }
        add(column, noteObject)
        setTaskTitle("")
        setTaskText("")
    }
    return (
        <>
          <Button onClick={onOpen}> + </Button>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <form onSubmit={addNote}>
              <ModalHeader>New {title} column task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Stack spacing={3}>
                    <Input placeholder="Title" type = "text" value= {taskTitle} onChange={handleTitleChange}/>
                    <Textarea placeholder="Content" type="text" size="lg" value={taskText} onChange={handleTextChange}/>
                  </Stack>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" type="submit" onClick={onClose}>Add</Button>
              </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </>
      )
}

export default TaskModal
