import React from 'react'
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

const TaskModal = ({title}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New {title} column task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Stack spacing={3}>
                    <Input placeholder="Title"/>
                    <Textarea placeholder="Content" size="lg"/>
                  </Stack>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Add</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default TaskModal
