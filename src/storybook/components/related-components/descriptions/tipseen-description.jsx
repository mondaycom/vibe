import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Tipseen from "../../../../components/Tipseen/Tipseen";
import TipseenWizard from "../../../../components/Tipseen/TipseenWizard";

export const TipseenDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "95%",
      margin: "0 -10px",
      display: "flex",
      alignItems: "flex-start"
    };
    const content = [
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>,
      <div>Popover message will appear here loremipsum dolor samet…</div>
    ];
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: []
        }
      }
    ];
    return (
      <div style={style}>
        <Tipseen
          modifiers={modifiers}
          width={280}
          position={Tipseen.positions.RIGHT}
          content={<TipseenWizard title="This is a title" steps={content} activeStepIndex={2} />}
        >
          <div />
        </Tipseen>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Tipseen"
      description="Displays information related to an element over it."
    />
  );
};
