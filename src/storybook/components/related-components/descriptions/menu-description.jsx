import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import DialogContentContainer from "../../../../components/DialogContentContainer/DialogContentContainer";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import { Email, Delete, Info } from "../../../../components/Icon/Icons";

export const MenuDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "222px"
    };
    return (
      <div style={style}>
        <DialogContentContainer>
          <MenuItem title="Send" icon={Email} />
          <MenuItem title="Delete" icon={Delete} />
          <MenuItem title="More info" icon={Info} />
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
