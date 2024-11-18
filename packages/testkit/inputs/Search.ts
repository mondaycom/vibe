import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";

/**
 * Class representing Search field element.
 * Extends the BaseElement class.
 */
export class Search extends BaseElement {
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }
}
