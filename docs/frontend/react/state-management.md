---
sidebar_position: 5
---

# Statement Management

## Context API

The **Context API** is a feature built into React that enables you to manage global state across a component tree without having to manually pass props down the hierarchy (i.e., avoiding "prop drilling").

### Key Concepts

- **Context**: Provides a way to share data (state) between components without explicitly passing props.
- **Provider**: The component that holds the global state and makes it available to all its children.
- **Consumer**: Components that access the context's data.

### Use Cases

- Managing global themes (e.g., light/dark mode).
- User authentication and session management.
- Sharing data that doesn't change frequently across deeply nested components.

### Basic Example

```tsx
import React, { createContext, useContext, useState } from "react";

// Create a context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

// Provide the context to children
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consume the context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);
```

### Limitations

- Can lead to **unnecessary re-renders** if the context value changes frequently.
- Doesn't scale well for large and complex applications with many interdependent states.

## Redux

**Redux** is a state management library commonly used in React applications to handle complex state and interactions in a predictable way.

### Core Concepts

- **Store**: A single source of truth where the global state is stored.
- **Actions**: Plain JavaScript objects that describe what should change in the state.
- **Reducers**: Pure functions that take the current state and an action and return the new state.
- **Dispatch**: A method to send actions to the store.
- **Selectors**: Functions to extract data from the state.

### Redux Flow

1. Dispatch an action.
2. The reducer processes the action and updates the store.
3. The updated state is propagated to the React components.

### Basic Example

```tsx
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Define actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

// React components
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: number) => state);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
```

## Middleware in Redux

Middleware in Redux extends its functionality by allowing custom logic to be executed between the action being dispatched and the reducer handling the action. It's commonly used for handling **asynchronous operations** and **side effects**.

### Redux Thunk

- Allows you to write action creators that return a function instead of an action.
- Used for handling asynchronous actions (e.g., API calls).
- Example:

  ```tsx
  import { createSlice, configureStore } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  import { Provider, useDispatch, useSelector } from "react-redux";

  const dataSlice = createSlice({
    name: "data",
    initialState: { loading: false, items: [] },
    reducers: {
      fetchStart: (state) => {
        state.loading = true;
      },
      fetchSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
      },
    },
  });

  const { fetchStart, fetchSuccess } = dataSlice.actions;

  const fetchData = () => async (dispatch: any) => {
    dispatch(fetchStart());
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    dispatch(fetchSuccess(data));
  };

  const store = configureStore({
    reducer: dataSlice.reducer,
    middleware: [thunk],
  });

  const DataComponent = () => {
    const dispatch = useDispatch();
    const { loading, items } = useSelector((state: any) => state);

    React.useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {items.map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const App = () => (
    <Provider store={store}>
      <DataComponent />
    </Provider>
  );
  ```

### Redux Saga

- Uses generator functions (`function*`) to handle side effects in a more declarative way.
- Useful for managing complex asynchronous workflows and tasks.
- Example (simplified):

  ```tsx
  import createSagaMiddleware from "redux-saga";
  import { takeEvery, put } from "redux-saga/effects";

  // Worker saga
  function* fetchUser(action: any) {
    const user = yield fetch(
      `https://api.example.com/users/${action.payload}`
    ).then((res) => res.json());
    yield put({ type: "USER_FETCH_SUCCESS", payload: user });
  }

  // Watcher saga
  function* watchFetchUser() {
    yield takeEvery("USER_FETCH_REQUEST", fetchUser);
  }

  // Create Saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Add sagaMiddleware to the Redux store
  const store = configureStore({
    reducer: userReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(watchFetchUser);
  ```

## Redux Toolkit (RTK)

**Redux Toolkit (RTK)** is the official, recommended way to use Redux. It simplifies Redux setup by providing utilities for writing less boilerplate code.

### Key Features

- **`createSlice`**: Combines reducers, actions, and action creators in one place.
- **`configureStore`**: Simplifies store configuration with built-in middleware.
- **`createAsyncThunk`**: Handles asynchronous logic like API calls.
- **DevTools Support**: Automatically configures Redux DevTools for debugging.

### Basic Example

```tsx
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// Async thunk
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch("https://api.example.com/users");
  return await response.json();
});

// Create slice
const usersSlice = createSlice({
  name: "users",
  initialState: { loading: false, data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

// Create store
const store = configureStore({
  reducer: usersSlice.reducer,
});

const UsersComponent = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: any) => state);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <UsersComponent />
  </Provider>
);
```

### Benefits

- Simplifies the Redux development process.
- Integrates seamlessly with TypeScript.
- Reduces boilerplate code significantly.
- Supports advanced use cases like asynchronous operations with minimal configuration.
