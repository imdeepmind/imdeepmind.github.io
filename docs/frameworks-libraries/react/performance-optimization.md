---
sidebar_position: 10
---

# Performance Optimization

In React, performance optimization is crucial to ensure that your application remains fast, responsive, and scalable, especially as the size of the application grows. React provides various techniques and tools to optimize the rendering process, reduce unnecessary re-renders, and improve load times.

## React.memo

`React.memo` is a higher-order component (HOC) that helps optimize the performance of **functional components** by memoizing their output. This prevents unnecessary re-renders when the props passed to the component have not changed.

### How `React.memo` Works

- By default, functional components re-render whenever their parent component re-renders, even if the props they receive have not changed.
- `React.memo` compares the current and previous props, and if they are the same, it skips re-rendering the component.

### Example

```jsx
import React from "react";

const ChildComponent = React.memo(({ data }) => {
  console.log("ChildComponent rendered");
  return <div>{data}</div>;
});

function ParentComponent() {
  const [count, setCount] = React.useState(0);
  const data = "Hello, World!";

  return (
    <div>
      <ChildComponent data={data} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default ParentComponent;
```

In this example:

- `ChildComponent` is wrapped in `React.memo`. This means the child component will only re-render when the `data` prop changes.
- If `setCount` is called and the `data` prop doesn't change, the child component will not re-render, resulting in better performance.

### When to Use `React.memo`

- Use `React.memo` when a component is purely presentational and does not need to re-render unless its props change.
- It is beneficial for components that receive complex objects or arrays as props, as React’s default shallow comparison may not catch deep changes.

## PureComponent

`PureComponent` is a class component version of `React.memo`. It automatically implements `shouldComponentUpdate` with a shallow comparison of both `props` and `state`.

### How `PureComponent` Works

- When a component extends `React.PureComponent`, it avoids unnecessary re-renders by comparing the new props and state with the previous ones using a shallow comparison.
- If the props or state have not changed, React will skip re-rendering the component.

### Example

```jsx
import React, { PureComponent } from "react";

class ChildComponent extends PureComponent {
  render() {
    console.log("ChildComponent rendered");
    return <div>{this.props.data}</div>;
  }
}

class ParentComponent extends React.Component {
  state = { count: 0, data: "Hello, World!" };

  render() {
    return (
      <div>
        <ChildComponent data={this.state.data} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default ParentComponent;
```

In this example:

- `ChildComponent` extends `PureComponent`, so it will only re-render when the `data` prop changes.
- If only the `count` state in the `ParentComponent` changes, `ChildComponent` will not re-render, improving performance.

### When to Use `PureComponent`

- Use `PureComponent` for class components that receive simple props and do not require deep comparison of props or state.
- Avoid `PureComponent` for components that receive complex objects or arrays, as shallow comparison may not catch deep changes.

## Virtual DOM

The **Virtual DOM** (VDOM) is an in-memory representation of the real DOM. React uses the virtual DOM to optimize updates and re-renders, which significantly improves performance.

### How the Virtual DOM Works

1. **Initial Render:** When a React component is rendered, it generates a virtual DOM tree, which is a lightweight copy of the actual DOM.
2. **State or Prop Change:** When the state or props of a component change, React creates a new virtual DOM tree.
3. **Diffing Algorithm:** React compares the new virtual DOM with the previous one (this process is called "reconciliation").
4. **Minimal Updates:** React determines the differences (or "diffs") between the old and new virtual DOM trees and calculates the minimal set of changes required to update the real DOM.

### Benefits of Virtual DOM

- **Faster Updates:** Since the virtual DOM is much faster to manipulate than the actual DOM, React can update it quickly and then apply only the necessary changes to the real DOM.
- **Batching:** React batches updates to the DOM, reducing the number of reflows and repaints, which improves performance.

### Example

```jsx
function MyComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:

- When the `setCount` function is called, React updates the virtual DOM first and then compares it with the previous virtual DOM. It only updates the part of the real DOM that needs to change, making the process efficient.

## Code Splitting

Code splitting is a technique that involves breaking up your application into smaller bundles and loading them only when they are needed. This can significantly reduce the initial load time of your app.

React supports code splitting through dynamic imports and React's `Suspense` component.

### How Code Splitting Works

- Code splitting divides your app into smaller bundles that are loaded dynamically. React will load only the required bundles when the user navigates to different parts of the application.
- This results in faster initial page loads and reduced memory usage.

### Example with Dynamic Imports

```jsx
import React, { Suspense, lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

In this example:

- `MyComponent` is dynamically imported using `React.lazy()`. The component will be loaded only when it is needed.
- The `Suspense` component is used to show a loading state while the component is being fetched.

## Lazy Loading

**Lazy loading** is a technique where components are loaded only when they are needed, instead of loading everything upfront. This improves the initial load time by reducing the amount of JavaScript that needs to be executed.

### How Lazy Loading Works

- React provides `React.lazy()` to enable lazy loading for components.
- `React.lazy()` allows you to define a component that will only be loaded when it is required.
- `Suspense` is used to show a fallback UI until the component is loaded.

### Example of Lazy Loading

```jsx
import React, { Suspense, lazy } from "react";

const SomeComponent = lazy(() => import("./SomeComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SomeComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

In this example:

- `SomeComponent` is lazily loaded when it's required.
- The `Suspense` component handles the fallback UI while the component is being loaded.

### When to Use Lazy Loading

- Use lazy loading for large components or parts of your app that are not immediately necessary.
- It’s especially useful in scenarios where the initial load time is critical, such as on mobile devices or for large-scale web apps.
