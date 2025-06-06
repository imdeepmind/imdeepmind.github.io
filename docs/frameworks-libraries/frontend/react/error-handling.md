---
sidebar_position: 15
---

# Error Handling and Error Boundaries

Error handling is an essential part of building robust applications. In React, error handling ensures that unexpected issues in one part of the application do not crash the entire UI. React provides **Error Boundaries** as a mechanism to handle runtime errors in the component tree.

## Error Handling in React

React uses JavaScript’s standard **try-catch** mechanism for error handling in most cases. However, rendering errors in React components cannot be caught by a typical `try-catch` block because React renders components asynchronously. This is where **Error Boundaries** come into play.

### Common Sources of Errors

- Syntax errors in JSX.
- Runtime errors during rendering.
- Errors in lifecycle methods.
- Errors triggered by asynchronous operations (e.g., API calls).

### Manual Error Handling Example

In some scenarios, you might handle errors manually:

```jsx
const MyComponent = () => {
  try {
    // Perform some risky operation
    throw new Error("An error occurred!");
  } catch (error) {
    console.error(error);
    return <h1>Something went wrong.</h1>;
  }
};
```

However, this approach is limited to specific operations and does not cover rendering errors.

## What are Error Boundaries?

Error Boundaries are React components designed to catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app. They do **not** catch:

- Errors inside event handlers.
- Errors in asynchronous code (like `setTimeout` or `fetch`).
- Errors in server-side rendering.
- Errors thrown from the Error Boundary itself.

### Key Points

- Error Boundaries catch **rendering errors**, **lifecycle method errors**, and **constructor errors** in their child components.
- They work only for class components. Functional components cannot be error boundaries, but they can leverage hooks like `ErrorBoundary` wrappers from libraries.

## How to Create an Error Boundary

Error Boundaries are implemented using **class components** that implement the `componentDidCatch` and `getDerivedStateFromError` lifecycle methods.

### Example of an Error Boundary

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an external service or console
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Usage of an Error Boundary

Wrap components that you suspect might throw an error inside the `ErrorBoundary`.

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## getDerivedStateFromError and componentDidCatch

1. **`getDerivedStateFromError(error)`**:

   - Invoked during the render phase when an error is thrown.
   - Updates the component's state to display a fallback UI.
   - Should return an updated state object.

2. **`componentDidCatch(error, errorInfo)`**:
   - Invoked after an error is thrown in the component tree.
   - Used for logging errors or side effects (e.g., sending logs to an error reporting service like Sentry).
   - Provides additional error information (e.g., component stack trace).

## Fallback UI

The fallback UI is the content displayed when an error is caught by the Error Boundary. It should inform users that something went wrong without crashing the rest of the application.

Example of a fallback UI:

```jsx
render() {
  if (this.state.hasError) {
    return <h1>Oops! Something went wrong. Please try again later.</h1>;
  }
  return this.props.children;
}
```

## Error Boundaries with Third-Party Libraries

Some libraries provide reusable Error Boundary components for functional components or extended use cases. For example:

- **react-error-boundary**: A popular library to implement Error Boundaries in functional components using hooks.

Example:

```jsx
import { ErrorBoundary } from "react-error-boundary";

const Fallback = () => <div>An error occurred!</div>;

<ErrorBoundary FallbackComponent={Fallback}>
  <MyComponent />
</ErrorBoundary>;
```

## Error Handling in Event Handlers

Error Boundaries do not catch errors in event handlers. You need to handle such errors manually using `try-catch` blocks.

Example:

```jsx
const handleClick = () => {
  try {
    throw new Error("An error in event handler!");
  } catch (error) {
    console.error(error);
  }
};

return <button onClick={handleClick}>Click Me</button>;
```

## Error Handling in Functional Components

Functional components cannot implement Error Boundaries directly. However, you can achieve similar behavior by using **Error Boundary wrappers** or external libraries like `react-error-boundary`. Alternatively, you can combine `try-catch` with `useState` for limited error handling.

Example:

```jsx
const FunctionalErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  try {
    if (hasError) {
      throw new Error("Error detected!");
    }
    return children;
  } catch (error) {
    console.error(error);
    return <h1>Something went wrong.</h1>;
  }
};
```

## Best Practices

1. Use Error Boundaries sparingly and only around parts of your app prone to errors (e.g., dynamic content, third-party components).
2. Log errors to external services (e.g., Sentry, LogRocket) for debugging and monitoring.
3. Avoid using Error Boundaries to suppress errors silently; provide meaningful fallback UI for users.
4. Combine Error Boundaries with other error handling techniques (e.g., event handler error handling and API-level error handling).
