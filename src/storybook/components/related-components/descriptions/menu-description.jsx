import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import { Email, Delete, Info } from "../../../../components/Icon/Icons";
import { Menu } from "../../../../components";

export const MenuDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <DialogContentContainer>
          <Menu size={Menu.sizes.SMALL}>
            <MenuItem title="Send" icon={Email} />
            <MenuItem title="Delete" icon={Delete} />
            <MenuItem title="More info" icon={Info} />
          </Menu>
        </DialogContentContainer>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Menu"
      description="Displays information related to an element over it."
    />
  );
};
