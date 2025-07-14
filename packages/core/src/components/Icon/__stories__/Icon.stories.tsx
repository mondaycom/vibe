import React, { useState } from "react";
import Icon from "../Icon";
import { Bolt } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import Search from "../../Search/Search";
import * as allIcons from "@vibe/icons";
import Flex from "../../Flex/Flex";
import iconsMetaData from "@vibe/icons/meta";
import { SubIcon } from "src/types";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Icon,
  iconPropNamesArray: ["icon"]
});

const iconTemplate = createComponentTemplate(Icon);

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: iconTemplate.bind({}),
  name: "Overview",

  args: {
    icon: Bolt
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const VibeIcon = {
  render: () => <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />,
  parameters: {
    docs: {
      liveEdit: {
        scope: { Bolt }
      }
    }
  }
};

export const FontIcon = {
  render: () => <Icon iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
};

export const CustomSvg = {
  render: () => (
    <Icon
      iconType="src"
      icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
      iconLabel="my src awesome icon"
      useCurrentColor
    />
  )
};

export const Color = {
  render: () => (
    <div
      style={{
        color: "var(--sb-color-sofia_pink)"
      }}
    >
      <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
    </div>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { Bolt }
      }
    }
  }
};

export const IconsListStory = {
  render: () => {
    interface IconMeta {
      name: string;
      tags: string;
      file: string;
    }
    const [query, setQuery] = useState("");
    return (
      <section style={{ width: "100%" }}>
        <Search value={query} onChange={setQuery} placeholder="Search for icons" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "var(--sb-spacing-large)",
            marginTop: "var(--sb-spacing-large)"
          }}
        >
          {iconsMetaData
            .filter((icon: IconMeta) => {
              return `${icon.tags},${icon.name}`.toLowerCase().includes(query.toLowerCase());
            })
            .map((icon: IconMeta) => {
              const fileName = icon.file.split(".")[0] as string;
              const Component = allIcons[fileName as keyof typeof allIcons] as SubIcon;
              return (
                <>
                  <Flex style={{ color: "var(--sb-icon-color)" }} gap="small">
                    <Icon icon={Component} iconSize={26} />
                    <span>{icon.name}</span>
                  </Flex>
                </>
              );
            })}
        </div>
      </section>
    );
  }
};
