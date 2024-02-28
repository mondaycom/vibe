import originalSnapshotDiff from "snapshot-diff";

const preDefinedOptions = {
  contextLines: 3,
  stablePatchmarks: true,
  aAnnotation: "Default Render",
  bAnnotation: "Current Render"
};

function defineCustomOptions({ props }) {
  if (props) {
    return {
      bAnnotation: `Current Render: ${JSON.stringify(props)}`
    };
  }
  return {};
}

export function snapshotDiff(valueA, valueB, options = {}) {
  const { props, ...outerOptions } = options;
  const customOptions = defineCustomOptions({ props });
  const finalOptions = { ...preDefinedOptions, ...customOptions, ...outerOptions };
  return originalSnapshotDiff(valueA, valueB, finalOptions);
}
