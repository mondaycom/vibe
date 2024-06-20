import { API, Collection, FileInfo, JSCodeshift } from "jscodeshift";

export default function setup(api: API, fileInfo: FileInfo): [JSCodeshift, Collection] {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  return [j, root];
}
