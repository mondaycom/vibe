import component from "./plop/component/index.js";
import tests from "./plop/tests/index.js";
import stories from "./plop/stories/index.js";
import hooksStory from "./plop/hooks/index.js";

export default function (plop) {
  plop.setGenerator("Component", component);
  plop.setGenerator("Tests", tests);
  plop.setGenerator("Stories", stories);
  plop.setGenerator("Hooks Story", hooksStory);
}
