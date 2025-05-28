import React, { useCallback, useMemo, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
// import { multiInteractionTests } from "../__tests__/Dropdown.interactions";
import person1 from "./assets/person1.png";
import person3 from "./assets/person3.png";
import person2 from "./assets/person2.png";
import { OptionRenderer } from "./OptionRenderer";
import { Attach, Email } from "@vibe/icons";
import { Box, Button, DialogContentContainer, DropdownNew, Flex, Label, Modal, ModalContent } from "../../index";
import ModalExampleContent from "../../../storybook/patterns/dropdown-in-modals/ModalExampleContent";
import Heading from "../../Heading/Heading";

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
    <div style={{ height: "150px" }}>
      <div style={{ width: "300px" }}>
        <DropdownNew options={options} {...props} />
      </div>
    </div>
  );
};

export const Overview = {
  render: dropdownTemplate.bind({}),
  args: {
    placeholder: "Placeholder text here",
    className: "dropdown-stories-styles_spacing"
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
          <DropdownNew options={options} placeholder="Small" size="small" />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={options} placeholder="Medium" size="medium" />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew options={options} placeholder="Large" size="large" />
        </div>
      </>
    );
  }
};

export const Disabled = {
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
        }
      ],
      []
    );

    return (
      <Flex direction="row" gap="medium" style={{ margin: "30px" }}>
        <div style={{ width: "300px" }}>
          <DropdownNew defaultValue={options[0]} options={options} disabled />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew multi defaultValue={[options[0], options[1]]} options={options} disabled />
        </div>
      </Flex>
    );
  }
};

export const Readonly = {
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
        }
      ],
      []
    );

    return (
      <Flex direction="row" gap="medium" style={{ margin: "30px" }}>
        <div style={{ width: "300px" }}>
          <DropdownNew defaultValue={options[0]} options={options} readOnly />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew multi defaultValue={[options[0], options[1]]} options={options} readOnly />
        </div>
      </Flex>
    );
  }
};

export const Rtl = {
  render: () => (
    <Flex direction="row" gap="medium" style={{ margin: "30px" }}>
      <div style={{ width: "300px" }}>
        <DropdownNew options={[]} placeholder="Left to right (default)" />
      </div>
      <div style={{ width: "300px" }}>
        <DropdownNew options={[]} placeholder="מימין לשמאל" dir="rtl" />
      </div>
    </Flex>
  ),
  name: "RTL"
};

export const MultiChoiceWithDifferentStates = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel"
        },
        {
          value: "Hadas",
          label: "Hadas Farhi"
        },
        {
          value: "Netta",
          label: "Netta Muller"
        },
        {
          value: "Dor",
          label: "Dor Yehuda"
        }
      ],
      []
    );

    return (
      <Flex wrap gap="medium">
        <StoryDescription description="Single line" vertical>
          <div style={{ width: "400px", marginBottom: "50px" }}>
            <DropdownNew placeholder="Single line multi state" defaultValue={[options[0]]} options={options} multi />
          </div>
        </StoryDescription>
        <StoryDescription description="Multiple lines" vertical>
          <div style={{ width: "400px", marginBottom: "50px" }}>
            <DropdownNew
              placeholder="Multiple line multi state"
              defaultValue={[options[0]]}
              options={options}
              multi
              multiline
            />
          </div>
        </StoryDescription>
        <StoryDescription
          description="Mandatory default values"
          vertical
          headerStyle={{
            width: 190
          }}
        >
          <div style={{ width: "400px", marginBottom: "50px" }}>
            <DropdownNew
              defaultValue={[options[0]]}
              options={options}
              multi
              multiline
              // withMandatoryDefaultOptions
            />
          </div>
        </StoryDescription>
        <StoryDescription
          description="Hidden options list"
          vertical
          headerStyle={{
            width: 190
          }}
        >
          <div style={{ width: "400px", marginBottom: "50px" }}>
            <DropdownNew defaultValue={[...options]} options={options} multi />
          </div>
        </StoryDescription>
      </Flex>
    );
  },
  // play: multiInteractionTests,
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "Multi-choice with different states"
};

export const DropdownWithAvatar = {
  render: () => {
    const optionsAvatar: any = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel",
          startElement: {
            type: "avatar",
            value: person1
          }
        },
        {
          value: "Hadas",
          label: "Hadas Farhi",
          startElement: {
            type: "avatar",
            value: person2
          }
        },
        {
          value: "Netta",
          label: "Netta Muller",
          startElement: {
            type: "avatar",
            value: person3
          }
        }
      ],
      []
    );

    return (
      <Flex gap="medium" style={{ margin: "30px" }}>
        <StoryDescription vertical description="Single value">
          <div style={{ width: "400px" }}>
            <DropdownNew defaultValue={optionsAvatar[0]} options={optionsAvatar} />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div style={{ width: "400px" }}>
            <DropdownNew defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi />
          </div>
        </StoryDescription>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3, StoryDescription }
      }
    }
  },
  name: "Dropdown with avatar"
};

export const DropdownWithIcon = {
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

    return (
      <Flex gap="medium" style={{ margin: "30px" }}>
        <StoryDescription vertical description="Single value">
          <div style={{ width: "400px", marginBottom: "70px" }}>
            <DropdownNew defaultValue={optionsIcons[0]} options={optionsIcons} />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div style={{ width: "400px", marginBottom: "70px" }}>
            <DropdownNew defaultValue={[optionsIcons[0]]} options={optionsIcons} multi multiline />
          </div>
        </StoryDescription>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Email, Attach, StoryDescription }
      }
    }
  },
  name: "Dropdown with icon"
};

export const DropdownWithChipColors = {
  render: () => {
    const optionsWithChipColors: any = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel",
          chipColor: "negative"
        },
        {
          value: "Hadas",
          label: "Hadas Farhi",
          chipColor: "positive"
        },
        {
          value: "Netta",
          label: "Netta Muller",
          chipColor: "primary"
        }
      ],
      []
    );

    return (
      <StoryDescription vertical>
        <div style={{ width: "300px", margin: "30px" }}>
          <DropdownNew
            defaultValue={[optionsWithChipColors[0]]}
            options={optionsWithChipColors}
            multi
            multiline
            menuRenderer={({ selectedItems }) => <div>Selected: {selectedItems[0].label}</div>}
          />
        </div>
      </StoryDescription>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "Dropdown with chip colors"
};

export const DropdownWithTooltipsOnItems = {
  render: () => {
    const optionsWithTooltips = useMemo(
      () => [
        {
          value: "Option 1",
          label: "Option 1",
          tooltipProps: {
            content: "Description for option 1"
          }
        },
        {
          value: "Option 2",
          label: "Option 2",
          tooltipProps: {
            content: "Description for option 2"
          }
        }
      ],
      []
    );

    return (
      <StoryDescription vertical>
        <div style={{ width: "300px", margin: "30px" }}>
          <DropdownNew placeholder={"Placeholder text here"} options={optionsWithTooltips} />
        </div>
      </StoryDescription>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "Dropdown with tooltips on items"
};

export const DropdownWithChips = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "Dor Yehuda",
          label: "Hadas Farhi",
          src: person1,
          type: "img",
          size: "small",
          name: "Dor Yehuda",
          position: "(Full Stack Developer)"
        },
        {
          value: "No",
          label: "Rotem Dekel",
          src: person3,
          type: "img",
          size: "small",
          name: "Rotem Dekel",
          position: "(Product Designer)"
        },
        {
          value: "Yes",
          label: "Netta Muller",
          src: person2,
          type: "img",
          size: "small",
          name: "Netta Muller",
          position: "(Brand Designer)"
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px", margin: "30px" }}>
        <DropdownNew
          defaultValue={[options[0]]}
          options={options}
          multi
          placeholder="Dropdown with chips"
          optionRenderer={OptionRenderer}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3, OptionRenderer }
      }
    }
  },
  name: "Dropdown with chips"
};

// export const SearchableDropdown = {
//   render: () => {
//     const [searchValue, setSearchValue] = useState("");

//     const allOptions = useMemo(
//       () => [
//         {
//           value: "Red",
//           label: "Red"
//         },
//         {
//           value: "Orange",
//           label: "Orange"
//         },
//         {
//           value: "Yellow",
//           label: "Yellow"
//         },
//         {
//           value: "Green",
//           label: "Green"
//         },
//         {
//           value: "Blue",
//           label: "Blue"
//         },
//         {
//           value: "Indigo",
//           label: "Indigo"
//         },
//         {
//           value: "Violet",
//           label: "Violet"
//         }
//       ],
//       []
//     );

//     const options = useMemo(() => {
//       if (!searchValue) return allOptions;

//       return allOptions.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
//     }, [allOptions, searchValue]);

//     const onInputChange = value => setSearchValue(value);

//     return (
//       <DropdownNew
//         options={options}
//         multi
//         placeholder="Select colors"
//         className="dropdown-stories-styles_with-chips"
//         onInputChange={onInputChange}
//       />
//     );
//   },
//   name: "Searchable dropdown"
// };

export const DropdownWithLabels = {
  render: () => {
    const labelRenderer = useCallback(({ label, color }: any) => {
      return (
        <Flex style={{ height: "100%" }}>
          <Label text={label} color={color} />
        </Flex>
      );
    }, []);

    const options = useMemo(
      () => [
        {
          value: "success",
          label: "Success",
          color: Label.colors.POSITIVE
        },
        {
          value: "failed",
          label: "Failed",
          color: Label.colors.NEGATIVE
        },
        {
          value: "in progress",
          label: "In progress"
        }
      ],
      []
    );

    return (
      <DropdownNew
        placeholder="Placeholder text here"
        options={options}
        defaultValue={options[0]}
        className="dropdown-stories-styles_big-spacing"
        optionRenderer={labelRenderer}
        valueRenderer={labelRenderer}
      />
    );
  },
  name: "Dropdown with labels"
};

export const DropdownInsideAForm = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "Sometimes",
          label: "Sometimes"
        },
        {
          value: "No",
          label: "No"
        },
        {
          value: "Yes",
          label: "Yes"
        }
      ],
      []
    );

    return (
      <div>
        <Heading type="h3">Are you usually a Dark mode person?</Heading>
        <div style={{ width: "300px" }}>
          <DropdownNew defaultValue={options[0]} placeholder="Placeholder text here" options={options} />
        </div>
      </div>
    );
  },
  name: "Dropdown inside a form"
};

export const DropdownWithGroups = {
  render: () => {
    const options = useMemo(
      () => [
        {
          label: "Group 1",
          options: [
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]
        },
        {
          label: "Group 2",

          options: [
            {
              value: "3",
              label: "Option 3"
            },
            {
              value: "4",
              label: "Option 4"
            }
          ]
        }
      ],
      []
    );

    const optionsWithoutGroupLabel = useMemo(
      () => [
        {
          options: [
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]
        },
        {
          options: [
            {
              value: "3",
              label: "Option 3"
            },
            {
              value: "4",
              label: "Option 4"
            }
          ]
        }
      ],
      []
    );

    return (
      <Flex gap="medium" style={{ margin: "30px" }}>
        <div>
          <div style={{ width: "300px" }}>
            <DropdownNew placeholder="Groups with group title" options={options} />
          </div>
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew placeholder="Groups with group divider" options={optionsWithoutGroupLabel} withGroupDivider />
        </div>
      </Flex>
    );
  },
  name: "Dropdown with groups"
};

export const DropdownInsidePopover = {
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
        },
        {
          value: "5",
          label: "Option 5"
        },
        {
          value: "6",
          label: "Option 6"
        },
        {
          value: "7",
          label: "Option 7"
        },
        {
          value: "8",
          label: "Option 8"
        },
        {
          value: "9",
          label: "Option 9"
        },
        {
          value: "10",
          label: "Option 10"
        },
        {
          value: "11",
          label: "Option 11"
        },
        {
          value: "12",
          label: "Option 12"
        },
        {
          value: "13",
          label: "Option 13"
        },
        {
          value: "14",
          label: "Option 14"
        },
        {
          value: "15",
          label: "Option 15"
        }
      ],
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

// export const DropdownWithLoading = {
//   render: () => {
//     const [isLoading, setIsLoading] = useState(false);

//     const options = useMemo(
//       () => [
//         {
//           value: "1",
//           label: "Option 1"
//         },
//         {
//           value: "2",
//           label: "Option 2"
//         },
//         {
//           value: "3",
//           label: "Option 3"
//         }
//       ],
//       []
//     );

//     const loadingOnInputChange = useCallback(() => {
//       setIsLoading(true);

//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000);
//     }, []);

//     return (
//       <DropdownNew
//         placeholder={"Type to start loading"}
//         options={options}
//         // isLoading={isLoading}
//         // loadingMessage={() => "Loading options..."}
//         className="dropdown-stories-styles_big-spacing"
//         onInputChange={loadingOnInputChange}
//       />
//     );
//   },
//   name: "Dropdown with loading"
// };

// export const DropdownWithRef = {
//   render: () => {
//     const ref = useRef();

//     const options = useMemo(
//       () => [
//         {
//           value: "1",
//           label: "Option 1"
//         },
//         {
//           value: "2",
//           label: "Option 2"
//         },
//         {
//           value: "3",
//           label: "Option 3"
//         }
//       ],
//       []
//     );

//     const focusDropdownInput = useCallback(() => {
//       ref.current?.select.focus();
//     }, [ref]);

//     return (
//       <Flex direction="row">
//         <DropdownNew
//           placeholder="Dropdown with ref"
//           options={options}
//           ref={ref}
//           className="dropdown-stories-styles_spacing"
//         />
//         <Button onClick={focusDropdownInput} className="dropdown-stories-styles_button">
//           Focus dropdown input
//         </Button>
//       </Flex>
//     );
//   },
//   name: "Dropdown with ref"
// };

export const DropdownValueSelection = {
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
        }
      ],
      []
    );

    return (
      <Flex gap="large">
        <div style={{ width: "300px" }}>
          <DropdownNew placeholder="Tab selects value" options={options} />
        </div>
        <div style={{ width: "300px" }}>
          <DropdownNew
            placeholder="Tab does not select value"
            options={options}
            // tabSelectsValue={false}
          />
        </div>
      </Flex>
    );
  },
  name: "Dropdown value selection"
};
