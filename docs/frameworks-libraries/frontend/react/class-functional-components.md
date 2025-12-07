---
sidebar_position: 5
---

# Components

In React, components are the building blocks of the UI. They define the structure, logic, and behavior of the user interface. Initially, React components were class-based, but with the introduction of **Hooks** in React 16.8, functional components became more powerful and capable of handling state, side effects, and other lifecycle behavior, previously only possible with class-based components.

This note compares **class-based** and **functional components**, their lifecycle methods, and how they manage state, effects, and rendering.

## Controlled Components

- A controlled component is an input element (like a form input or checkbox) whose value is controlled by React state.
- This means the input's value is driven by the state and can only be changed by updating the state.
- Controlled components provide more predictable behavior and are commonly used in forms.

```jsx
const [value, setValue] = useState("");
const handleChange = (e) => setValue(e.target.value);

return <input type="text" value={value} onChange={handleChange} />;
```

## Uncontrolled Components

- Uncontrolled components are input elements where the DOM handles their state internally, rather than React controlling them.
- You can use `ref` to access the DOM directly and read the value of the input.

```jsx
const inputRef = useRef();
const handleSubmit = () => {
  console.log(inputRef.current.value);
};

return <input ref={inputRef} />;
```

## Fragments

- **Fragments** are used to group multiple elements without adding an extra node to the DOM.
- They are useful when you need to return multiple elements from a component but don’t want to introduce unnecessary wrapper elements like `<div>`.
- Fragments can be written as `<React.Fragment>` or using shorthand `<>`.

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Content goes here</p>
  </>
);
```

## Component Tree

- The **component tree** is the hierarchical structure of all React components in an application.
- The root component is at the top, and all other components are its children or descendants. Each component can have its own state and can pass data to its children through props.
- The component tree defines the UI structure and how components interact with each other.
- React manages the rendering of components based on their states and props, ensuring that the UI stays in sync with the underlying data.

## Component Communication

1. **Parent to Child**: Data flows from parent to child components via props. The child can access the data but cannot modify it directly.
2. **Child to Parent**: Children can send data or trigger actions in the parent component by passing functions as props and calling them within the child.
3. **Siblings**: Sibling components communicate indirectly through a shared parent component. The parent manages the state and passes it down to the children.

## Class-Based Components

Class-based components were the **default** type of component in React before the introduction of hooks. They are based on ES6 classes and extend from `React.Component`. These components have a well-defined lifecycle, which helps manage state and side effects.

### Structure of Class-Based Components

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initialization of state
  }

  render() {
    return <div>{this.state.count}</div>; // UI rendering
  }
}

export default MyComponent;
```

### Key Features of Class Components

1. **State**: Managed using `this.state` and updated via `this.setState()`.
2. **Lifecycle Methods**: Defined lifecycle methods that manage the component's behavior throughout its existence.
3. **`this` Context**: `this` is used to access component methods and state.

### Lifecycle of Class-Based Components

Class components have a structured lifecycle with specific methods to run at different stages:

1. **Mounting Phase**: Occurs when the component is being inserted into the DOM.

   - **`constructor(props)`**:
     - Called first, used for initialization of state and binding methods.
   - **`static getDerivedStateFromProps(props, state)`**:
     - Rarely used, but it updates state based on props.
   - **`render()`**:
     - The only **required method**. It returns JSX that will be rendered in the DOM.
   - **`componentDidMount()`**:
     - Called immediately after the component is mounted (added to the DOM).
     - Ideal for **side effects** (e.g., fetching data).

2. **Updating Phase**: Occurs when the component's state or props change.

   - **`static getDerivedStateFromProps(props, state)`**:
     - Called when the component's props are updated.
   - **`shouldComponentUpdate(nextProps, nextState)`**:
     - Determines if the component should re-render.
     - Can be used for performance optimization.
   - **`render()`**:
     - Re-renders the component with updated state or props.
   - **`getSnapshotBeforeUpdate(prevProps, prevState)`**:
     - Called before the DOM is updated.
     - Useful for capturing values (e.g., scroll position) before the update.
   - **`componentDidUpdate(prevProps, prevState, snapshot)`**:
     - Called immediately after the component updates (after re-render).

3. **Unmounting Phase**: Occurs when the component is removed from the DOM.
   - **`componentWillUnmount()`**:
     - Called just before the component is unmounted.
     - Used to clean up resources like timers, subscriptions, or network requests.

#### Example: Class-Based Component with Lifecycle Methods

```jsx
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.timerID = null;
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>{this.state.seconds} seconds</div>;
  }
}

export default Timer;
```

## Functional Components

Functional components are simpler and are written as JavaScript functions. They are typically **stateless** but, with the introduction of **React Hooks**, they now support state management and side effects, making them just as powerful as class components.

### Structure of Functional Components

```jsx
import React from "react";

const MyComponent = (props) => {
  return <div>{props.text}</div>;
};

export default MyComponent;
```

### Key Features of Functional Components

1. **State and Side Effects with Hooks**: Use of `useState`, `useEffect`, etc.
2. **Simplicity**: These components are simpler, require less boilerplate, and do not need `this`.
3. **Performance**: Functional components can be more efficient in terms of memory and CPU usage because they do not have the overhead of a class instance.

### Lifecycle of Functional Components (with Hooks)

With the advent of **React Hooks**, functional components gained the ability to handle lifecycle events, state, and side effects, previously exclusive to class components.

1. **Mounting Phase**:

   - **`useState`**:
     - Initializes the state within the functional component.
   - **`useEffect` (with empty dependency array)**:
     - Replaces `componentDidMount` and runs after the first render.

2. **Updating Phase**:

   - **`useEffect` (with dependencies)**:
     - Replaces `componentDidUpdate` and runs when dependencies change.

3. **Unmounting Phase**:
   - **`useEffect` (cleanup function)**:
     - Cleanup logic that replaces `componentWillUnmount`.
     - A function returned inside `useEffect` is called during unmounting.

#### Example: Functional Component with Lifecycle Hooks

```jsx
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timerID);
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return <div>{seconds} seconds</div>;
};

export default Timer;
```

## Comparison Between Class-Based and Functional Components

| **Feature**              | **Class-Based Components**                                                                   | **Functional Components**                                   |
| ------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Syntax**               | ES6 class extending `React.Component`                                                        | JavaScript functions                                        |
| **State Management**     | `this.state` and `this.setState`                                                             | `useState` hook                                             |
| **Lifecycle Methods**    | Has lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | Uses `useEffect` hook to manage lifecycle events            |
| **Performance**          | Slight overhead due to class instantiation                                                   | More efficient (no `this`, no class overhead)               |
| **Reusability**          | Can be reused with inheritance and higher-order components                                   | Can use hooks for reusable logic with custom hooks          |
| **Complexity**           | More boilerplate code                                                                        | More concise, less boilerplate                              |
| **Community Preference** | Previously the default, but now less preferred                                               | Preferred in modern React due to simplicity and flexibility |

## Lifecycle Summary

| **Lifecycle Phase** | **Class Component**                                                                 | **Functional Component**                              |
| ------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Mounting**        | `constructor`, `render`, `componentDidMount`                                        | `useState`, `useEffect` (with empty dependency array) |
| **Updating**        | `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `componentDidUpdate` | `useEffect` (with dependencies)                       |
| **Unmounting**      | `componentWillUnmount`                                                              | `useEffect` (cleanup function)                        |

## When to Use Class-Based vs Functional Components

- **Class Components**:

  - Choose class components if you are working with older React codebases that heavily rely on them or need to use **legacy lifecycle methods**.
  - They may be necessary if you want to leverage certain features like **Error Boundaries** (though this can now be done with functional components in newer versions).

- **Functional Components**:
  - Preferred choice for new React applications.
  - **Hooks** provide an easy and powerful way to manage state and side effects, making functional components as capable as class components for most tasks.
  - **Cleaner, more readable code** and better **performance**.

## Key Points to Remember

1. **Hooks** (e.g., `useState`, `useEffect`) bring functional components to parity with class components, enabling complex state management and lifecycle behavior.
2. **Class components** still have a role in certain scenarios, especially in legacy code, but functional components are now the recommended way to write React code.
3. **Simplified Component Lifecycle**: `useEffect` in functional components replaces several lifecycle methods in class components, making the logic more concise and readable.
4. **Performance**: Functional components have a lighter memory footprint and render faster due to the lack of class overhead.

## Why React Moved to Functional Components

The React team shifted to **functional components** with **hooks** to simplify development and improve performance. Here's why:

1. **Simplicity**: Functional components are simpler and require less boilerplate code than class components, making them easier to write and maintain.

2. **Hooks**: Introduced in React 16.8, hooks (like `useState`, `useEffect`) enable functional components to manage state, handle side effects, and implement lifecycle behavior, previously only possible with class components.

3. **No `this` Binding**: Functional components don't require the use of `this`, which simplifies code and avoids errors related to context binding in class components.

4. **Improved Reusability**: With **custom hooks**, logic can be easily reused across multiple components, improving code modularity.

5. **Performance**: Functional components have a smaller memory footprint and can be more optimized, improving performance.

6. **Future-Proof**: React is focusing on functional components for future features and optimizations, making them the recommended approach for new development.

Overall, **functional components with hooks** are simpler, more powerful, and align with modern JavaScript practices, offering a cleaner, more efficient way to write React applications.
