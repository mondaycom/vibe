import { GridCol, GridContainer, GridRow } from "../Grid";

const meta = {
  title: "Layout/Grid",
  component: GridContainer
};

export default meta;

export const JustifyContent = {
  render: () => {
    return (
      <GridContainer>
        <GridRow>
          <GridCol xs={4} md={2}>
            Col A
          </GridCol>
          <GridCol xs={4} md={6}>
            Col B
          </GridCol>
        </GridRow>
      </GridContainer>
    );
  },

  name: "justifyContent"
};
