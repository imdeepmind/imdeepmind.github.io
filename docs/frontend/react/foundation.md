---
sidebar_position: 2
---

# React Foundation

React is a powerful JavaScript library for building user interfaces, particularly for single-page applications (SPAs). It allows developers to break down complex UIs into smaller, reusable components, making the development process more manageable and scalable. The following sections cover the core concepts of React, which are essential to understanding how it works and how to build React applications.

## JSX: JavaScript XML

### What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows developers to write HTML-like code within JavaScript, which makes it more readable and declarative. JSX code is later compiled into regular JavaScript by tools like Babel.

### JSX Syntax

JSX looks similar to HTML, but there are some key differences:

- **Attributes**: In HTML, you write attributes like `class`, but in JSX, the attribute name is `className`, because `class` is a reserved word in JavaScript.

  ```jsx
  <div className="my-class"></div> // JSX
  ```

- **Self-closing Tags**: In JSX, self-closing tags like `<img />`, `<input />`, etc., are required to have a closing slash, unlike in HTML.

  ```jsx
  <input type="text" />
  ```

- **JavaScript Expressions**: You can embed JavaScript expressions in JSX using curly braces `{}`. This allows you to insert variables, expressions, or function calls inside the JSX code.

  ```jsx
  const name = "React";
  const element = <h1>Hello, {name}!</h1>; // Output: <h1>Hello, React!</h1>
  ```

### How JSX Compiles into JavaScript

JSX is not natively understood by browsers. When JSX is written in a React component, it gets compiled into `React.createElement()` calls by a tool like Babel. These calls create virtual DOM elements, which are then used to update the actual DOM. This process is called **rendering**.

For example, this JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

gets compiled into the following JavaScript:

```javascript
const element = React.createElement("h1", null, "Hello, world!");
```

React uses these `React.createElement()` calls to build a Virtual DOM, which helps optimize the rendering process.

## Components in React

React components are the building blocks of a React application. A component is a self-contained unit of code that can manage its state, handle events, and render UI based on its state and props.

### Types of Components

1. **Functional Components:**
   Functional components are simple JavaScript functions that accept props as arguments and return JSX to render UI. These are the most common and modern way to define components in React, especially with the introduction of hooks.

   Example of a functional component:

   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   ```

2. **Class Components:**
   Class components are ES6 classes that extend `React.Component`. They have more features than functional components, such as lifecycle methods and local state management (before React hooks were introduced).

   Example of a class component:

   ```jsx
   class Greeting extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}!</h1>;
     }
   }
   ```

### Component Lifecycle (Class Components)

Class components have lifecycle methods that allow you to execute code at specific points during a component’s life (e.g., when it is created, updated, or destroyed).

Common lifecycle methods:

- **`componentDidMount()`**: Runs after the component is first rendered, often used to fetch data from an API.
- **`componentDidUpdate(prevProps, prevState)`**: Called after the component’s state or props change, useful for responding to prop changes.
- **`componentWillUnmount()`**: Runs before the component is removed from the DOM, typically used for cleanup (e.g., cancelling network requests, removing event listeners).

With the introduction of hooks, many lifecycle features are available in functional components as well (e.g., `useEffect()`).

## Props: Passing Data Between Components

Props (short for properties) are used to pass data from a parent component to a child component. Props are read-only, meaning the child component cannot modify the props it receives.

### Passing Props to a Component

Props are passed to components in a similar way to how attributes are used in HTML. You can pass any type of data, such as strings, numbers, objects, arrays, and even functions.

Example of passing props:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Abhishek" />;
}
```

In the above example, the `Greeting` component receives the `name` prop from the `App` component and renders it.

### Default Props and PropTypes

- **Default Props**: You can set default values for props if no value is passed from the parent component.

  ```jsx
  Greeting.defaultProps = {
    name: "Guest",
  };
  ```

- **PropTypes**: React provides a way to validate the type of props passed to a component using `PropTypes`. This helps to ensure the correctness of data types.

  ```jsx
  Greeting.propTypes = {
    name: PropTypes.string.isRequired,
  };
  ```

## State: Managing Component State

State refers to data that changes over time within a component. It allows components to be interactive and dynamic. Each component can have its own state.

### State in Class Components

In class components, state is initialized in the constructor and modified using `this.setState()`. The component re-renders whenever the state changes.

Example of state in class components:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

In the above example, the state `count` is initialized in the constructor. When the `increment` method is called (through a button click), `this.setState()` updates the state, causing the component to re-render and display the updated count.

### State in Functional Components (with Hooks)

With the introduction of React hooks, functional components can now manage their own state using the `useState()` hook. This makes functional components more powerful and allows developers to write stateful logic in a simpler way.

Example of state in functional components:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Here, `useState(0)` initializes the `count` state with an initial value of 0. The `setCount` function is used to update the state, and the component re-renders whenever the state changes.

## Event Handling in React

React uses a synthetic event system that wraps around the browser’s native events. This system provides consistent behavior across different browsers and offers features like event delegation. React events are named in camelCase rather than lowercase, and you pass a function as the event handler.

### Handling Events

To handle events like clicks, form submissions, or key presses, you attach event handlers to JSX elements. The syntax is similar to regular HTML event handling, but with a few key differences:

1. Event handlers are written in camelCase, not lowercase.
2. Instead of passing a string to an event handler (like in HTML), you pass a function reference.

Example:

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

In this example, when the button is clicked, the `handleClick` function is called, which triggers the alert.

### Passing Arguments to Event Handlers

Sometimes, you may need to pass arguments to an event handler. You can do this by using an anonymous function or `bind()` method.

Example with anonymous function:

```jsx
function Button() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => handleClick("Button clicked!")}>Click Me</button>
  );
}
```

In this example, the event handler `handleClick` is passed the string `'Button clicked!'` when the button is clicked.

### Event Pooling

React uses event pooling for performance optimization. This means that event objects are reused, and their properties are nullified after the event handler is invoked. To access the event properties asynchronously (for example, in a `setTimeout`), you need to call `event.persist()` to prevent the event from being pooled.

Example:

```jsx
function handleClick(event) {
  event.persist(); // Prevents the event from being pooled
  setTimeout(() => {
    console.log(event.target); // Works because event is not pooled
  }, 1000);
}
```

### Form Handling

React handles form elements like `<input>`, `<textarea>`, and `<select>` with a similar event model. The most common approach to handling forms is **controlled components**, where the form input’s value is managed by React state.

Example of a controlled form component:

```jsx
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + name);
    event.preventDefault(); // Prevent form default behavior
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example:

- The input field is a **controlled component**, meaning its value is tied to the state (`name`).
- The `handleChange` function updates the state whenever the user types in the input field.
- The form submission is handled by the `handleSubmit` function, which displays the current state (`name`).
