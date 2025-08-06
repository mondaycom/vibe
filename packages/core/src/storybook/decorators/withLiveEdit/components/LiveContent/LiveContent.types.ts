import { type Decorator, type StoryContext } from "@storybook/react";

export interface LiveContentProps {
  code: string;
  scope: Record<string, unknown>;
  decorators: Decorator[];
  context: StoryContext;
}
