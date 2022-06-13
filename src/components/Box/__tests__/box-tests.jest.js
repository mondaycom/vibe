import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Box from "../Box";
import styles from "../Box.module.scss";

const renderComponent = props => {
  return render(<Box {...props} />);
};

describe("Box tests", () => {
  afterEach(() => {
    cleanup();
  });

  // opacity prop
  it("Should do disabled", () => {
    const { container } = render(<Box disabled></Box>);

    const element = container.getElementsByClassName(styles.opacityDisabled);

    expect(element.length).toBe(1);
  });

  // border prop
  it("Should do border NONE", () => {
    const { container } = render(<Box border={Box.borders.NONE}></Box>);

    const element = container.getElementsByClassName(styles.border0);

    expect(element.length).toBe(1);
  });

  it("Should do border DEFAULT", () => {
    const { container } = render(<Box border={Box.borders.DEFAULT}></Box>);

    const element = container.getElementsByClassName(styles.border);

    expect(element.length).toBe(1);
  });

  // borderTop prop
  it("Should do borderTop NONE", () => {
    const { container } = render(<Box borderTop={Box.borderTops.NONE}></Box>);

    const element = container.getElementsByClassName(styles.borderTop0);

    expect(element.length).toBe(1);
  });

  it("Should do borderTop DEFAULT", () => {
    const { container } = render(<Box borderTop={Box.borderTops.DEFAULT}></Box>);

    const element = container.getElementsByClassName(styles.borderTop);

    expect(element.length).toBe(1);
  });

  // borderEnd prop
  it("Should do borderEnd NONE", () => {
    const { container } = render(<Box borderEnd={Box.borderEnds.NONE}></Box>);

    const element = container.getElementsByClassName(styles.borderEnd0);

    expect(element.length).toBe(1);
  });

  it("Should do borderEnd DEFAULT", () => {
    const { container } = render(<Box borderEnd={Box.borderEnds.DEFAULT}></Box>);

    const element = container.getElementsByClassName(styles.borderEnd);

    expect(element.length).toBe(1);
  });

  // borderBottom prop
  it("Should do borderBottom NONE", () => {
    const { container } = render(<Box borderBottom={Box.borderBottoms.NONE}></Box>);

    const element = container.getElementsByClassName(styles.borderBottom0);

    expect(element.length).toBe(1);
  });

  it("Should do borderBottom DEFAULT", () => {
    const { container } = render(<Box borderBottom={Box.borderBottoms.DEFAULT}></Box>);

    const element = container.getElementsByClassName(styles.borderBottom);

    expect(element.length).toBe(1);
  });

  // borderStart prop
  it("Should do borderStart NONE", () => {
    const { container } = render(<Box borderStart={Box.borderStarts.NONE}></Box>);

    const element = container.getElementsByClassName(styles.borderStart0);

    expect(element.length).toBe(1);
  });

  it("Should do borderStart DEFAULT", () => {
    const { container } = render(<Box borderStart={Box.borderStarts.DEFAULT}></Box>);

    const element = container.getElementsByClassName(styles.borderStart);

    expect(element.length).toBe(1);
  });

  // borderColor prop
  it("Should do border color UI_BORDER_COLORE", () => {
    const { container } = render(<Box borderColor={Box.borderColors.UI_BORDER_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.borderColorUiBorderColor);

    expect(element.length).toBe(1);
  });

  it("Should do rounded LAYOUT_BORDER_COLOR", () => {
    const { container } = render(<Box borderColor={Box.borderColors.LAYOUT_BORDER_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.borderColorLayoutBorderColor);

    expect(element.length).toBe(1);
  });

  // rounded prop
  it("Should do rounded NONE", () => {
    const { container } = render(<Box rounded={Box.roundeds.NONE}></Box>);

    const element = container.getElementsByClassName(styles.rounded0);

    expect(element.length).toBe(1);
  });

  it("Should do rounded SMALL", () => {
    const { container } = render(<Box rounded={Box.roundeds.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.roundedSmall);

    expect(element.length).toBe(1);
  });

  it("Should do rounded MEDIUM", () => {
    const { container } = render(<Box rounded={Box.roundeds.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.roundedMedium);

    expect(element.length).toBe(1);
  });

  it("Should do rounded BIG", () => {
    const { container } = render(<Box rounded={Box.roundeds.BIG}></Box>);

    const element = container.getElementsByClassName(styles.roundedBig);

    expect(element.length).toBe(1);
  });

  // roundedTop prop
  it("Should do rounded Top NONE", () => {
    const { container } = render(<Box roundedTop={Box.roundedTops.NONE}></Box>);

    const element = container.getElementsByClassName(styles.roundedTop0);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Top SMALL", () => {
    const { container } = render(<Box roundedTop={Box.roundedTops.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.roundedTopSmall);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Top MEDIUM", () => {
    const { container } = render(<Box roundedTop={Box.roundedTops.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.roundedTopMedium);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Top BIG", () => {
    const { container } = render(<Box roundedTop={Box.roundedTops.BIG}></Box>);

    const element = container.getElementsByClassName(styles.roundedTopBig);

    expect(element.length).toBe(1);
  });

  // roundedBottom prop
  it("Should do rounded End NONE", () => {
    const { container } = render(<Box roundedEnd={Box.roundedEnds.NONE}></Box>);

    const element = container.getElementsByClassName(styles.roundedEnd0);

    expect(element.length).toBe(1);
  });

  it("Should do rounded End SMALL", () => {
    const { container } = render(<Box roundedEnd={Box.roundedEnds.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.roundedEndSmall);

    expect(element.length).toBe(1);
  });

  it("Should do rounded End MEDIUM", () => {
    const { container } = render(<Box roundedEnd={Box.roundedEnds.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.roundedEndMedium);

    expect(element.length).toBe(1);
  });

  it("Should do rounded End BIG", () => {
    const { container } = render(<Box roundedEnd={Box.roundedEnds.BIG}></Box>);

    const element = container.getElementsByClassName(styles.roundedEndBig);

    expect(element.length).toBe(1);
  });

  // roundedBottom prop
  it("Should do rounded Bottom NONE", () => {
    const { container } = render(<Box roundedBottom={Box.roundedBottoms.NONE}></Box>);

    const element = container.getElementsByClassName(styles.roundedBottom0);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Bottom SMALL", () => {
    const { container } = render(<Box roundedBottom={Box.roundedBottoms.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.roundedBottomSmall);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Bottom MEDIUM", () => {
    const { container } = render(<Box roundedBottom={Box.roundedBottoms.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.roundedBottomMedium);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Bottom BIG", () => {
    const { container } = render(<Box roundedBottom={Box.roundedBottoms.BIG}></Box>);

    const element = container.getElementsByClassName(styles.roundedBottomBig);

    expect(element.length).toBe(1);
  });

  // roundedStart prop
  it("Should do rounded Start NONE", () => {
    const { container } = render(<Box roundedStart={Box.roundedStarts.NONE}></Box>);

    const element = container.getElementsByClassName(styles.roundedStart0);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Start SMALL", () => {
    const { container } = render(<Box roundedStart={Box.roundedStarts.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.roundedStartSmall);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Start MEDIUM", () => {
    const { container } = render(<Box roundedStart={Box.roundedStarts.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.roundedStartMedium);

    expect(element.length).toBe(1);
  });

  it("Should do rounded Start BIG", () => {
    const { container } = render(<Box roundedStart={Box.roundedStarts.BIG}></Box>);

    const element = container.getElementsByClassName(styles.roundedStartBig);

    expect(element.length).toBe(1);
  });

  // shadow prop
  it("Should do shadow XS", () => {
    const { container } = render(<Box shadow={Box.shadows.XS}></Box>);

    const element = container.getElementsByClassName(styles.shadowXs);

    expect(element.length).toBe(1);
  });

  it("Should do shadow SMALL", () => {
    const { container } = render(<Box shadow={Box.shadows.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.shadowSmall);

    expect(element.length).toBe(1);
  });

  it("Should do shadow MEDIUM", () => {
    const { container } = render(<Box shadow={Box.shadows.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.shadowMedium);

    expect(element.length).toBe(1);
  });

  it("Should do shadow LARGE", () => {
    const { container } = render(<Box shadow={Box.shadows.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.shadowLarge);

    expect(element.length).toBe(1);
  });

  // margin prop
  it("Should do margin NONE", () => {
    const { container } = render(<Box margin={Box.margins.NONE}></Box>);

    const element = container.getElementsByClassName(styles.m0);

    expect(element.length).toBe(1);
  });

  it("Should do margin XS", () => {
    const { container } = render(<Box margin={Box.margins.XS}></Box>);

    const element = container.getElementsByClassName(styles.mXs);

    expect(element.length).toBe(1);
  });

  it("Should do margin SMALL", () => {
    const { container } = render(<Box margin={Box.margins.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.mSmall);

    expect(element.length).toBe(1);
  });

  it("Should do margin MEDIUM", () => {
    const { container } = render(<Box margin={Box.margins.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.mMedium);

    expect(element.length).toBe(1);
  });

  it("Should do margin LARGE", () => {
    const { container } = render(<Box margin={Box.margins.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.mLarge);

    expect(element.length).toBe(1);
  });

  it("Should do margin XL", () => {
    const { container } = render(<Box margin={Box.margins.XL}></Box>);

    const element = container.getElementsByClassName(styles.mXl);

    expect(element.length).toBe(1);
  });

  it("Should do margin XXL", () => {
    const { container } = render(<Box margin={Box.margins.XXL}></Box>);

    const element = container.getElementsByClassName(styles.mXxl);

    expect(element.length).toBe(1);
  });

  it("Should do margin XXXL", () => {
    const { container } = render(<Box margin={Box.margins.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.mXxxl);

    expect(element.length).toBe(1);
  });

  // marginX prop
  it("Should do marginX NONE", () => {
    const { container } = render(<Box marginX={Box.marginXs.NONE}></Box>);

    const element = container.getElementsByClassName(styles.mx0);

    expect(element.length).toBe(1);
  });

  it("Should do marginX XS", () => {
    const { container } = render(<Box marginX={Box.marginXs.XS}></Box>);

    const element = container.getElementsByClassName(styles.mxXs);

    expect(element.length).toBe(1);
  });

  it("Should do marginX SMALL", () => {
    const { container } = render(<Box marginX={Box.marginXs.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.mxSmall);

    expect(element.length).toBe(1);
  });

  it("Should do marginX MEDIUM", () => {
    const { container } = render(<Box marginX={Box.marginXs.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.mxMedium);

    expect(element.length).toBe(1);
  });

  it("Should do marginX LARGE", () => {
    const { container } = render(<Box marginX={Box.marginXs.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.mxLarge);

    expect(element.length).toBe(1);
  });

  it("Should do marginX XL", () => {
    const { container } = render(<Box marginX={Box.marginXs.XL}></Box>);

    const element = container.getElementsByClassName(styles.mxXl);

    expect(element.length).toBe(1);
  });

  it("Should do marginX XXL", () => {
    const { container } = render(<Box marginX={Box.marginXs.XXL}></Box>);

    const element = container.getElementsByClassName(styles.mxXxl);

    expect(element.length).toBe(1);
  });

  it("Should do marginX XXXL", () => {
    const { container } = render(<Box marginX={Box.marginXs.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.mxXxxl);

    expect(element.length).toBe(1);
  });

  // marginY prop
  it("Should do marginY NONE", () => {
    const { container } = render(<Box marginY={Box.marginYs.NONE}></Box>);

    const element = container.getElementsByClassName(styles.my0);

    expect(element.length).toBe(1);
  });

  it("Should do marginY XS", () => {
    const { container } = render(<Box marginY={Box.marginYs.XS}></Box>);

    const element = container.getElementsByClassName(styles.myXs);

    expect(element.length).toBe(1);
  });

  it("Should do marginY SMALL", () => {
    const { container } = render(<Box marginY={Box.marginYs.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.mySmall);

    expect(element.length).toBe(1);
  });

  it("Should do marginY MEDIUM", () => {
    const { container } = render(<Box marginY={Box.marginYs.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.myMedium);

    expect(element.length).toBe(1);
  });

  it("Should do marginY LARGE", () => {
    const { container } = render(<Box marginY={Box.marginYs.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.myLarge);

    expect(element.length).toBe(1);
  });

  it("Should do marginY XL", () => {
    const { container } = render(<Box marginY={Box.marginYs.XL}></Box>);

    const element = container.getElementsByClassName(styles.myXl);

    expect(element.length).toBe(1);
  });

  it("Should do marginY XXL", () => {
    const { container } = render(<Box marginY={Box.marginYs.XXL}></Box>);

    const element = container.getElementsByClassName(styles.myXxl);

    expect(element.length).toBe(1);
  });

  it("Should do marginY XXXL", () => {
    const { container } = render(<Box marginY={Box.marginYs.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.myXxxl);

    expect(element.length).toBe(1);
  });

  // marginTop prop
  it("Should do marginTop NONE", () => {
    const { container } = render(<Box marginTop={Box.marginTops.NONE}></Box>);

    const element = container.getElementsByClassName(styles.mt0);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop XS", () => {
    const { container } = render(<Box marginTop={Box.marginTops.XS}></Box>);

    const element = container.getElementsByClassName(styles.mtXs);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop SMALL", () => {
    const { container } = render(<Box marginTop={Box.marginTops.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.mtSmall);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop MEDIUM", () => {
    const { container } = render(<Box marginTop={Box.marginTops.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.mtMedium);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop LARGE", () => {
    const { container } = render(<Box marginTop={Box.marginTops.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.mtLarge);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop XL", () => {
    const { container } = render(<Box marginTop={Box.marginTops.XL}></Box>);

    const element = container.getElementsByClassName(styles.mtXl);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop XXL", () => {
    const { container } = render(<Box marginTop={Box.marginTops.XXL}></Box>);

    const element = container.getElementsByClassName(styles.mtXxl);

    expect(element.length).toBe(1);
  });

  it("Should do marginTop XXXL", () => {
    const { container } = render(<Box marginTop={Box.marginTops.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.mtXxxl);

    expect(element.length).toBe(1);
  });

  // marginEnd prop
  it("Should do marginEnd NONE", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.NONE}></Box>);

    const element = container.getElementsByClassName(styles.me0);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd XS", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.XS}></Box>);

    const element = container.getElementsByClassName(styles.meXs);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd SMALL", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.meSmall);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd MEDIUM", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.meMedium);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd LARGE", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.meLarge);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd XL", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.XL}></Box>);

    const element = container.getElementsByClassName(styles.meXl);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd XXL", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.XXL}></Box>);

    const element = container.getElementsByClassName(styles.meXxl);

    expect(element.length).toBe(1);
  });

  it("Should do marginEnd XXXL", () => {
    const { container } = render(<Box marginEnd={Box.marginEnds.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.meXxxl);

    expect(element.length).toBe(1);
  });

  // marginStart prop
  it("Should do marginStart NONE", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.NONE}></Box>);

    const element = container.getElementsByClassName(styles.ms0);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart XS", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.XS}></Box>);

    const element = container.getElementsByClassName(styles.msXs);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart SMALL", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.msSmall);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart MEDIUM", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.msMedium);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart LARGE", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.msLarge);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart XL", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.XL}></Box>);

    const element = container.getElementsByClassName(styles.msXl);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart XXL", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.XXL}></Box>);

    const element = container.getElementsByClassName(styles.msXxl);

    expect(element.length).toBe(1);
  });

  it("Should do marginStart XXXL", () => {
    const { container } = render(<Box marginStart={Box.marginStarts.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.msXxxl);

    expect(element.length).toBe(1);
  });

  // padding prop
  it("Should do padding NONE", () => {
    const { container } = render(<Box padding={Box.paddings.NONE}></Box>);

    const element = container.getElementsByClassName(styles.p0);

    expect(element.length).toBe(1);
  });

  it("Should do padding XS", () => {
    const { container } = render(<Box padding={Box.paddings.XS}></Box>);

    const element = container.getElementsByClassName(styles.pXs);

    expect(element.length).toBe(1);
  });

  it("Should do padding SMALL", () => {
    const { container } = render(<Box padding={Box.paddings.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.pSmall);

    expect(element.length).toBe(1);
  });

  it("Should do padding MEDIUM", () => {
    const { container } = render(<Box padding={Box.paddings.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.pMedium);

    expect(element.length).toBe(1);
  });

  it("Should do padding LARGE", () => {
    const { container } = render(<Box padding={Box.paddings.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.pLarge);

    expect(element.length).toBe(1);
  });

  it("Should do padding XL", () => {
    const { container } = render(<Box padding={Box.paddings.XL}></Box>);

    const element = container.getElementsByClassName(styles.pXl);

    expect(element.length).toBe(1);
  });

  it("Should do padding XXL", () => {
    const { container } = render(<Box padding={Box.paddings.XXL}></Box>);

    const element = container.getElementsByClassName(styles.pXxl);

    expect(element.length).toBe(1);
  });

  it("Should do padding XXXL", () => {
    const { container } = render(<Box padding={Box.paddings.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.pXxxl);

    expect(element.length).toBe(1);
  });

  // paddingX prop
  it("Should do paddingX NONE", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.NONE}></Box>);

    const element = container.getElementsByClassName(styles.px0);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX XS", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.XS}></Box>);

    const element = container.getElementsByClassName(styles.pxXs);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX SMALL", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.pxSmall);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX MEDIUM", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.pxMedium);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX LARGE", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.pxLarge);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX XL", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.XL}></Box>);

    const element = container.getElementsByClassName(styles.pxXl);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX XXL", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.XXL}></Box>);

    const element = container.getElementsByClassName(styles.pxXxl);

    expect(element.length).toBe(1);
  });

  it("Should do paddingX XXXL", () => {
    const { container } = render(<Box paddingX={Box.paddingXs.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.pxXxxl);

    expect(element.length).toBe(1);
  });

  // paddingY prop
  it("Should do paddingY NONE", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.NONE}></Box>);

    const element = container.getElementsByClassName(styles.py0);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY XS", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.XS}></Box>);

    const element = container.getElementsByClassName(styles.pyXs);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY SMALL", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.pySmall);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY MEDIUM", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.pyMedium);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY LARGE", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.pyLarge);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY XL", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.XL}></Box>);

    const element = container.getElementsByClassName(styles.pyXl);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY XXL", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.XXL}></Box>);

    const element = container.getElementsByClassName(styles.pyXxl);

    expect(element.length).toBe(1);
  });

  it("Should do paddingY XXXL", () => {
    const { container } = render(<Box paddingY={Box.paddingYs.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.pyXxxl);

    expect(element.length).toBe(1);
  });

  // paddingTop prop
  it("Should do padding top NONE", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.NONE}></Box>);

    const element = container.getElementsByClassName(styles.pt0);

    expect(element.length).toBe(1);
  });

  it("Should do padding top XS", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.XS}></Box>);

    const element = container.getElementsByClassName(styles.ptXs);

    expect(element.length).toBe(1);
  });

  it("Should do padding top SMALL", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.ptSmall);

    expect(element.length).toBe(1);
  });

  it("Should do padding top MEDIUM", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.ptMedium);

    expect(element.length).toBe(1);
  });

  it("Should do padding top LARGE", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.ptLarge);

    expect(element.length).toBe(1);
  });

  it("Should do padding top XL", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.XL}></Box>);

    const element = container.getElementsByClassName(styles.ptXl);

    expect(element.length).toBe(1);
  });

  it("Should do padding top XXL", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.XXL}></Box>);

    const element = container.getElementsByClassName(styles.ptXxl);

    expect(element.length).toBe(1);
  });

  it("Should do padding top XXXL", () => {
    const { container } = render(<Box paddingTop={Box.paddingTops.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.ptXxxl);

    expect(element.length).toBe(1);
  });

  // paddingEnd prop
  it("Should do padding end NONE", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.NONE}></Box>);

    const element = container.getElementsByClassName(styles.pe0);

    expect(element.length).toBe(1);
  });

  it("Should do padding end XS", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.XS}></Box>);

    const element = container.getElementsByClassName(styles.peXs);

    expect(element.length).toBe(1);
  });

  it("Should do padding end SMALL", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.peSmall);

    expect(element.length).toBe(1);
  });

  it("Should do padding end MEDIUM", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.peMedium);

    expect(element.length).toBe(1);
  });

  it("Should do padding end LARGE", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.peLarge);

    expect(element.length).toBe(1);
  });

  it("Should do padding end XL", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.XL}></Box>);

    const element = container.getElementsByClassName(styles.peXl);

    expect(element.length).toBe(1);
  });

  it("Should do padding end XXL", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.XXL}></Box>);

    const element = container.getElementsByClassName(styles.peXxl);

    expect(element.length).toBe(1);
  });

  it("Should do padding end XXXL", () => {
    const { container } = render(<Box paddingEnd={Box.paddingEnds.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.peXxxl);

    expect(element.length).toBe(1);
  });

  // paddingBottom prop
  it("Should do padding bottom NONE", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.NONE}></Box>);

    const element = container.getElementsByClassName(styles.pb0);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom XS", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.XS}></Box>);

    const element = container.getElementsByClassName(styles.pbXs);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom SMALL", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.pbSmall);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom MEDIUM", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.pbMedium);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom LARGE", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.pbLarge);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom XL", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.XL}></Box>);

    const element = container.getElementsByClassName(styles.pbXl);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom XXL", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.XXL}></Box>);

    const element = container.getElementsByClassName(styles.pbXxl);

    expect(element.length).toBe(1);
  });

  it("Should do padding bottom XXXL", () => {
    const { container } = render(<Box paddingBottom={Box.paddingBottoms.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.pbXxxl);

    expect(element.length).toBe(1);
  });

  // paddingStart prop
  it("Should do padding start NONE", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.NONE}></Box>);

    const element = container.getElementsByClassName(styles.ps0);

    expect(element.length).toBe(1);
  });

  it("Should do padding start XS", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.XS}></Box>);

    const element = container.getElementsByClassName(styles.psXs);

    expect(element.length).toBe(1);
  });

  it("Should do padding start SMALL", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.SMALL}></Box>);

    const element = container.getElementsByClassName(styles.psSmall);

    expect(element.length).toBe(1);
  });

  it("Should do padding start MEDIUM", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.MEDIUM}></Box>);

    const element = container.getElementsByClassName(styles.psMedium);

    expect(element.length).toBe(1);
  });

  it("Should do padding start LARGE", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.LARGE}></Box>);

    const element = container.getElementsByClassName(styles.psLarge);

    expect(element.length).toBe(1);
  });

  it("Should do padding start XL", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.XL}></Box>);

    const element = container.getElementsByClassName(styles.psXl);

    expect(element.length).toBe(1);
  });

  it("Should do padding start XXL", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.XXL}></Box>);

    const element = container.getElementsByClassName(styles.psXxl);

    expect(element.length).toBe(1);
  });

  it("Should do padding start XXXL", () => {
    const { container } = render(<Box paddingStart={Box.paddingStarts.XXXL}></Box>);

    const element = container.getElementsByClassName(styles.psXxxl);

    expect(element.length).toBe(1);
  });

  // backgroundColor prop
  it("Should do background PRIMARY_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgPrimaryBackgroundColor);

    expect(element.length).toBe(1);
  });

  it("Should do background PRIMARY_HOVER_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.PRIMARY_HOVER_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgPrimaryBackgroundHoverColor);

    expect(element.length).toBe(1);
  });

  it("Should do background SECONDARY_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgSecondaryBackgroundColor);

    expect(element.length).toBe(1);
  });

  it("Should do background GREY_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.GREY_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgGreyBackgroundColor);

    expect(element.length).toBe(1);
  });

  it("Should do background ALL_GREY_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgAllgreyBackgroundColor);

    expect(element.length).toBe(1);
  });

  it("Should do background INVERTED_COLOR_BACKGROUND", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}></Box>);

    const element = container.getElementsByClassName(styles.bgInvertedColorBackground);

    expect(element.length).toBe(1);
  });

  it("Should do background DISABLED_BACKGROUND_COLOR", () => {
    const { container } = render(<Box backgroundColor={Box.backgroundColors.DISABLED_BACKGROUND_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.bgDisabledBackgroundColor);

    expect(element.length).toBe(1);
  });

  // text prop
  it("Should do text PRIMARY_COLOR", () => {
    const { container } = render(<Box text={Box.texts.PRIMARY_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPrimaryColor);

    expect(element.length).toBe(1);
  });

  it("Should do text PRIMARY_HOVER_COLOR", () => {
    const { container } = render(<Box text={Box.texts.PRIMARY_HOVER_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPrimaryHoverColor);

    expect(element.length).toBe(1);
  });

  it("Should do text PRIMARY_SELECTED_COLOR", () => {
    const { container } = render(<Box text={Box.texts.PRIMARY_SELECTED_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPrimarySelectedColor);

    expect(element.length).toBe(1);
  });

  it("Should do text PRIMARY_TEXT_COLOR", () => {
    const { container } = render(<Box text={Box.texts.PRIMARY_TEXT_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPrimaryTextColor);

    expect(element.length).toBe(1);
  });

  it("Should do text TEXT_COLOR_ON_PRIMARY", () => {
    const { container } = render(<Box text={Box.texts.PRIMARY_TEXT_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPrimaryTextColor);

    expect(element.length).toBe(1);
  });

  it("Should do text TEXT_COLOR_ON_INVERTED", () => {
    const { container } = render(<Box text={Box.texts.TEXT_COLOR_ON_INVERTED}></Box>);

    const element = container.getElementsByClassName(styles.textTextColorOnInverted);

    expect(element.length).toBe(1);
  });

  it("Should do text SECONDARY_TEXT_COLOR", () => {
    const { container } = render(<Box text={Box.texts.SECONDARY_TEXT_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textSecondaryTextColor);

    expect(element.length).toBe(1);
  });

  it("Should do text PLACEHOLDER_COLOR", () => {
    const { container } = render(<Box text={Box.texts.PLACEHOLDER_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textPlaceholderColor);

    expect(element.length).toBe(1);
  });

  it("Should do text ICON_COLOR", () => {
    const { container } = render(<Box text={Box.texts.ICON_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textIconColor);

    expect(element.length).toBe(1);
  });

  it("Should do text LINK_COLOR", () => {
    const { container } = render(<Box text={Box.texts.LINK_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textLinkColor);

    expect(element.length).toBe(1);
  });

  it("Should do text  DISABLED_TEXT_COLOR", () => {
    const { container } = render(<Box text={Box.texts.DISABLED_TEXT_COLOR}></Box>);

    const element = container.getElementsByClassName(styles.textDisabledTextColor);

    expect(element.length).toBe(1);
  });
});
