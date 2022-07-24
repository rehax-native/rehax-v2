import { createRenderer } from "solid-js/universal";

// const PROPERTIES = new Set(["className", "textContent"]);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const {
  render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
} = createRenderer({
  createElement(string) {
    switch (string) {
      case "div":
        return new View();
      case "button":
        return new Button();
    }
    // return document.createElement(string);
  },
  createTextNode(value) {
    var textView = new Text();
    textView.setText(value);
    return textView;
    // return document.createTextNode(value);
  },
  replaceText(textView, value) {
    textView.setText(value);
    // textNode.data = value;
  },
  setProperty(node, name, value) {
    const setterName = `set${capitalize(name)}`;
    if (setterName in node) {
      node[setterName](value);
    }
    // if (name === "style") Object.assign(node.style, value);
    // else if (name.startsWith("on")) node[name.toLowerCase()] = value;
    // // else if (PROPERTIES.has(name)) node[name] = value;
    // else node.setAttribute(name, value);
  },
  insertNode(parent, node, anchor) {
    // parent.insertBefore(node, anchor);
    parent.addView(node, anchor);
  },
  isTextNode(node) {
    return node.type === 3;
  },
  removeNode(parent, node) {
    parent.removeChild(node);
  },
  getParentNode(node) {
    return node.parentNode;
  },
  getFirstChild(node) {
    return node.firstChild;
  },
  getNextSibling(node) {
    return node.nextSibling;
  },
});

// Forward Solid control flow
export {
  For,
  Show,
  Suspense,
  SuspenseList,
  Switch,
  Match,
  Index,
  ErrorBoundary,
} from "solid-js";

export function getRootView() {
  return rootView;
}
