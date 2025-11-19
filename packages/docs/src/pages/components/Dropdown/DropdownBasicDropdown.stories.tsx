import React, { useCallback, useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person3 from "../Avatar/assets/person3.png";
import person2 from "../Avatar/assets/person2.png";
import { Attach, Email } from "@vibe/icons";
import { Dropdown, type BaseDropdownProps, type DropdownOption } from "@vibe/core/next";
import { Flex, Text } from "@vibe/core";
import { FixedSizeList as List } from "react-window";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
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

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown [New]/Basic dropdown",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const dropdownTemplate = (props: BaseDropdownProps<any>) => {
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
      <Dropdown options={options} label="Label" helperText="Helper text" {...props} />
    </div>
  );
};

export const Overview: Story = {
  render: dropdownTemplate.bind({}),
  args: {
    id: "overview-dropdown",
    ariaLabel: "Overview dropdown",
    placeholder: "Placeholder text here",
    clearAriaLabel: "Clear"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes: Story = {
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
      <Flex gap="medium">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="sizes-large"
            ariaLabel="Large dropdown"
            options={options}
            placeholder="Placeholder text here"
            label="Label"
            size="large"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="sizes-medium"
            ariaLabel="Medium dropdown"
            options={options}
            placeholder="Placeholder text here"
            label="Label"
            size="medium"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="sizes-small"
            ariaLabel="Small dropdown"
            options={options}
            placeholder="Placeholder text here"
            label="Label"
            size="small"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const States: Story = {
  render: () => (
    <Flex direction="row" gap="medium">
      <Flex direction="column" gap="medium">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="states-default"
            ariaLabel="Default dropdown"
            options={[]}
            placeholder="Default"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="states-disabled"
            ariaLabel="Disabled dropdown"
            options={[]}
            placeholder="Disabled"
            disabled
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
      <Flex direction="column" gap="medium">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="states-error"
            ariaLabel="Error dropdown"
            options={[]}
            placeholder="Error"
            error
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="states-readonly"
            ariaLabel="Readonly dropdown"
            options={[]}
            placeholder="Readonly"
            readOnly
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    </Flex>
  )
};

export const MultiSelect: Story = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "1",
          label: "Chip one"
        },
        {
          value: "2",
          label: "Chip two"
        },
        {
          value: "3",
          label: "Chip three"
        },
        {
          value: "4",
          label: "Chip four"
        }
      ],
      []
    );

    return (
      <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single line with hidden options</Text>
          <div style={{ width: "350px", marginBottom: "50px" }}>
            <Dropdown
              placeholder="Single line multi state"
              defaultValue={[options[0], options[1], options[2]]}
              options={options}
              multi
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple lines</Text>
          <div style={{ width: "350px", marginBottom: "50px" }}>
            <Dropdown
              placeholder="Multiple line multi state"
              defaultValue={[options[0], options[1], options[2]]}
              options={options}
              multi
              multiline
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const DropdownWithIconOrAvatar: Story = {
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
            <Dropdown defaultValue={optionsIcons[0]} options={optionsIcons} clearAriaLabel="Clear" />
          </div>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <Dropdown defaultValue={optionsAvatar[0]} options={optionsAvatar} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple values</Text>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <Dropdown defaultValue={[optionsIcons[0]]} options={optionsIcons} multi clearAriaLabel="Clear" />
          </div>
          <div style={{ width: "350px", marginBottom: "10px" }}>
            <Dropdown defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi clearAriaLabel="Clear" />
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

export const Searchable: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: "Item 1", label: "Item 1" },
        { value: "Item 2", label: "Item 2" },
        { value: "Item 3", label: "Item 3" }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          placeholder={"Search an item"}
          options={options}
          searchable
          maxMenuHeight={170}
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const DropdownWithGroups: Story = {
  render: () => {
    const options = useMemo(
      () => [
        {
          label: "Category 1",
          options: [
            { value: "1", label: "Item 1" },
            { value: "2", label: "Item 2" },
            { value: "3", label: "Item 3" }
          ]
        },
        {
          label: "Category 2",
          options: [
            { value: "4", label: "Item 1" },
            { value: "5", label: "Item 2" },
            { value: "6", label: "Item 3" }
          ]
        }
      ],
      []
    );

    const optionsWithoutGroupLabel = useMemo(
      () => [
        {
          options: [
            { value: "1", label: "Item 1" },
            { value: "2", label: "Item 2" },
            { value: "3", label: "Item 3" }
          ]
        },
        {
          options: [
            { value: "4", label: "Item 1" },
            { value: "5", label: "Item 2" }
          ]
        }
      ],
      []
    );

    return (
      <Flex gap="medium" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Group by divider</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              placeholder="Group by divider"
              options={optionsWithoutGroupLabel}
              withGroupDivider
              maxMenuHeight={170}
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category</Text>
          <div style={{ width: "300px" }}>
            <Dropdown placeholder="Group by category" options={options} maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title sticky</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              placeholder="Group by category title sticky"
              options={options}
              stickyGroupTitle
              maxMenuHeight={170}
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const DropdownItemWithElements: Story = {
  render: () => {
    const startOptions: DropdownOption<Record<string, unknown>>[] = useMemo(
      () => [
        {
          value: "icon",
          label: "Item with icon",
          startElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "avatar",
          label: "Item with avatar",
          startElement: {
            type: "avatar",
            value: person1
          }
        },
        {
          value: "indent",
          label: "Item with insert",
          startElement: {
            type: "indent"
          }
        }
      ],
      []
    );

    const endOptions: DropdownOption<Record<string, unknown>>[] = useMemo(
      () => [
        {
          value: "endIcon",
          label: "Item with icon",
          endElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "hintText",
          label: "Item with hint text",
          endElement: {
            type: "suffix",
            value: "⌘C"
          }
        }
      ],
      []
    );

    return (
      <Flex gap="large">
        <div style={{ width: "300px" }}>
          <Dropdown
            placeholder={"Start element"}
            options={startOptions}
            label="Start element"
            required
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            placeholder={"End element"}
            options={endOptions}
            label="End element"
            required
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const DropdownHideSelectedItems: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: "Option 1", label: "Label" },
        { value: "Option 2", label: "Label" },
        { value: "Option 3", label: "Label" },
        { value: "Option 4", label: "Label" },
        { value: "Option 5", label: "Label" },
        { value: "Option 6", label: "Label" }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          placeholder={"Placeholder text here"}
          options={options}
          defaultValue={[options[0], options[2], options[3]]}
          label="Label"
          required
          multi
          showSelectedOptions={false}
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const DropdownWithTooltips: Story = {
  render: () => {
    const optionsWithTooltips = useMemo(
      () => [
        {
          value: "Option 1",
          label: "Tooltip",
          tooltipProps: {
            content: "This is a title message for further information will appear here."
          }
        },
        {
          value: "Option 2",
          label: "Chip",
          tooltipProps: {
            content: "This is a title message for further information will appear here."
          }
        },
        {
          value: "Option 3",
          label: "Button"
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown placeholder={"Placeholder text here"} options={optionsWithTooltips} clearAriaLabel="Clear" />
      </div>
    );
  }
};

export const DropdownWithVirtualization: Story = {
  render: () => {
    const options = useMemo(
      () => [
        {
          options: Array.from({ length: 1000 }, (_, index) => ({
            value: `option-${index + 1}`,
            label: `Option ${index + 1}`
          }))
        }
      ],
      []
    );

    const groupedOptions = useMemo(
      () =>
        Array.from({ length: 10 }, (_, groupIndex) => ({
          label: `Group ${groupIndex + 1}`,
          options: Array.from({ length: 100 }, (_, optionIndex) => ({
            value: `group-${groupIndex + 1}-option-${optionIndex + 1}`,
            label: `Group ${groupIndex + 1} - Option ${optionIndex + 1}`
          }))
        })),
      []
    );

    const virtualizedMenuRenderer = useCallback(({ children }: { children: React.ReactNode }) => {
      const flattenedOptions: React.ReactElement[] = [];

      const flattenOptions = (reactNode: React.ReactNode) => {
        React.Children.forEach(reactNode, childElement => {
          if (React.isValidElement(childElement)) {
            if (childElement.type === "li" || childElement.props?.role) {
              flattenedOptions.push(childElement);
            } else if (childElement.props?.children) {
              flattenOptions(childElement.props.children);
            }
          }
        });
      };
      flattenOptions(children);

      if (flattenedOptions.length === 0) {
        return <div>No options available</div>;
      }

      const itemHeight = 40;
      const containerHeight = 200;

      // Row renderer that preserves original elements with all their downshift props
      const VirtualizedRow = useCallback(
        ({ index, style }: { index: number; style: React.CSSProperties }) => {
          const option = flattenedOptions[index];
          return <div style={style}>{option}</div>;
        },
        [flattenedOptions]
      );

      return (
        <List
          height={containerHeight}
          width="100%"
          itemCount={flattenedOptions.length}
          itemSize={itemHeight}
          overscanCount={5}
        >
          {VirtualizedRow}
        </List>
      );
    }, []);

    return (
      <Flex gap="large" align="start">
        <div style={{ width: "350px" }}>
          <Dropdown
            placeholder="Search"
            options={options}
            label="Virtualized"
            menuRenderer={virtualizedMenuRenderer}
            searchable
            maxMenuHeight={250}
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "350px" }}>
          <Dropdown
            placeholder="Search"
            options={groupedOptions}
            label="Grouped Virtualized"
            menuRenderer={virtualizedMenuRenderer}
            searchable
            maxMenuHeight={250}
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  },
  name: "Virtualized Dropdown"
};
