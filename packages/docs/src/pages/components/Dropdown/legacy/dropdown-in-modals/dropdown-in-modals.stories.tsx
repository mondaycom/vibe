import React, { useCallback, useState, useMemo } from "react";
import {
  Dropdown,
  type DropdownOption,
  Modal,
  ModalContent,
  Box,
  Flex,
  Dialog,
  DialogContentContainer,
  Button
} from "@vibe/core";
import ModalExampleContent from "./ModalExampleContent";

export default {
  title: "Technical Patterns/Dropdowns inside pop-overs"
};

export const ModalWithDamagedDropdown: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const options: DropdownOption[] = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
    { value: "6", label: "Option 6" },
    { value: "7", label: "Option 7" },
    { value: "8", label: "Option 8" },
    { value: "9", label: "Option 9" },
    { value: "10", label: "Option 10" },
    { value: "11", label: "Option 11" },
    { value: "12", label: "Option 12" },
    { value: "13", label: "Option 13" },
    { value: "14", label: "Option 14" },
    { value: "15", label: "Option 15" }
  ];

  return (
    <div>
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
        <ModalContent>
          <Dropdown options={options} />
        </ModalContent>
      </Modal>
    </div>
  );
};

export const MenuPosition: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const options: DropdownOption[] = useMemo(
    () => [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
      { value: "6", label: "Option 6" },
      { value: "7", label: "Option 7" },
      { value: "8", label: "Option 8" },
      { value: "9", label: "Option 9" },
      { value: "10", label: "Option 10" },
      { value: "11", label: "Option 11" },
      { value: "12", label: "Option 12" },
      { value: "13", label: "Option 13" },
      { value: "14", label: "Option 14" },
      { value: "15", label: "Option 15" }
    ],
    []
  );

  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };

  const modifiers = [
    {
      name: "preventOverflow",
      options: { mainAxis: false }
    }
  ];

  return (
    <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown
            placeholder="Dropdown inside DialogContentContainer"
            options={options}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
          </ModalContent>
        </Modal>
      </div>
      <Dialog
        modifiers={modifiers}
        showTrigger={["click"]}
        hideTrigger={["click"]}
        content={
          <DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
            </Box>
          </DialogContentContainer>
        }
      >
        <Button kind="primary" color="negative">
          Popup Dialog
        </Button>
      </Dialog>
    </Flex>
  );
};

export const InsideOverflowContainer: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const options: DropdownOption[] = useMemo(
    () => [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
      { value: "6", label: "Option 6" },
      { value: "7", label: "Option 7" },
      { value: "8", label: "Option 8" },
      { value: "9", label: "Option 9" },
      { value: "10", label: "Option 10" },
      { value: "11", label: "Option 11" },
      { value: "12", label: "Option 12" },
      { value: "13", label: "Option 13" },
      { value: "14", label: "Option 14" },
      { value: "15", label: "Option 15" }
    ],
    []
  );

  const modifiers = [
    {
      name: "preventOverflow",
      options: { mainAxis: false }
    }
  ];

  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };

  return (
    <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} insideOverflowContainer />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown options={options} insideOverflowContainer />
          </ModalContent>
        </Modal>
      </div>
      <Dialog
        modifiers={modifiers}
        showTrigger={["click"]}
        hideTrigger={["click"]}
        content={
          <DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} insideOverflowContainer />
            </Box>
          </DialogContentContainer>
        }
      >
        <Button color="negative">Popup Dialog</Button>
      </Dialog>
    </Flex>
  );
};

export const InsideOverflowWithTransformContainer: React.FC = () => {
  const options: DropdownOption[] = useMemo(
    () => [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
      { value: "6", label: "Option 6" },
      { value: "7", label: "Option 7" },
      { value: "8", label: "Option 8" },
      { value: "9", label: "Option 9" },
      { value: "10", label: "Option 10" },
      { value: "11", label: "Option 11" },
      { value: "12", label: "Option 12" },
      { value: "13", label: "Option 13" },
      { value: "14", label: "Option 14" },
      { value: "15", label: "Option 15" }
    ],
    []
  );

  const dialogStyle: React.CSSProperties = {
    width: "300px",
    height: "200px",
    overflow: "auto"
  };

  const secondDialogContent = (
    <DialogContentContainer style={dialogStyle}>
      <ModalExampleContent />
      <Box marginTop="medium" marginBottom="xxl">
        <Dropdown placeholder="Dropdown" options={options} insideOverflowWithTransformContainer />
      </Box>
    </DialogContentContainer>
  );

  return (
    <Dialog content={secondDialogContent} hideTrigger="clickoutside" showTrigger="click">
      <Button>Popup Dialog</Button>
    </Dialog>
  );
};
