---
sidebar_position: 13
---

# Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is a technique where the server renders the HTML for a React application before sending it to the client. This contrasts with the default behavior of React, where rendering happens on the client side. SSR can improve performance, SEO, and the initial loading experience of your application.

## Why Use SSR?

1. **Improved SEO**:

   - Search engine crawlers may not execute JavaScript effectively, especially for client-rendered apps. SSR ensures that the content is fully rendered as HTML on the server, which search engines can easily crawl and index.

2. **Faster First Contentful Paint (FCP)**:

   - SSR provides the user with a fully-rendered HTML page, reducing the time it takes for content to be visible on the screen.

3. **Better Performance on Slow Devices**:

   - For users with slower devices, SSR shifts the rendering workload to the server, improving the perceived performance.

4. **Initial State Preloading**:
   - The server can fetch data and render a complete page before sending it to the client, avoiding an initial "blank page" state.

## How SSR Works in React

1. **Request**:
   - A user requests a URL from the React app.
2. **Server Renders React**:

   - The server executes the React components for the requested route, fetches necessary data, and renders the application into a complete HTML string.

3. **Send HTML to Client**:

   - The server sends the fully-rendered HTML to the client, ensuring that the user sees a complete page immediately.

4. **Hydration**:
   - On the client, React takes over the server-rendered HTML and "hydrates" it. Hydration is the process where React attaches event listeners and makes the page interactive.

## Core Concepts of SSR in React

### ReactDOMServer

React provides the `react-dom/server` package for SSR, which includes methods like:

- **`renderToString`**: Converts React components into an HTML string.
- **`renderToNodeStream`**: Streams the HTML string to the client for improved performance (useful for large pages).

Example:

```tsx
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

const server = require("express")();

server.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => console.log("Server is running on port 3000"));
```

In this example:

- `ReactDOMServer.renderToString` generates HTML for the `App` component.
- The HTML is sent to the client, and the client React app hydrates it.

### Hydration

Hydration connects the React server-rendered HTML with the React client-side JavaScript. This process ensures that interactivity (e.g., event handlers) is added to the server-rendered content.

Example:

```tsx
import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
hydrateRoot(rootElement, <App />);
```

React uses `hydrateRoot` (or `ReactDOM.hydrate` in older versions) instead of `createRoot` or `render` when working with SSR.

### Data Fetching

In SSR, data must be fetched on the server before rendering the components. This often involves making API calls and passing the fetched data to the React app.

Example with data fetching:

```tsx
import ReactDOMServer from "react-dom/server";
import fetch from "node-fetch";
import App from "./App";

server.get("*", async (req, res) => {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );
  const html = ReactDOMServer.renderToString(<App data={data} />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>React SSR</title></head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(data)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});
```

Here:

- Data is fetched on the server.
- The HTML is rendered with the fetched data.
- The initial data is passed to the client via `window.__INITIAL_DATA__` for client-side rehydration.

## Using Next.js for SSR

**Next.js** is a React framework that simplifies SSR implementation. It provides built-in routing, automatic code splitting, and tools for server-side rendering.

### Key Features of Next.js for SSR

- **`getServerSideProps`**: A function to fetch data on the server for a specific page.
- **File-based Routing**: Automatically maps files in the `pages/` directory to routes.
- **Hybrid Rendering**: Allows you to mix SSR, static site generation (SSG), and client-side rendering (CSR).

### Example with Next.js

1. Install Next.js:

   ```bash
   npx create-next-app my-ssr-app
   cd my-ssr-app
   ```

2. Create a Page with SSR:

   ```tsx
   // pages/index.tsx
   import React from "react";

   const Home = ({ data }) => {
     return (
       <div>
         <h1>Server-Side Rendered Page</h1>
         <p>Data: {data.message}</p>
       </div>
     );
   };

   export async function getServerSideProps() {
     const res = await fetch("https://api.example.com/data");
     const data = await res.json();

     return {
       props: { data },
     };
   }

   export default Home;
   ```

   In this example:

   - The `getServerSideProps` function fetches data on the server.
   - The data is passed as `props` to the `Home` component.
   - The page is rendered server-side and sent to the client.

## Pros and Cons of SSR

### Advantages

1. **Better SEO**: Fully-rendered HTML improves search engine indexing.
2. **Improved Initial Load Time**: Content is visible faster because the server sends a complete HTML page.
3. **Better Performance for Low-End Devices**: The server does the heavy lifting for rendering, reducing the workload on the client.

### Disadvantages

1. **Increased Server Load**: Rendering on the server for every request can strain server resources.
2. **Slower Time-to-First-Byte (TTFB)**: Server-side rendering takes time, which may increase the TTFB for large or complex pages.
3. **Complexity**: SSR adds complexity to the application, including managing data fetching and hydration.

## When to Use SSR

Use SSR when:

- **SEO** is a priority (e.g., blogs, e-commerce sites, marketing pages).
- You need fast **initial page load times** for better user experience.
- The content is dynamic and changes frequently.

Avoid SSR when:

- SEO is not critical (e.g., dashboards, admin panels).
- You don’t have server resources to handle the extra load.
- The application is primarily interactive and relies on client-side state.
