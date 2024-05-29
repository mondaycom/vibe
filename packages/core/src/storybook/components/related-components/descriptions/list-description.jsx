import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import ListItem from "../../../../components/ListItem/ListItem";
import List from "../../../../components/List/List";

export const ListDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <DialogContentContainer>
          <List>
            <ListItem>List item 1</ListItem>
            <ListItem>List item 2</ListItem>
            <ListItem>List item 3</ListItem>
          </List>
        </DialogContentContainer>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="List"
      href="/?path=/docs/navigation-list-list--docs"
      description="Lists is a group of actionable items containing primary and supplemental actions, which are represented by icons and text."
    />
  );
};
