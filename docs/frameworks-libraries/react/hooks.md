---
sidebar_position: 7
---

# React Hooks

React introduced hooks in version 16.8 to allow developers to use state and other React features in functional components, which were previously only available in class components. Hooks make it possible to write components that are concise, easy to read, and maintain while providing more powerful capabilities.

## `useState` – Managing State in Functional Components

The `useState` hook allows you to add state to functional components. Before hooks, managing state was only possible in class components. `useState` makes it easy to manage component state in functional components.

### Syntax:

```javascript
const [state, setState] = useState(initialState);
```

- `state`: The current state value.
- `setState`: A function that updates the state value. It triggers a re-render of the component when the state is updated.
- `initialState`: The initial value for the state.

### Example:

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

In the above example:

- `useState(0)` initializes the state with `0`.
- `setCount` is used to update the state when the button is clicked.

### Important Notes:

- The state is preserved between re-renders.
- The `setState` function is asynchronous and may batch updates for performance optimization.

## `useEffect` – Managing Side Effects

The `useEffect` hook is used to perform side effects in functional components, such as fetching data, subscribing to external events, or manually modifying the DOM. It can be thought of as a combination of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in class components.

### Syntax:

```javascript
useEffect(() => {
  // Code to run when component mounts or state/props change
}, [dependencies]);
```

- The **callback function** inside `useEffect` is run after the component renders.
- **Dependencies**: The second argument is an array of dependencies. The effect runs only if the values in the dependency array change. If the array is empty, the effect runs only once (after the initial render).

### Example:

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return <div>Timer: {seconds}s</div>;
}
```

In this example:

- `useEffect` starts an interval that increments the `seconds` state every second.
- The cleanup function clears the interval when the component is unmounted or before running the effect again.

### Important Notes:

- **Cleanup**: If your effect subscribes to external services, uses timers, or sets up side effects, you should return a cleanup function to remove them before the component unmounts or before running the effect again.
- **Dependencies**: The effect is rerun when any value in the dependency array changes.

## `useContext` – Managing Global State Across Components

The `useContext` hook allows you to access the value of a React context directly in a functional component. It is used to share values like themes, authentication status, or settings across many components without having to pass props down manually at each level.

### Syntax:

```javascript
const value = useContext(MyContext);
```

- `MyContext`: A context object created using `React.createContext()`.
- `value`: The current context value.

### Example:

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
```

In the above example:

- `ThemeContext.Provider` provides the `theme` and `toggleTheme` values to the component tree.
- `useContext(ThemeContext)` is used in `ThemedComponent` to access the `theme` and `toggleTheme` functions.

### Important Notes:

- `useContext` will re-render the component whenever the context value changes.
- Context is often used for global state like user authentication, themes, etc.

## `useReducer` – Complex State Management

The `useReducer` hook is used to manage more complex state logic in functional components. It’s particularly useful when dealing with complex state transitions, such as handling multiple actions or when the state depends on the previous state.

`useReducer` is similar to `useState`, but instead of just setting state directly, you dispatch actions to a reducer function, which returns a new state.

### Syntax:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer`: A function that determines how the state changes based on an action.
- `initialState`: The initial state value.
- `dispatch`: A function used to send actions to the reducer to update the state.

### Example:

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
```

In this example:

- The reducer function handles state transitions based on the action type.
- The `dispatch` function is used to send actions (`{ type: 'increment' }` or `{ type: 'decrement' }`) to the reducer.

### Important Notes:

- `useReducer` is useful when state logic is complex or when there are multiple state updates that depend on each other.
- It provides a more predictable and organized way to handle state, especially in larger applications.

## `useMemo` and `useCallback` – Performance Optimization

React provides `useMemo` and `useCallback` hooks to optimize performance by memoizing values and functions, ensuring that expensive calculations or functions are not re-executed unnecessarily.

### `useMemo`: Memoize Values

`useMemo` returns a memoized value. It recomputes the value only when one of the dependencies has changed. This is useful for optimizing expensive calculations that should not run on every render.

### Syntax:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- The **callback function** runs the expensive calculation.
- The **dependency array** determines when the memoized value should be recomputed.

### Example:

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComputation({ a, b }) {
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return a + b;
  }, [a, b]);

  return <p>Computed Value: {computedValue}</p>;
}
```

In this example, `useMemo` ensures that the computation (`a + b`) is only re-run if either `a` or `b` changes.

### `useCallback`: Memoize Functions

`useCallback` is similar to `useMemo`, but instead of memoizing a value, it memoizes a function. It’s particularly useful when passing functions as props to child components to prevent unnecessary re-renders.

### Syntax:

```javascript
const memoizedFunction = useCallback(() => {
  /* function code */
}, [dependencies]);
```

### Example:

```jsx
import React, { useCallback, useState } from "react";

function Button({ onClick }) {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}
```

In this example, `useCallback` ensures that the `handleClick` function is not recreated on every render unless the `count` value changes.

## Custom Hooks – Reusable Logic

Custom hooks allow you to extract and reuse logic in different components. Custom hooks

are just JavaScript functions that call React hooks and can be shared across multiple components.

### Example:

```javascript
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting local storage", error);
    }
  };

  return [storedValue, setValue];
}
```

In this example, `useLocalStorage` is a custom hook that manages state and synchronizes it with `localStorage`. It can be used in any component that needs to store data in `localStorage`.

### Important Notes:

- Custom hooks follow the same rules as React hooks (e.g., they must start with `use`).
- They are great for sharing reusable logic without the need for higher-order components (HOCs) or render props.
