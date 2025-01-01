---
sidebar_position: 6
---

# State Management

State management refers to the process of managing the state of an application efficiently. In React, the "state" represents the dynamic data of a component or application, which can change over time as users interact with the UI.

State management ensures:

1. **Data consistency** across components.
2. **Efficient updates** to the UI based on state changes.
3. **Simplified communication** between components.

## State Management with `useState`

The `useState` hook is the most basic way to manage state in a React functional component.

### Characteristics

- Manages **local state** for a single component.
- Best for simple, isolated state needs.

### Syntax

```jsx
const [state, setState] = useState(initialState);
```

- `state`: The current state value.
- `setState`: A function to update the state.

### Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

### When to Use

- For **simple state logic**.
- For **component-specific state**.

## State Management with `useReducer`

The `useReducer` hook is a more powerful alternative to `useState` for managing complex state logic.

### Characteristics

- Suitable for **complex state transitions**.
- Uses a **reducer function** to determine how state updates based on actions.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer`: A function `(state, action) => newState` that defines state transitions.
- `dispatch`: A function to trigger state changes.

### Example

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

### When to Use

- For **complex state logic** involving multiple actions.
- When the next state depends on the **previous state**.

## State Management with Context API

The Context API provides a way to share state across multiple components without passing props down manually at every level.

### Characteristics

- Solves the **prop drilling** problem (passing props through many levels).
- Not suitable for **frequent state updates** (due to performance overhead).

### Key Components

1. **Context Provider**:

   - Wraps components and provides the shared state.

   ```jsx
   const MyContext = React.createContext();
   ```

2. **Context Consumer**:
   - Consumes the shared state.

### Example

```jsx
import React, { useState, useContext } from "react";

// Create context
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Switch to Dark Theme</button>
    </div>
  );
}
```

### When to Use

- To **share state globally** across the component tree.
- For **static or infrequently changing state** (e.g., theme, user authentication).

## State Management with Redux

Redux is a predictable state management library often used with React for managing application-level state.

### Characteristics

- Centralizes state in a **single store**.
- State is updated using **pure reducer functions**.
- Provides **predictable state transitions**.

### Core Concepts

1. **Store**: The centralized state container.
2. **Actions**: Objects describing what to do (e.g., `{ type: 'INCREMENT' }`).
3. **Reducer**: A function `(state, action) => newState` that handles state transitions.

### Example

```jsx
import { createStore } from "redux";

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create Store
const store = createStore(counterReducer);

// Dispatch Actions
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // { count: 1 }
```

### When to Use

- For **large applications** where state needs to be shared across many components.
- When **state transitions need to be predictable** and easy to debug.

## Redux Middleware (Thunk and Saga)

Middleware in Redux extends the store's capabilities by handling side effects like asynchronous actions.

### Redux Thunk

- A middleware for handling **async actions** in Redux.
- Allows action creators to return functions (instead of objects).

Example:

```jsx
// Action Creator with Thunk
function fetchData() {
  return async (dispatch) => {
    const response = await fetch("/api/data");
    const data = await response.json();
    dispatch({ type: "SET_DATA", payload: data });
  };
}
```

### Redux Saga

- A middleware for handling **complex side effects** using generator functions.
- Provides better control over side effects compared to Thunk.

Example:

```jsx
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchDataSaga() {
  const data = yield call(fetch, "/api/data");
  yield put({ type: "SET_DATA", payload: data });
}

function* watchFetchData() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
}
```

### When to Use

- Use **Thunk** for simple async logic (e.g., API calls).
- Use **Saga** for complex async workflows (e.g., orchestrating multiple side effects).

## State Management with Redux Toolkit

Redux Toolkit (RTK) simplifies Redux by providing utilities for setting up a Redux store with less boilerplate.

### Features

1. **`configureStore`**: Sets up the store with middleware pre-configured.
2. **`createSlice`**: Automatically generates actions and reducers.
3. **`createAsyncThunk`**: Simplifies async actions.

### Example

```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// Dispatch Actions
store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // { counter: { count: 1 } }
```

### When to Use

- For **simplified Redux setup**.
- When you want to avoid the boilerplate of traditional Redux.

## Summary Table

| **Method**        | **Use Case**                                    | **Complexity** |
| ----------------- | ----------------------------------------------- | -------------- |
| **useState**      | Local state, simple components                  | Low            |
| **useReducer**    | Complex state logic, multiple actions           | Medium         |
| **Context API**   | Sharing global state across the component tree  | Medium         |
| **Redux**         | Large-scale apps with shared, predictable state | High           |
| **Redux Thunk**   | Async actions in Redux                          | Medium         |
| **Redux Saga**    | Complex async workflows                         | High           |
| **Redux Toolkit** | Simplified Redux setup, reduced boilerplate     | Medium         |
