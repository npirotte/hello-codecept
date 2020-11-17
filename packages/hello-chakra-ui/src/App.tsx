import * as React from "react";
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/core";
import { Form } from "./Form";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./atoms/userState";
import { userNameLengthSelector } from "./selectors/userNameLengthSelector";
import { TodoList } from "./todo/TodoList";
import { TodoItemCreator } from "./todo/TodoItemCreator";

export const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useRecoilState(userState);
  const isRegistered = !!email;
  const onSubmit = (values) => {
    setTimeout(() => {
      setEmail(values.email);
      onClose();
    }, 200);
  };

  return (
    <>
    <Box p={1} maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Heading>This is a title</Heading>
      <section>
        {isRegistered ? (
          <div>Hello {email}!</div>
        ) : (
          <Button onClick={onOpen}>Register!</Button>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Form onSubmit={onSubmit} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
    </Box>
    <TodoItemCreator />
    <TodoList />
    </>
  );
};
