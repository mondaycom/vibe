import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbMenu from "../BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenuItem/BreadcrumbMenuItem";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../tests/__tests__/test-utils";
import { Filter, Work, Pin } from "@vibe/icons";

describe("BreadcrumbMenu", () => {
  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer
      .create(
        <BreadcrumbMenu>
          <BreadcrumbMenuItem title="Option 1" />
          <BreadcrumbMenuItem title="Option 2" />
        </BreadcrumbMenu>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom className", () => {
    const tree = renderer
      .create(
        <BreadcrumbMenu className="custom-class">
          <BreadcrumbMenuItem title="Option 1" />
          <BreadcrumbMenuItem title="Option 2" />
        </BreadcrumbMenu>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with various MenuItem props", () => {
    const onClickMock = jest.fn();

    const tree = renderer
      .create(
        <BreadcrumbMenu>
          <BreadcrumbMenuItem title="Filter Items" icon={Filter} onClick={onClickMock} />
          <BreadcrumbMenuItem title="Documentation" icon={Work} link="https://docs.example.com" />
          <BreadcrumbMenuItem
            title="Pin Dashboard"
            icon={Pin}
            onClick={onClickMock}
            link="https://pinned.example.com"
          />
        </BreadcrumbMenu>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
