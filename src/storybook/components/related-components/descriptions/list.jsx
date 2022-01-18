import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
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
      description="Lists is a group of actionable items containing primary and supplemental actions, which are represented by icons and text.
"
    />
  );
};
