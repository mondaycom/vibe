import { ArgTypes, PartialStoryFn, StoryContext } from '@storybook/types';

export type EnumPropNames = {
  propName: string;
  enumName: string;
};

export type ActionProps = {
  name: string;
  linkedToPropValue: string;
};

export type IconMetaData = {
  file: string;
  name: string;
};

export type AllowedIcons = {
  options: string[];
  mapping: { [key: string]: unknown };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Decorator = (story: PartialStoryFn<any>, context: StoryContext<any>) => { storyResult: any };

export type StoryMetaSettingsArgs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  enumPropNamesArray?: Array<string | EnumPropNames>;
  iconPropNamesArray?: string[];
  actionPropsArray?: Array<string | ActionProps>;
  allIconsComponents: { [key: string]: unknown };
  iconsMetaData?: IconMetaData[];
  ignoreControlsPropNamesArray?: string[];
};

export type StoryMetaSettingsResult = {
  argTypes: Partial<ArgTypes>;
  decorators: Decorator[];
};
