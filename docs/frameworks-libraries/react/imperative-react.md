---
sidebar_position: 9
---

# Imperative React

In React, **imperative programming** refers to directly controlling the behavior or operations of a component, rather than relying solely on the declarative state-based updates that React encourages. While React is largely declarative (focusing on what the UI should look like based on state), there are situations where you need to directly interact with a component’s behavior or DOM elements in an imperative manner.

The **`useImperativeHandle`** hook provides a way to customize the instance value that is exposed when using **`ref`** on a component. This is especially useful when you want to expose a limited set of methods or properties to a parent component, and not the entire instance of a component.

## What is `useImperativeHandle`?

The **`useImperativeHandle`** hook allows functional components to **modify the values that are exposed to parent components through refs**. This helps in situations where you want to expose only a subset of the component’s internal methods or properties to the outside world, rather than exposing the entire component instance or DOM node.

By default, when you use a `ref` on a component, you gain access to the component instance (in class components) or the DOM element (in functional components using `useRef`). With `useImperativeHandle`, you can customize what is exposed through the `ref`.

## How `useImperativeHandle` Works

- **`useRef`** is used to create a reference that is passed to the child component.
- **`useImperativeHandle`** customizes what properties or methods are exposed to the parent via that ref.
- You pass a `ref` from the parent to the child component, and then inside the child, you use `useImperativeHandle` to define the exposed properties or methods.

The hook signature is:

```js
useImperativeHandle(
  ref,
  () => ({
    someMethod: () => {
      /* method implementation */
    },
  }),
  [dependencies]
);
```

- **`ref`**: The ref that is passed from the parent component.
- **Callback Function**: A function that returns the object of properties or methods to be exposed.
- **`dependencies`**: The array of dependencies to re-trigger the hook if any of them changes (similar to how `useEffect` works).

## Example of `useImperativeHandle`

Here’s an example where a parent component uses a `ref` to call a method inside the child component, which is controlled via `useImperativeHandle`.

**Example: Customizing Exposed Methods with `useImperativeHandle`**

```jsx
import React, { useState, useImperativeHandle, forwardRef } from "react";

// Child Component
const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  // Expose a limited set of methods to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    increment: () => setCount(count + 1), // method to increment count
    reset: () => setCount(0), // method to reset count
  }));

  return <div>Count: {count}</div>;
});

// Parent Component
const Parent = () => {
  const childRef = React.useRef();

  const handleIncrement = () => {
    childRef.current.increment(); // Call increment method from Child component
  };

  const handleReset = () => {
    childRef.current.reset(); // Call reset method from Child component
  };

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Parent;
```

In this example:

1. The **`Child`** component exposes two methods: `increment` and `reset`, which modify the internal state (`count`) of the `Child` component.
2. The **`Parent`** component creates a `ref` (`childRef`) and passes it to the `Child` component.
3. The `Parent` component calls the `increment` and `reset` methods using `childRef.current`.

## When to Use `useImperativeHandle`

`useImperativeHandle` should be used when you want to:

- **Limit what is exposed to the parent**: Instead of giving the parent direct access to all methods and state, `useImperativeHandle` allows you to carefully expose only certain methods or properties.
- **Create more controlled components**: Sometimes a component’s internal state or methods should not be directly accessible to the parent. `useImperativeHandle` allows you to expose only specific behavior (like focusing an input or triggering an animation).

- **Encapsulate behavior**: It’s useful for encapsulating logic within a component and exposing a clean API for parent components to interact with, while keeping the internal implementation details hidden.

## Use Case Examples for `useImperativeHandle`

- **Form Components**: A custom form component can expose methods like `focus` or `reset`, but the parent doesn’t need to directly manage the form state.
- **Custom UI Controls**: Components like modals, accordions, or sliders can expose imperative methods (like `open`, `close`, `toggle`) that the parent can trigger without worrying about the internal details.
- **Third-Party Libraries**: Sometimes, when integrating third-party libraries that require imperative access to the DOM (e.g., to trigger an animation or set focus), `useImperativeHandle` can help bridge the gap.

## Best Practices

- **Use sparingly**: Refs should be used sparingly in React. They should not replace state management or props-driven behavior but should be used for scenarios where declarative control is not practical or possible.
- **Expose only necessary methods**: When using `useImperativeHandle`, only expose the methods that are necessary for the parent to control. Avoid exposing the entire component instance or unnecessary internal logic.

- **Avoid side-effects**: Since `useImperativeHandle` is for imperative logic, make sure that the methods you expose do not trigger unnecessary side effects that can lead to unpredictable behavior.

## `forwardRef` and `useImperativeHandle`

For `useImperativeHandle` to work, it is necessary to pass the `ref` from the parent to the child component. This is where `forwardRef` comes in. `forwardRef` allows a functional component to accept a `ref` passed from a parent and then forward it to a child element.

In the earlier example, `forwardRef` is used to pass the `ref` from the parent to the `Child` component so that the parent can access methods like `increment` and `reset`.
