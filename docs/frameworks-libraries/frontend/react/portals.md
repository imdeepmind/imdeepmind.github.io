---
sidebar_position: 14
---

# Portals

In web development, **portals** are a feature that allows developers to render a piece of React component or HTML content into a **DOM node that exists outside the current hierarchy** of the parent component. Portals are particularly useful when UI components need to break out of the DOM tree for styling or functionality reasons while maintaining a logical connection with their parent React component.

Portals are an advanced feature in React but are conceptually straightforward and provide a powerful solution for UI challenges such as **modals**, **tooltips**, **dialogs**, or **dropdowns**.

## What Are Portals?

A **Portal** is a feature provided by React (introduced in **React 16**) that allows components or elements to be rendered into a different DOM subtree than their parent component, all while maintaining React's virtual DOM reconciliation.

In simple terms, instead of rendering into its parent DOM node, a portal renders into a specified DOM node elsewhere in the DOM tree.

## Why Use Portals?

Portals are useful in situations where the DOM structure limits your ability to implement features correctly. For example:

1. **Avoiding Z-Index and Overflow Issues**

   - Components like modals or tooltips may be constrained by their parent’s **`z-index`** or **`overflow`** CSS rules. Portals allow such components to "escape" these constraints and render at the top level of the DOM.

2. **Global Positioning**:

   - Certain UI components like dropdowns or floating menus require positioning relative to the viewport or an ancestor element, which may not work correctly if constrained within the parent’s DOM tree.

3. **Preserving Accessibility**:
   - By rendering content at the appropriate place in the DOM, you can ensure better accessibility for screen readers and assistive technologies.

## How Do Portals Work?

Portals work by providing a way to "teleport" React components or content to a specific DOM node using the `ReactDOM.createPortal()` API.

### Syntax

```jsx
ReactDOM.createPortal(child, container);
```

- **`child`**: The React component or element to render.
- **`container`**: The DOM node into which the child is rendered.

## Usage of Portals

### Basic Example

```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Parent Component</h1>
      <PortalExample />
    </div>
  );
}

function PortalExample() {
  return ReactDOM.createPortal(
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      This is rendered using a portal!
    </div>,
    document.getElementById("portal-root") // Target DOM node
  );
}

export default App;
```

### Explanation

In the example above:

- The `PortalExample` component renders its content (`<div>`) into a DOM node with the ID `portal-root`, even though it is logically a child of the `App` component.
- This breaks the DOM hierarchy for rendering purposes but still maintains React's event propagation and reconciliation.

## Real-World Use Cases of Portals

1. **Modals or Dialogs**:

   - Modals are often rendered at the root of the DOM tree to avoid being constrained by their parent's styles or layout.

   ```jsx
   function Modal({ children }) {
     return ReactDOM.createPortal(
       <div className="modal">{children}</div>,
       document.getElementById("modal-root")
     );
   }
   ```

2. **Tooltips**:

   - Tooltips need to appear above other elements, and portals allow them to be positioned at the top level of the DOM.

   ```jsx
   function Tooltip({ content, position }) {
     return ReactDOM.createPortal(
       <div style={{ position: "absolute", top: position.y, left: position.x }}>
         {content}
       </div>,
       document.getElementById("tooltip-root")
     );
   }
   ```

3. **Dropdowns**:

   - Dropdown menus can escape the overflow rules of their parent containers using portals.

   ```jsx
   function Dropdown({ children }) {
     return ReactDOM.createPortal(
       <div className="dropdown">{children}</div>,
       document.getElementById("dropdown-root")
     );
   }
   ```

## Event Handling in Portals

One of the key advantages of portals is that **event propagation** works seamlessly, even if the content is rendered outside the parent DOM tree.

### Example

```jsx
function ParentComponent() {
  const handleClick = () => alert("Clicked!");

  return (
    <div onClick={handleClick}>
      <h1>Click anywhere in this area</h1>
      <PortalExample />
    </div>
  );
}

function PortalExample() {
  return ReactDOM.createPortal(
    <button>Click Me!</button>,
    document.getElementById("portal-root")
  );
}
```

- Clicking the button rendered in the portal will still trigger the parent component's `onClick` handler due to React's **event delegation**.

## Limitations of Portals

1. **CSS Challenges**:

   - While portals allow elements to escape the DOM hierarchy, their styles still depend on the parent hierarchy unless styled explicitly.

2. **Testing Complexity**:

   - Testing components that use portals can be challenging because the rendered content exists outside the primary DOM tree.

3. **Context Limitations**:
   - Portals may require additional effort to work seamlessly with React Context or state management libraries, as the rendered content exists outside the typical DOM tree.

## Advantages of Portals

1. **Flexibility**:

   - Portals enable rendering content anywhere in the DOM, independent of the parent component's position in the hierarchy.

2. **Improved Accessibility**:

   - By positioning elements directly in the appropriate place in the DOM, portals enhance compatibility with screen readers and assistive tools.

3. **Performance**:
   - Portals allow components to avoid unnecessary reflows or repaints caused by constraints within the DOM tree.

## Advanced Example: Nested Portals

Portals can also be nested, with one portal rendering into another. This can be useful for complex UI elements like modals with tooltips inside.

```jsx
function App() {
  return (
    <div>
      <Modal>
        <Tooltip content="I'm inside a modal!">
          Hover me to see a tooltip
        </Tooltip>
      </Modal>
    </div>
  );
}

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}

function Tooltip({ content, children }) {
  return ReactDOM.createPortal(
    <div className="tooltip">{content}</div>,
    document.getElementById("tooltip-root")
  );
}
```

## Portals in Popular Libraries

1. **React Modal Libraries**:

   - Libraries like **React Modal**, **Material-UI**, and **React Bootstrap** use portals to implement modals, dialogs, and popups efficiently.

2. **Drag-and-Drop Libraries**:

   - Libraries like **react-dnd** and **react-beautiful-dnd** leverage portals to handle draggable elements that need to escape their DOM hierarchy.

3. **Visualization Libraries**:
   - Portals are often used in charting or visualization libraries to render tooltips and overlays outside the primary DOM tree.
