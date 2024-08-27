import React, { useCallback, useMemo, useRef, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { multiInteractionTests, overviewPlaySuite } from "../__tests__/Dropdown.interactions";
import person1 from "./assets/person1.png";
import person3 from "./assets/person3.png";
import person2 from "./assets/person2.png";
import { OptionRenderer } from "./OptionRenderer.js";
import { Attach, Email } from "../../Icon/Icons";
import { Avatar, Box, Button, DialogContentContainer, Dropdown, Flex, Label, Modal, ModalContent } from "../../index";
import ModalExampleContent from "../../../storybook/patterns/dropdown-in-modals/ModalExampleContent";
import "./Dropdown.stories.scss";
import { fakeFetchUsers } from "./Dropdown.stories.helpers";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  enumPropNamesArray: ["size", "menuPosition", "menuPlacement"],
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
  title: "Inputs/Dropdown",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const dropdownTemplate = props => {
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
      <Dropdown options={options} {...props} />
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
    controls: {
      // TODO: remove exclusion when prop is removed in next major
      exclude: ["withReadOnlyStyle"]
    },
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  play: overviewPlaySuite
};

export const Sizes = {
  render: () => (
    <>
      <Dropdown placeholder="Small" size={Dropdown.sizes.SMALL} className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Medium" size={Dropdown.sizes.MEDIUM} className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Large" size={Dropdown.sizes.LARGE} className="dropdown-stories-styles_spacing" />
    </>
  )
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
      <Flex direction={Flex.directions.ROW}>
        <Dropdown defaultValue={[options[0]]} options={options} disabled className="dropdown-stories-styles_spacing" />
        <Dropdown
          multi
          defaultValue={[options[0], options[1]]}
          options={options}
          disabled
          className="dropdown-stories-styles_spacing"
        />
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
      <Flex direction={Flex.directions.ROW}>
        <Dropdown defaultValue={[options[0]]} options={options} readOnly className="dropdown-stories-styles_spacing" />
        <Dropdown
          multi
          defaultValue={[options[0], options[1]]}
          options={options}
          readOnly
          className="dropdown-stories-styles_spacing"
        />
      </Flex>
    );
  }
};

export const Rtl = {
  render: () => (
    <>
      <Dropdown placeholder="Left to right (default)" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="מימין לשמאל" className="dropdown-stories-styles_spacing" rtl />
    </>
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
      <Flex wrap gap={Flex.gaps.MEDIUM}>
        <StoryDescription description="Single line" vertical>
          <div
            style={{
              width: "400px"
            }}
          >
            <Dropdown
              placeholder="Single line multi state"
              defaultValue={[options[0]]}
              options={options}
              multi
              className="dropdown-stories-styles_with-chips"
            />
          </div>
        </StoryDescription>
        <StoryDescription description="Multiple lines" vertical>
          <div
            style={{
              width: "400px"
            }}
          >
            <Dropdown
              placeholder="Multiple line multi state"
              defaultValue={[options[0]]}
              options={options}
              multi
              multiline
              className="dropdown-stories-styles_with-chips"
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
          <div
            style={{
              width: "400px"
            }}
          >
            <Dropdown
              defaultValue={[options[0]]}
              options={options}
              multi
              multiline
              className="dropdown-stories-styles_with-chips"
              withMandatoryDefaultOptions
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
          <div
            style={{
              width: "400px"
            }}
          >
            <Dropdown
              defaultValue={[...options]}
              options={options}
              multi
              className="dropdown-stories-styles_with-chips"
            />
          </div>
        </StoryDescription>
      </Flex>
    );
  },
  play: multiInteractionTests,
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "Multi-choice with different states"
};

export const AsyncDropdown = {
  render: () => {
    const fetchUserOptions = async searchTerm => {
      try {
        const response = await fakeFetchUsers();
        const users = await response.json();

        return users
          .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(user => ({
            label: user.name,
            value: user.id
          }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      return [];
    };

    return (
      <div
        style={{
          width: "400px"
        }}
      >
        <Dropdown asyncOptions={fetchUserOptions} placeholder="Async options" cacheOptions defaultOptions />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { fakeFetchUsers }
      }
    }
  }
};

export const DropdownWithAvatar = {
  render: () => {
    const optionsAvatar = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel",
          leftAvatar: person1
        },
        {
          value: "Hadas",
          label: "Hadas Farhi",
          leftAvatar: person2
        },
        {
          value: "Netta",
          label: "Netta Muller",
          leftAvatar: person3
        }
      ],
      []
    );

    return (
      <Flex gap={Flex.gaps.SMALL}>
        <StoryDescription vertical description="Single value">
          <div>
            <Dropdown
              defaultValue={[optionsAvatar[0]]}
              options={optionsAvatar}
              className="dropdown-stories-styles_with-chips"
            />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div>
            <Dropdown
              defaultValue={[optionsAvatar[0]]}
              options={optionsAvatar}
              multi
              multiline
              className="dropdown-stories-styles_with-chips"
            />
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
    const optionsIcons = useMemo(
      () => [
        {
          value: "email",
          label: "Email",
          leftIcon: Email
        },
        {
          value: "attach",
          label: "Attach",
          leftIcon: Attach
        }
      ],
      []
    );

    return (
      <Flex gap={Flex.gaps.SMALL}>
        <StoryDescription vertical description="Single value">
          <div>
            <Dropdown
              defaultValue={[optionsIcons[0]]}
              options={optionsIcons}
              className="dropdown-stories-styles_with-chips"
            />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div>
            <Dropdown
              defaultValue={[optionsIcons[0]]}
              options={optionsIcons}
              multi
              multiline
              className="dropdown-stories-styles_with-chips"
            />
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
    const optionsWithChipColors = useMemo(
      () => [
        {
          value: "Rotem",
          label: "Rotem Dekel",
          chipColor: Dropdown.chipColors.NEGATIVE
        },
        {
          value: "Hadas",
          label: "Hadas Farhi",
          chipColor: Dropdown.chipColors.POSITIVE
        },
        {
          value: "Netta",
          label: "Netta Muller",
          chipColor: Dropdown.chipColors.PRIMARY
        }
      ],
      []
    );

    return (
      <StoryDescription vertical>
        <div>
          <Dropdown
            defaultValue={[optionsWithChipColors[0]]}
            options={optionsWithChipColors}
            multi
            multiline
            className="dropdown-stories-styles_with-chips"
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
        <div>
          <Dropdown
            placeholder={"Placeholder text here"}
            options={optionsWithTooltips}
            className="dropdown-stories-styles_with-chips"
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
          type: Avatar.types.IMG,
          size: Avatar.sizes.SMALL,
          name: "Dor Yehuda",
          position: "(Full Stack Developer)"
        },
        {
          value: "No",
          label: "Rotem Dekel",
          src: person3,
          type: Avatar.types.IMG,
          size: Avatar.sizes.SMALL,
          name: "Rotem Dekel",
          position: "(Product Designer)"
        },
        {
          value: "Yes",
          label: "Netta Muller",
          src: person2,
          type: Avatar.types.IMG,
          size: Avatar.sizes.SMALL,
          name: "Netta Muller",
          position: "(Brand Designer)"
        }
      ],
      []
    );

    return (
      <Dropdown
        defaultValue={[options[0]]}
        options={options}
        multi
        placeholder="Dropdown with chips"
        optionRenderer={OptionRenderer}
        className="dropdown-stories-styles_with-chips"
      />
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

export const SearchableDropdown = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");

    const allOptions = useMemo(
      () => [
        {
          value: "Red",
          label: "Red"
        },
        {
          value: "Orange",
          label: "Orange"
        },
        {
          value: "Yellow",
          label: "Yellow"
        },
        {
          value: "Green",
          label: "Green"
        },
        {
          value: "Blue",
          label: "Blue"
        },
        {
          value: "Indigo",
          label: "Indigo"
        },
        {
          value: "Violet",
          label: "Violet"
        }
      ],
      []
    );

    const options = useMemo(() => {
      if (!searchValue) return allOptions;

      return allOptions.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    }, [allOptions, searchValue]);

    const onInputChange = value => setSearchValue(value);

    return (
      <Dropdown
        options={options}
        multi
        placeholder="Select colors"
        className="dropdown-stories-styles_with-chips"
        onInputChange={onInputChange}
      />
    );
  },
  name: "Searchable dropdown"
};

export const DropdownWithLabels = {
  render: () => {
    const labelRenderer = useCallback(({ label, color }) => {
      return <Label text={label} color={color} isAnimationDisabled />;
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
      <Dropdown
        placeholder="Placeholder text here"
        options={options}
        defaultValue={[options[0]]}
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
        <h5 className="dropdown-stories-styles_title">Are you usually a Dark mode person?</h5>
        <Dropdown
          defaultValue={[options[0]]}
          placeholder="Placeholder text here"
          options={options}
          className="dropdown-stories-styles_big-spacing"
        />
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

    return (
      <Dropdown placeholder="Placeholder text here" options={options} className="dropdown-stories-styles_big-spacing" />
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
      <Flex gap={Flex.gaps.LARGE}>
        <DialogContentContainer style={dialogStyle}>
          <ModalExampleContent />
          <Box marginTop={Box.marginTops.MEDIUM} marginBottom={Box.marginBottoms.XXL}>
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

export const DropdownWithLoading = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

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

    const loadingOnInputChange = useCallback(() => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

    return (
      <Dropdown
        placeholder={"Type to start loading"}
        options={options}
        isLoading={isLoading}
        loadingMessage={() => "Loading options..."}
        className="dropdown-stories-styles_big-spacing"
        onInputChange={loadingOnInputChange}
      />
    );
  },
  name: "Dropdown with loading"
};

export const DropdownWithRef = {
  render: () => {
    const ref = useRef();

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

    const focusDropdownInput = useCallback(() => {
      console.log("Dropdown ref.current = ", ref.current);
      ref.current.select.focus();
    }, []);

    return (
      <Flex direction={Flex.directions.ROW}>
        <Dropdown
          placeholder="Dropdown with ref"
          options={options}
          ref={ref}
          className="dropdown-stories-styles_spacing"
        />
        <Button onClick={focusDropdownInput} className="dropdown-stories-styles_button">
          Focus dropdown input
        </Button>
      </Flex>
    );
  },
  name: "Dropdown with ref"
};

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
      <Flex gap={Flex.gaps.LARGE}>
        <Dropdown placeholder="Tab selects value" options={options} className="dropdown-stories-styles_big-spacing" />
        <Dropdown
          placeholder="Tab does not select value"
          options={options}
          tabSelectsValue={false}
          className="dropdown-stories-styles_big-spacing"
        />
      </Flex>
    );
  },
  name: "Dropdown value selection"
};
