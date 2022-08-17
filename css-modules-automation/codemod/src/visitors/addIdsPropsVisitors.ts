import { State } from "../index";
import { Visitor } from "@babel/core";
import * as t from "@babel/types";
import { printWithCondition } from "../utils/commonProcess/print";
import { forEach } from "lodash";
import { isComponentPropsObjectPattern } from "../utils/logical/isComponentPropsObjectPattern";

// 13: Adds id and data-testId props if needed
export const addIdsPropsVisitors: Visitor<State> = {
  ObjectPattern: path => {
    printWithCondition(false, "<<< addDataTestIdPropsVisitors, path.parent", path.parent);
    printWithCondition(false, "<<< addDataTestIdPropsVisitors, path.parent.parent", path.parentPath.parent);
    if (isComponentPropsObjectPattern(path)) {
      printWithCondition(true, "<<< addDataTestIdPropsVisitors, true");
      const newProperties = [...path.node.properties];
      let idExists = false;
      let dataTestIdExists = false;
      forEach(path.node.properties, p => {
        if (t.isObjectProperty(p) && t.isIdentifier(p.key) && p.key.name === "id") {
          idExists = true;
        }
        if (
          t.isObjectProperty(p) &&
          ((t.isIdentifier(p.key) && p.key.name === "dataTestId") ||
            (t.isStringLiteral(p.key) && p.key.value === "data-testid"))
        ) {
          dataTestIdExists = true;
        }
      });
      printWithCondition(false, "<<< addDataTestIdPropsVisitors, idExists", idExists);
      printWithCondition(false, "<<< addDataTestIdPropsVisitors, dataTestIdExists", dataTestIdExists);

      if (!idExists) {
        newProperties.push(t.objectProperty(t.identifier("id"), t.identifier("id"), false, true));
      }

      if (!dataTestIdExists) {
        newProperties.push(t.objectProperty(t.stringLiteral("data-testId"), t.identifier("dataTestId"), false));
      }

      printWithCondition(false, "<<< addDataTestIdPropsVisitors, newProperties", newProperties);

      if (!idExists || !dataTestIdExists) {
        path.replaceWith(t.objectPattern(newProperties));
        path.skip();
      } else {
        path.skip();
      }
    }
  }
};
