---
sidebar_position: 12
---

# Routing

In React, routing refers to the navigation between different views or components based on the URL. Since React is primarily used to build Single-Page Applications (SPAs), React Router is the most commonly used library to implement routing in React. It allows you to map different components to specific URL paths, manage navigation, and handle dynamic routes.

## React Router Overview

React Router is a declarative routing library that enables you to:

- Define routes for different components.
- Handle navigation between views.
- Manage state and URL parameters.
- Implement advanced routing features like nested routes and lazy loading.

React Router works by matching the current URL with a list of defined routes and rendering the corresponding component. You can use various components like `<Route>`, `<Link>`, and `<BrowserRouter>` to set up the routing in your application.

## Installing React Router

To use React Router in your project, you first need to install it. Run the following command to install React Router DOM, which is the version for web applications:

```bash
npm install react-router-dom
```

### Basic Routing with React Router

React Router uses a set of components to implement routing:

- **`<BrowserRouter>`**: This component provides the routing context for the application. It is typically placed at the root of your application.
- **`<Route>`**: This component maps a URL path to a specific component.
- **`<Link>`**: This component is used to navigate between different routes without reloading the page (client-side navigation).

### Example of Basic Routing

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Define components for different pages
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
```

In this example:

- The `<Router>` component wraps the entire application, providing routing context.
- The `<Link>` component is used to navigate between different paths (`/` and `/about`).
- The `<Route>` component maps the URL to a specific component. The `exact` prop is used for the root path (`/`), ensuring it only matches the exact URL.

## Dynamic Routes

Sometimes, we need to capture dynamic values from the URL, such as an ID or a slug. React Router allows us to create dynamic routes by using path parameters.

### Example of Dynamic Routes

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Post() {
  let { id } = useParams();
  return <h2>Post ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/post/1">Post 1</Link>
            </li>
            <li>
              <Link to="/post/2">Post 2</Link>
            </li>
          </ul>
        </nav>

        <Route path="/post/:id" component={Post} />
      </div>
    </Router>
  );
}

export default App;
```

In this example:

- The route `/post/:id` contains a dynamic parameter `id`.
- The `useParams` hook is used inside the `Post` component to access the dynamic value.

## Nested Routes

Nested routes allow you to render routes inside other routes. This is useful for building complex layouts where certain sections of the UI change depending on the URL.

### Example of Nested Routes

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/dashboard/settings" exact>
          <h3>Settings Page</h3>
        </Route>
        <Route path="/dashboard/profile" exact>
          <h3>Profile Page</h3>
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
```

In this example:

- The `Dashboard` component contains two nested routes: `/dashboard/settings` and `/dashboard/profile`.
- The `<Switch>` component ensures that only one of the nested routes gets rendered at a time.

## Lazy Loading of Components

Lazy loading is a technique where components are only loaded when they are needed, rather than all at once. This can significantly reduce the initial loading time of your application. React Router provides a way to integrate lazy loading with routing.

You can use `React.lazy` and `Suspense` for lazy loading of components.

### Example of Lazy Loading with React Router

```jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
```

In this example:

- The `Home` and `About` components are lazily loaded using `React.lazy()`.
- The `<Suspense>` component is used to show a fallback (like a loading indicator) until the component is loaded.

## Additional Features of React Router

- **Redirects**: You can use the `<Redirect>` component to redirect users to another route. This is useful when implementing authentication or permission-based routing.
- **Programmatic Navigation**: You can navigate programmatically by using `useHistory` (or `useNavigate` in React Router v6) to push or replace routes.
- **Route Guards**: You can use route guards to protect certain routes and prevent access to unauthorized users by checking conditions like authentication.
