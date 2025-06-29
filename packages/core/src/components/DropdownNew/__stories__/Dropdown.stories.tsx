import React, { useCallback, useMemo, useState } from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import person1 from "./assets/person1.png";
import person3 from "./assets/person3.png";
import person2 from "./assets/person2.png";
import { Attach, Email } from "@vibe/icons";
import { Box, Button, DialogContentContainer, DropdownNew, Flex, Modal, ModalContent } from "../../index";
import ModalExampleContent from "../../../storybook/patterns/dropdown-in-modals/ModalExampleContent";
import { Text } from "../../Text";
import { BaseListItemData } from "../../BaseListItem/BaseListItem.types";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DropdownNew,
  actionPropsArray: [
    "onMenuOpen",
    "onMenuClose",
    "onFocus",
    "onBlur",
    "onChange",
    "openMenuOnFocus",
    "onOptionRemove",
    "onOptionSelect",
    "onClear",
    "onInputChange",
    "onKeyDown"
  ]
});

export default {
  title: "Components/DropdownNew",
  component: DropdownNew,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const dropdownTemplate = (props: any) => {
  const options = useMemo(
    () => [
      { value: 1, label: "Option 1" },
      { value: 2, label: "Option 2" },
      { value: 3, label: "Option 3" }
    ],
    []
  );

  return (
    <div style={{ height: "150px", width: "300px" }}>
      <DropdownNew options={options} label="Label" helperText="Helper text" {...props} readOnly />
    </div>
  );
};

export const Overview = {
  render: dropdownTemplate.bind({}),
  args: {
    placeholder: "Placeholder text here"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes = {
  render: () => {
    const options = useMemo(
      () => [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" }
      ],
      []
    );
    return (
      <>
        <div style={{ width: "300px" }}>
          <DropdownNew options={options} placeholder="Placeholder text here" size="large" />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={options} placeholder="Placeholder text here" size="medium" />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={options} placeholder="Placeholder text here" size="small" />
        </div>
      </>
    );
  }
};

export const States = {
  render: () => (
    <Flex direction="row" gap="medium">
      <Flex direction="column" gap="medium">
        <div style={{ width: "300px" }}>
          <DropdownNew options={[]} placeholder="Default" />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={[]} placeholder="Disabled" disabled />
        </div>
      </Flex>
      <Flex direction="column" gap="medium">
        <div style={{ width: "300px" }}>
          <DropdownNew options={[]} placeholder="Error" error />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={[]} placeholder="Readonly" readOnly />
        </div>
      </Flex>
    </Flex>
  )
};

export const MultiSelect = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "1",
          label: "Option 1"
        },
        {
          value: "2",
          label: "Option 2"
        },
        {
          value: "3",
          label: "Option 3"
        },
        {
          value: "4",
          label: "Option 4"
        }
      ],
      []
    );

    return (
      <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single line with hidden options</Text>
          <div style={{ width: "350px", marginBottom: "50px" }}>
            <DropdownNew
              placeholder="Single line multi state"
              defaultValue={[options[0], options[1], options[2]]}
              options={options}
              multi
            />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple lines</Text>
          <div style={{ width: "350px", marginBottom: "50px" }}>
            <DropdownNew
              placeholder="Multiple line multi state"
              defaultValue={[options[0], options[1], options[2]]}
              options={options}
              multi
              multiline
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const DropdownWithIconOrAvatar = {
  render: () => {
    const optionsIcons: any = useMemo(
      () => [
        {
          value: "email",
          label: "Email",
          startElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "attach",
          label: "Attach",
          startElement: {
            type: "icon",
            value: Attach
          }
        }
      ],
      []
    );
    const optionsAvatar: any = useMemo(
      () => [
        {
          value: "Julia",
          label: "Julia Martinez",
          startElement: {
            type: "avatar",
            value: person1
          }
        },
        {
          value: "Sophia",
          label: "Sophia Johnson",
          startElement: {
            type: "avatar",
            value: person2
          }
        },
        {
          value: "Marco",
          label: "Marco DiAngelo",
          startElement: {
            type: "avatar",
            value: person3
          }
        }
      ],
      []
    );

    return (
      <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single value</Text>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <DropdownNew defaultValue={optionsIcons[0]} options={optionsIcons} />
          </div>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <DropdownNew defaultValue={optionsAvatar[0]} options={optionsAvatar} />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple values</Text>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <DropdownNew defaultValue={[optionsIcons[0]]} options={optionsIcons} multi />
          </div>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <DropdownNew defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi />
          </div>
        </Flex>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3 }
      }
    }
  }
};

export const Searchable = {
  render: () => {
    const options = useMemo(
      () =>
        Array.from({ length: 10 }, (_, i) => ({
          value: `Option ${i + 1}`,
          label: `Option ${i + 1}`
        })),
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <DropdownNew placeholder={"Searchable for an item"} options={options} searchable maxMenuHeight={170} />
      </div>
    );
  }
};

export const DropdownWithGroups = {
  render: () => {
    const options = useMemo(
      () =>
        Array.from({ length: 2 }, (_, groupIndex) => ({
          label: `Group ${groupIndex + 1}`,
          options: Array.from({ length: 3 }, (_, optionIndex) => ({
            value: `${groupIndex * 2 + optionIndex + 1}`,
            label: `Option ${groupIndex * 2 + optionIndex + 1}`
          }))
        })),
      []
    );

    const optionsWithoutGroupLabel = useMemo(
      () =>
        Array.from({ length: 2 }, (_, groupIndex) => ({
          options: Array.from({ length: 2 }, (_, optionIndex) => ({
            value: `${groupIndex * 2 + optionIndex + 1}`,
            label: `Option ${groupIndex * 2 + optionIndex + 1}`
          }))
        })),
      []
    );

    return (
      <Flex gap="medium" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Group by divider</Text>
          <div style={{ width: "300px" }}>
            <DropdownNew
              placeholder="Group by divider"
              options={optionsWithoutGroupLabel}
              withGroupDivider
              maxMenuHeight={170}
            />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title</Text>
          <div style={{ width: "300px" }}>
            <DropdownNew placeholder="Group by category title" options={options} maxMenuHeight={170} />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title sticky</Text>
          <div style={{ width: "300px" }}>
            <DropdownNew
              placeholder="Group by category title sticky"
              options={options}
              stickyGroupTitle
              maxMenuHeight={170}
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const DropdownItemWithElements = {
  render: () => {
    const options: BaseListItemData<Record<string, unknown>>[] = useMemo(
      () => [
        {
          value: "icon",
          label: "Label with icon",
          startElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "avatar",
          label: "Label with avatar",
          startElement: {
            type: "avatar",
            value: person1
          }
        },
        {
          value: "indent",
          label: "Label with indent",
          startElement: {
            type: "indent"
          }
        },
        {
          value: "endIcon",
          label: "Label with end icon",
          endElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "hintText",
          label: "Label with hint text",
          endElement: {
            type: "suffix",
            value: "Hint text"
          }
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <DropdownNew placeholder={"Placeholder text here"} options={options} label="Label" required />
      </div>
    );
  }
};

export const DropdownShowSelectedItems = {
  render: () => {
    const options = useMemo(
      () =>
        Array.from({ length: 10 }, (_, i) => ({
          value: `Option ${i + 1}`,
          label: `Option ${i + 1}`
        })),
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <DropdownNew
          placeholder={"Placeholder text here"}
          options={options}
          defaultValue={[options[0], options[2], options[3]]}
          label="Label"
          required
          multi
          showSelectedOptions
        />
      </div>
    );
  }
};

export const DropdownWithTooltips = {
  render: () => {
    const optionsWithTooltips = useMemo(
      () =>
        Array.from({ length: 2 }, (_, i) => ({
          value: `Option ${i + 1}`,
          label: `Option ${i + 1}`,
          tooltipProps: {
            content: `Description for option ${i + 1}`
          }
        })),
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <DropdownNew placeholder={"Placeholder text here"} options={optionsWithTooltips} />
      </div>
    );
  }
};

export const DropdownInsidePopover = {
  render: () => {
    const options = useMemo(
      () =>
        Array.from({ length: 15 }, (_, i) => ({
          value: `${i + 1}`,
          label: `Option ${i + 1}`
        })),
      []
    );

    const [show, setShow] = useState(false);

    const closeModal = useCallback(() => {
      setShow(false);
    }, [setShow]);

    const dialogStyle = {
      width: "350px",
      height: "200px",
      overflow: "auto"
    };

    return (
      <Flex gap="large">
        <DialogContentContainer style={dialogStyle}>
          <ModalExampleContent />
          <Box marginTop="medium" marginBottom="xxl">
            <div style={{ width: "300px" }}>
              <DropdownNew placeholder="Dropdown inside DialogContentContainer" options={options} />
            </div>
          </Box>
        </DialogContentContainer>
        <div>
          <Button onClick={() => setShow(true)}>Open Modal</Button>
          <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
            <ModalContent>
              <div style={{ width: "300px" }}>
                <DropdownNew placeholder="Dropdown" options={options} />
              </div>
            </ModalContent>
          </Modal>
        </div>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { ModalExampleContent }
      }
    }
  },
  name: "Dropdown inside popover"
};
