import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Tipseen from "../../../../components/Tipseen/Tipseen";
import TipseenWizard from "../../../../components/Tipseen/TipseenWizard";

export const TipseenDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "1%",
      margin: "0 -10px "
    };
    const spacingStyle = {
      width: "300px"
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
          mainAxis: false // true by default
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: [] // true by default
        }
      }
    ];
    return (
      <>
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
        <div style={spacingStyle} />
      </>
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
