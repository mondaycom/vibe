import useAfterFirstRender from "..";

export default {
  title: "Hooks/useAfterFirstRender"
};

export const Overview = {
  render: () => {
    const isRendered = useAfterFirstRender();
    return <div className="hooks-reference-element">{isRendered ? "Rendered!" : "Not yet!"}</div>;
  },

  name: "Overview"
};
