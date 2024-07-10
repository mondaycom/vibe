import { Transform } from "jscodeshift";
import { TransformationContext } from "../../types";

export default function wrapTransformation(transform: (context: TransformationContext) => void): Transform {
  return (file, api) => {
    const j = api.jscodeshift;
    const root = j(file.source);
    const filePath = file.path;

    transform({ j, root, filePath });

    return root.toSource();
  };
}
