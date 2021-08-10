export function isInsideClass(domElement, classOrClassesName) {
  if (!classOrClassesName) return false;
  let selector;

  if (Array.isArray(classOrClassesName)) {
    selector = classOrClassesName.map(c => `.${c}`).join(",");
  } else {
    selector = `.${classOrClassesName}`;
  }

  return !!domElement.parentElement.closest(selector);
}
