import { useMemo } from "react";
import { colorsHashMap } from "../../../../general-stories/colors/colors-vars-map";
import { ColorsDescription } from "../../../components";

const colorKeys = new Set(["ui-border-color", "layout-border-color"]);

export const BorderColors = () => <ColorsDescription colorNames={colorKeys} />;
