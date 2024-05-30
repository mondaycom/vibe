import React, { useMemo, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import Combobox, { ComboboxProps } from "../Combobox";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { defaultPlaySuite } from "../__tests__/Combobox.interactions";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import Button from "../../Button/Button";
import Dialog from "../../Dialog/Dialog";
import { Edit, Person, ThumbsUp, Time, Update, Upgrade, Wand } from "../../Icon/Icons";
import Avatar from "../../Avatar/Avatar";
import Flex from "../../Flex/Flex";
import { optionRenderer } from "./OptionRenderer";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Icon } from "../../index";
import "./Combobox.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Combobox,
  enumPropNamesArray: ["size"],
  iconPropNamesArray: ["searchIcon"],
  actionPropsArray: ["onOptionHover", "onOptionLeave", "onFilterChanged"]
});

export default {
  title: "Inputs/Combobox",
  component: Combobox,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const comboboxTemplate = (args: ComboboxProps) => {
  return (
    <DialogContentContainer>
      <Combobox {...args} />
    </DialogContentContainer>
  );
};

export const Overview = {
  render: comboboxTemplate.bind({}),
  args: {
    options: [
      {
        id: "1",
        label: "Option 1"
      },
      {
        id: "2",
        label: "Option 2"
      },
      {
        id: "3",
        label: "Option 3"
      }
    ],

    onClick: () => alert("clicked"),
    placeholder: "Placeholder text here",
    clearFilterOnSelection: true
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Default = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1"
        },
        {
          id: "2",
          label: "Option 2"
        },
        {
          id: "3",
          label: "Option 3"
        }
      ],
      []
    );

    return <Combobox placeholder="Placeholder text here" options={options} />;
  },
  play: defaultPlaySuite
};

export const ComboboxInsideADialog = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1"
        },
        {
          id: "2",
          label: "Option 2"
        },
        {
          id: "3",
          label: "Option 3"
        },
        {
          id: "4",
          label: "Option 4"
        },
        {
          id: "5",
          label: "Option 5"
        }
      ],
      []
    );

    return (
      <DialogContentContainer>
        <Combobox options={options} placeholder="Placeholder text here" />
      </DialogContentContainer>
    );
  },
  name: "Combobox inside a dialog"
};

export const Sizes = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1"
        },
        {
          id: "2",
          label: "Option 2"
        },
        {
          id: "3",
          label: "Option 3"
        },
        {
          id: "4",
          label: "Option 4"
        },
        {
          id: "5",
          label: "Option 5"
        }
      ],
      []
    );

    return (
      <div className="combobox-stories-styles_row">
        <DialogContentContainer>
          <Combobox options={options} size={Combobox.sizes.SMALL} placeholder="Placeholder text here" />
        </DialogContentContainer>
        <DialogContentContainer>
          <Combobox options={options} placeholder="Placeholder text here" />
        </DialogContentContainer>
        <DialogContentContainer>
          <Combobox options={options} size={Combobox.sizes.LARGE} placeholder="Placeholder text here" />
        </DialogContentContainer>
      </div>
    );
  }
};

export const WithCategories = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Favorites",
          categoryId: "favorites"
        },
        {
          id: "2",
          label: "Main workspace",
          categoryId: "workspace"
        },
        {
          id: "3",
          label: "Client Foundations",
          categoryId: "workspace"
        },
        {
          id: "4",
          label: "Design",
          categoryId: "workspace"
        },
        {
          id: "5",
          label: "Marketing Cluster",
          categoryId: "workspace"
        },
        {
          id: "6",
          label: "Mobile",
          categoryId: "workspace"
        }
      ],
      []
    );

    const categories = useMemo(
      () => ({
        favorites: {
          id: "favorites",
          label: "Favorites"
        },

        workspace: {
          id: "Workspaces",
          label: "Workspaces"
        }
      }),
      []
    );

    return (
      <Flex
        gap={50}
        style={{
          width: "100%"
        }}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <StoryDescription
          description="Regular"
          vertical
          // @ts-ignore
          align={Flex.align.START}
        >
          <DialogContentContainer
            style={{
              height: "200px"
            }}
          >
            <Combobox options={options} categories={categories} placeholder="Placeholder text here" />
          </DialogContentContainer>
        </StoryDescription>
        <StoryDescription
          description="Sticky mode"
          vertical
          // @ts-ignore
          align={Flex.align.START}
        >
          <DialogContentContainer
            style={{
              height: "200px"
            }}
          >
            <Combobox stickyCategories options={options} categories={categories} placeholder="Placeholder text here" />
          </DialogContentContainer>
        </StoryDescription>
        <StoryDescription
          description="With divider"
          vertical // @ts-ignore
          align={Flex.align.START}
        >
          <DialogContentContainer
            style={{
              height: "200px"
            }}
          >
            <Combobox
              stickyCategories
              options={options}
              categories={categories}
              withCategoriesDivider
              placeholder="Placeholder text here"
            />
          </DialogContentContainer>
        </StoryDescription>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "With categories"
};

export const WithIcons = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1",
          leftIcon: Wand
        },
        {
          id: "2",
          label: "Option 2",
          leftIcon: ThumbsUp
        },
        {
          id: "3",
          label: "Option 3",
          leftIcon: Time
        },
        {
          id: "4",
          label: "Option 4",
          leftIcon: Update
        },
        {
          id: "5",
          label: "Option 5",
          leftIcon: Upgrade
        }
      ],
      []
    );

    return (
      <DialogContentContainer>
        <Combobox options={options} placeholder="Placeholder text here" />
      </DialogContentContainer>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Wand, ThumbsUp, Time, Update, Upgrade }
      }
    }
  },
  name: "With icons"
};

export const WithOptionRenderer = {
  render: () => {
    const options = useMemo(
      () => [
        { id: "1", label: "Option 1" },
        { id: "2", label: "Option 2" },
        { id: "3", label: "Option 3" },
        { id: "4", label: "Option 4" },
        { id: "5", label: "Option 5" },
        { id: "6", label: "Option 6" },
        { id: "7", label: "Option 7" },
        { id: "8", label: "Option 8" },
        { id: "9", label: "Option 9" }
      ],
      []
    );
    const optionRenderer = (option: any) => (
      <div>
        <Icon icon={Person} /> I can render anything with {option.label}
      </div>
    );
    return (
      <DialogContentContainer>
        <Combobox
          options={options}
          optionRenderer={optionRenderer}
          placeholder="Placeholder text here"
          maxOptionsWithoutScroll={3}
        />
      </DialogContentContainer>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Person }
      }
    }
  },
  name: "With optionRenderer"
};

export const WithButton = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1",
          leftIcon: Wand
        },
        {
          id: "2",
          label: "Option 2",
          leftIcon: ThumbsUp
        },
        {
          id: "3",
          label: "Option 3",
          leftIcon: Time
        },
        {
          id: "4",
          label: "Option 4",
          leftIcon: Update
        },
        {
          id: "5",
          label: "Option 5",
          leftIcon: Upgrade
        }
      ],
      []
    );

    return (
      <DialogContentContainer>
        <Combobox options={options} placeholder="Placeholder text here" />
        <Button kind={Button.kinds.TERTIARY} className="combobox-stories-styles_btn" leftIcon={Edit}>
          Edit
        </Button>
      </DialogContentContainer>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Wand, ThumbsUp, Time, Update, Upgrade, Edit }
      }
    }
  }
};

export const WithCreation = {
  render: () => {
    const [options, setOptions] = useState([]);

    return (
      <DialogContentContainer>
        <Combobox
          options={options}
          placeholder="Type to create"
          addNewLabel="Create new item"
          onAddNew={() =>
            setOptions([
              ...options,
              {
                id: options.length + 1,
                label: `Option: ${options.length + 1}`
              }
            ])
          }
        />
      </DialogContentContainer>
    );
  }
};

export const WithVirtualizationOptimization = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "1",
          label: "Option 1",
          categoryId: "Group1"
        },
        {
          id: "2",
          label: "Option 2",
          categoryId: "Group1"
        },
        {
          id: "3",
          label: "Option 3",
          categoryId: "Group1"
        },
        {
          id: "4",
          label: "Option 4",
          categoryId: "Group1"
        },
        {
          id: "5",
          label: "Option 5",
          categoryId: "Group1"
        },
        {
          id: "6",
          label: "Option 6",
          categoryId: "Group1"
        },
        {
          id: "7",
          label: "Option 7",
          categoryId: "Group1"
        },
        {
          id: "8",
          label: "Option 8",
          categoryId: "Group1"
        },
        {
          id: "9",
          label: "Option 9",
          categoryId: "Group1"
        },
        {
          id: "10",
          label: "Option 10",
          categoryId: "Group2"
        },
        {
          id: "11",
          label: "Option 11",
          categoryId: "Group2"
        },
        {
          id: "12",
          label: "Option 12",
          categoryId: "Group2"
        },
        {
          id: "13",
          label: "Option 13",
          categoryId: "Group2"
        },
        {
          id: "14",
          label: "Option 14",
          categoryId: "Group2"
        },
        {
          id: "15",
          label: "Option 15",
          categoryId: "Group2"
        },
        {
          id: "16",
          label: "Option 16",
          categoryId: "Group2"
        },
        {
          id: "17",
          label: "Option 17",
          categoryId: "Group2"
        },
        {
          id: "18",
          label: "Option 18",
          categoryId: "Group2"
        },
        {
          id: "19",
          label: "Option 19",
          categoryId: "Group2"
        },
        {
          id: "20",
          label: "Option 20",
          categoryId: "Group2"
        }
      ],
      []
    );

    const categories = useMemo(
      () => ({
        Group1: {
          id: "Group1",
          label: "Group 1"
        },

        Group2: {
          id: "Group2",
          label: "Group 2"
        }
      }),
      []
    );

    return (
      <Flex
        gap={Flex.gaps.SMALL}
        style={{
          width: "100%"
        }}
        justify={Flex.justify.CENTER}
        align={Flex.align.START}
      >
        <StoryDescription
          className="combobox-stories-styles_virtualized-description"
          // @ts-ignore
          align={Flex.align.START}
          description="Virtualization optimization without categories"
          vertical
          headerStyle={{
            width: "70%",
            textAlign: "start"
          }}
        >
          <div
            style={{
              width: "280px"
            }}
          >
            <DialogContentContainer>
              <Combobox
                options={options}
                renderOnlyVisibleOptions
                placeholder="Placeholder text here"
                maxOptionsWithoutScroll={3}
              />
            </DialogContentContainer>
          </div>
        </StoryDescription>
        <StoryDescription
          className="combobox-stories-styles_virtualized-description"
          // @ts-ignore
          align={Flex.align.START}
          description="Virtualization optimization with categories"
          vertical
          headerStyle={{
            width: "70%",
            textAlign: "start"
          }}
        >
          <div
            style={{
              width: "280px"
            }}
          >
            <DialogContentContainer>
              <Combobox
                options={options}
                renderOnlyVisibleOptions
                categories={categories}
                placeholder="Placeholder text here"
                maxOptionsWithoutScroll={3}
              />
            </DialogContentContainer>
          </div>
        </StoryDescription>
        <StoryDescription
          className="combobox-stories-styles_virtualized-description"
          // @ts-ignore
          align={Flex.align.START}
          description="Virtualization optimization with sticky categories"
          vertical
          headerStyle={{
            width: "70%",
            textAlign: "start"
          }}
        >
          <div
            style={{
              width: "280px"
            }}
          >
            <DialogContentContainer>
              <Combobox
                stickyCategories
                options={options}
                renderOnlyVisibleOptions
                categories={categories}
                placeholder="Placeholder text here"
                maxOptionsWithoutScroll={3}
              />
            </DialogContentContainer>
          </div>
        </StoryDescription>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  },
  name: "With virtualization optimization"
};

export const LoadingState = {
  render: () => {
    const options = useMemo(() => [], []);

    return (
      <DialogContentContainer>
        <Combobox loading options={options} placeholder="Board name" />
      </DialogContentContainer>
    );
  },
  name: "Loading state"
};

export const ComboboxAsPersonPicker = {
  render: () => {
    const options = useMemo(
      () => [
        {
          id: "Hadas Farhi",
          label: "Hadas Farhi",
          src: person1,
          type: Avatar.types.IMG,
          position: "(Frontend Developer)",
          categoryId: "suggestedPeople"
        },
        {
          id: "Rotem Dekel",
          label: "Rotem Dekel",
          src: person2,
          type: Avatar.types.IMG,
          position: "(Product Designer)",
          categoryId: "suggestedPeople"
        },
        {
          id: "Netta Muller",
          label: "Netta Muller",
          src: person3,
          type: Avatar.types.IMG,
          position: "(Brand Designer)",
          categoryId: "suggestedPeople"
        }
      ],
      []
    );

    const categories = useMemo(
      () => ({
        suggestedPeople: {
          id: "suggestedPeople",
          label: "Suggested people"
        }
      }),
      []
    );

    return (
      <Flex
        style={{
          width: "100%",
          height: "270px"
        }}
        justify={Flex.justify.CENTER}
        align={Flex.align.START}
      >
        <Dialog
          content={() => (
            <DialogContentContainer className="combobox-stories-styles_wrapper">
              <Combobox
                options={options}
                categories={categories}
                optionRenderer={optionRenderer}
                size={Combobox.sizes.SMALL}
                placeholder="Search"
              />
            </DialogContentContainer>
          )}
          tooltip
          position={Dialog.positions.BOTTOM}
          open={true}
        >
          <div className="person-picker-mock">
            <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} />
          </div>
        </Dialog>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3, optionRenderer }
      }
    }
  },
  name: "Combobox as person picker"
};
