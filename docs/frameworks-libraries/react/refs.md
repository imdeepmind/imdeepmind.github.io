---
sidebar_position: 8
---

# Refs

In React, **Refs** (short for **references**) are a way to directly access and interact with DOM elements or React components. Refs provide a way to bypass the normal data flow and interact with the underlying DOM or components, which is useful for cases like focusing an input, measuring an element’s size, or triggering animations.

Refs allow you to **reference** a DOM node or a React component instance directly, bypassing the state and props system. This is helpful when you need to perform **imperative actions** (like focus or scroll) rather than relying on React's declarative model.

React provides a way to create refs using the `React.createRef()` API in class components and the `useRef()` hook in functional components.

## Creating and Using Refs

### Class Component Refs

In **class components**, refs are created using `React.createRef()` inside the constructor and then accessed through `this.refs`.

**Example** (Class Component):

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus(); // Focus on the input element
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default MyComponent;
```

In the example above:

- `this.inputRef` is created using `React.createRef()`.
- The `ref` is assigned to the `<input>` element.
- `this.inputRef.current.focus()` focuses the input element when the button is clicked.

### Functional Component Refs

In **functional components**, the `useRef()` hook is used to create refs. `useRef()` returns a mutable object that persists across renders.

**Example** (Functional Component):

```jsx
import React, { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus on the input element
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default MyComponent;
```

Here:

- `inputRef` is created using `useRef()`.
- The `ref` is assigned to the `<input>` element.
- `inputRef.current.focus()` is used to focus the input element.

## When to Use Refs

Refs should generally be used for actions that are not directly tied to state or the normal React data flow. These include:

1. **Accessing DOM Elements**: Refs provide a way to get a direct reference to a DOM element, such as focusing an input field, scrolling an element, or measuring its size.
2. **Triggering Imperative Actions**: If you need to trigger an action imperatively (e.g., animations, changing focus, or interacting with third-party libraries), refs are useful.

3. **Managing Third-Party Libraries**: When integrating third-party libraries that need access to a DOM element, refs allow you to interact with the DOM directly.

4. **Storing Mutable Values**: Refs can be used to store values that don’t trigger re-renders. For example, keeping track of a previous value or a value that doesn’t need to trigger a UI update.

## Accessing DOM Elements with Refs

Refs provide a way to interact directly with DOM elements, which is useful when React’s declarative rendering model isn’t sufficient.

- **Focus an Input**: Directly focus on an input field.
- **Scroll an Element**: Programmatically scroll a container to a particular position.
- **Measure Element Dimensions**: Get the dimensions (height, width) of an element, such as when building custom layouts.

**Example** (Accessing DOM with Refs):

```jsx
import React, { useRef, useEffect } from "react";

const ScrollComponent = () => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }}>Scroll down</div>
      <div
        ref={scrollRef}
        style={{ height: "100px", backgroundColor: "lightblue" }}
      >
        This is the target element.
      </div>
    </div>
  );
};

export default ScrollComponent;
```

In this example, we use a ref to scroll the page to a specific element when the component mounts.

## Managing Component Instances with Refs

Refs can also be used to interact with **class component instances**. You can use a ref to call methods of a class-based component or access its internal state.

**Example** (Accessing Methods in Class Components):

```jsx
import React, { Component } from "react";

class Timer extends Component {
  resetTimer() {
    console.log("Timer reset!");
  }

  render() {
    return <div>Timer</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
  }

  handleReset = () => {
    this.timerRef.current.resetTimer(); // Access method of Timer class
  };

  render() {
    return (
      <div>
        <Timer ref={this.timerRef} />
        <button onClick={this.handleReset}>Reset Timer</button>
      </div>
    );
  }
}

export default App;
```

In this case, the `App` component calls the `resetTimer` method of the `Timer` component using the ref.

## Mutable Values with Refs

Unlike state, refs do not cause a re-render when the referenced value changes. This makes refs useful for storing **mutable values** that need to persist across renders but shouldn’t trigger re-renders.

**Example** (Storing Mutable Values):

```jsx
import React, { useRef } from "react";

const Counter = () => {
  const countRef = useRef(0);

  const incrementCount = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default Counter;
```

Here, the `countRef` stores a mutable value (`countRef.current`) that does not cause the component to re-render.

## Forward Refs

In some cases, you may need to pass a ref from a parent component to a child component. React provides the `forwardRef` API to forward refs to a child component.

**Example** (Forwarding Refs):

```jsx
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

const Parent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default Parent;
```

Here, `Input` uses `forwardRef` to allow the parent component (`Parent`) to directly access the input element.

## When Not to Use Refs

Refs should be used sparingly. They are typically used for imperative code, but they should not replace the declarative nature of React components. Here’s when you should avoid refs:

- **Handling UI State**: Use React state for managing UI state instead of refs.
- **Complex Interactions**: Relying too much on refs for complex interactions can make the component harder to maintain. Use refs for simple, imperative actions (e.g., focusing an input).
