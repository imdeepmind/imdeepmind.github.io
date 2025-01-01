---
sidebar_position: 16
---

# React Under the Hood

React is a **JavaScript library** that simplifies the process of building user interfaces by using a declarative, component-based approach. Under the hood, React uses a **Virtual DOM** and a process called **Reconciliation** to efficiently update and render the UI. This internal mechanism is key to React’s performance and usability.

## React: Declarative and Component-Based

### Declarative Approach

React allows developers to define **what the UI should look like** at any given time, and React internally handles the updates to make the UI match the desired state. This eliminates the need for manually updating the DOM.

### Component-Based Architecture

React applications are composed of small, reusable, and isolated **components**, which manage their state and props. These components enable scalable application development by dividing the UI into logical building blocks.

## Virtual DOM: What and Why?

The **Virtual DOM** is a lightweight, in-memory representation of the **real DOM**. It is essentially a JavaScript object that mimics the structure of the DOM but does not directly interact with the browser.

### Key Advantages

- **Efficient Updates**: By updating only the Virtual DOM and synchronizing it with the real DOM, React avoids costly direct DOM manipulations.
- **Performance Boost**: React calculates the minimal set of changes (patches) to update the real DOM efficiently.
- **Cross-Platform**: React can render components to the DOM, mobile platforms (via React Native), and even servers, thanks to its abstraction layer.

## How React Works Internally

React’s internal workflow can be divided into three main phases:

### Render Phase (Virtual DOM Creation)

1. When a React component renders for the first time or updates due to state/prop changes:
   - React calls the component's `render()` method (or the function component) to produce JSX.
   - React converts the JSX into a **Virtual DOM tree**, which is a lightweight representation of the UI.

### Reconciliation Phase (Diffing Algorithm)

2. React compares the new Virtual DOM tree with the previous one (if it exists) using a **Reconciliation Algorithm** to identify the minimal set of changes (also called **diffs**).

### Commit Phase (DOM Updates)

3. The calculated changes (diffs) are batched and applied to the real DOM in an efficient manner to bring it in sync with the updated Virtual DOM.

## Reconciliation Algorithm: Core of React's Efficiency

The **Reconciliation Algorithm** is the process React uses to determine how to update the real DOM when the Virtual DOM changes. It ensures that updates are performed efficiently by minimizing unnecessary DOM manipulations.

### Goals of Reconciliation

- Find changes between the new and old Virtual DOM trees.
- Generate the minimal set of operations to update the real DOM.

### Steps in the Reconciliation Algorithm

1. **Tree Diffing**:

   - React compares the new Virtual DOM tree with the previous one **node by node**.
   - If the root elements are of different types, React assumes the entire subtree has changed and replaces it completely.

   Example:

   ```jsx
   <div>Old</div>  →  <span>New</span>
   ```

   React will destroy the `<div>` and create a new `<span>` instead of reusing the old node.

2. **Component Diffing**:

   - If the root elements are of the same type, React will keep the existing DOM node and compare their attributes, children, and content.
   - For components:
     - React checks if the component type has changed.
     - If the component type is the same, React reuses the component instance and updates its props/state.
     - If the component type is different, React destroys the old instance and creates a new one.

3. **List Diffing**:

   - Lists are optimized using **keys**, which act as unique identifiers for each list item.
   - When React encounters a list, it uses keys to identify which items were added, removed, or reordered.
   - Without keys, React assumes the entire list has changed and re-renders it.

   Example of list with keys:

   ```jsx
   <ul>
     {items.map((item) => (
       <li key={item.id}>{item.name}</li>
     ))}
   </ul>
   ```

### Optimizations in the Reconciliation Algorithm

1. **Shallow Comparison**:

   - React compares elements by their **type** and **key**. If the type or key changes, React assumes the element has changed entirely.
   - If the type is the same, React compares only the attributes and children of the element.

2. **Efficient Tree Updates**:

   - React skips unnecessary re-renders by reusing unchanged components and DOM elements.

3. **Batching Updates**:

   - React groups multiple state updates into a single batch to avoid redundant rendering.

4. **Key Usage for Lists**:
   - By using `key` attributes in lists, React identifies which elements in a list have changed, improving the performance of list updates.

## How React Updates the DOM

### Process

1. React creates the new Virtual DOM based on the updated state or props.
2. It compares the new Virtual DOM tree with the old one using the reconciliation algorithm.
3. React calculates the minimal set of changes (diffs).
4. The changes are applied to the real DOM, avoiding unnecessary re-renders.

### Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- When the button is clicked, React:
  1. Updates the Virtual DOM for `<p>Count: {count}</p>`.
  2. Compares the new Virtual DOM with the old one.
  3. Identifies that only the text inside `<p>` has changed.
  4. Updates only the text node in the real DOM, leaving the rest unchanged.

## Fiber Architecture: Enhancing Reconciliation

React introduced the **Fiber Architecture** to improve performance by splitting rendering work into smaller chunks. This enables React to:

- Interrupt rendering tasks and prioritize more important ones (e.g., user interactions).
- Resume rendering tasks later, ensuring a smooth user experience.

Fiber enhances reconciliation by allowing **incremental rendering** and prioritizing tasks based on urgency.

## Advantages of React’s Reconciliation Algorithm

1. **Performance Optimization**:

   - Updates are batched, and only the minimal set of changes is applied to the DOM.
   - React avoids unnecessary updates by comparing Virtual DOM trees.

2. **Declarative UI**:

   - Developers specify what the UI should look like, and React handles the complex reconciliation and updates behind the scenes.

3. **Cross-Platform Consistency**:
   - The reconciliation process works across various rendering targets, such as the web (real DOM), mobile (React Native), and servers.

## Virtual DOM vs Real DOM

| **Aspect**      | **Virtual DOM**                       | **Real DOM**                              |
| --------------- | ------------------------------------- | ----------------------------------------- |
| **Performance** | Fast updates via diffing and batching | Slower updates due to direct manipulation |
| **Ease of Use** | Abstracted from developers            | Requires manual updates                   |
| **Reusability** | Efficient reuse of unchanged nodes    | Updates the entire tree                   |
| **Rendering**   | Optimized and batched updates         | Immediate and synchronous updates         |
