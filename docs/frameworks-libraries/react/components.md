---
sidebar_position: 4
---

# Component Composition and Design

## Component Trees: Structuring and Nesting Components

- **Component Trees** represent the hierarchical structure of React components. They help in visualizing how data flows and components are related.
- Key considerations when structuring components:
  - **Single Responsibility Principle (SRP)**: Each component should handle a single part of the UI or functionality.
  - **Reusability**: Design components to be reusable where applicable (e.g., Button, Input).
  - **Separation of Concerns**: Divide the application into presentational components (focused on UI) and container components (managing state and logic).
  - Example:
    ```tsx
    const App = () => (
      <div>
        <Header />
        <Main>
          <Sidebar />
          <Content />
        </Main>
        <Footer />
      </div>
    );
    ```
- **Best Practices**:
  - Keep components small and focused.
  - Use meaningful names that reflect their purpose.
  - Maintain a clear hierarchy to improve readability and debugging.

## Composition vs. Inheritance

- **Composition** is the preferred approach in React. It involves combining components to build more complex UIs.

  - **`children` Props**: Pass components or elements as children to other components.

    ```tsx
    const Card = ({ children }: { children: React.ReactNode }) => (
      <div className="card">{children}</div>
    );

    const App = () => (
      <Card>
        <h1>Title</h1>
        <p>Content inside the card.</p>
      </Card>
    );
    ```

  - **Render Props**: Pass a function as a prop to dynamically determine what to render.

    ```tsx
    const DataFetcher = ({
      render,
    }: {
      render: (data: string) => JSX.Element;
    }) => {
      const data = "Fetched Data";
      return render(data);
    };

    const App = () => <DataFetcher render={(data) => <div>{data}</div>} />;
    ```

  - **Higher-Order Components (HOCs)**: A function that takes a component and returns a new component.

    ```tsx
    const withLogger = (Component: React.ComponentType) => {
      return (props: any) => {
        console.log("Rendering", Component.name);
        return <Component {...props} />;
      };
    };

    const Hello = () => <h1>Hello</h1>;
    const HelloWithLogger = withLogger(Hello);
    ```

- **Inheritance** is rarely used in React because it can make components tightly coupled and harder to maintain.

## Controlled vs. Uncontrolled Components

### Controlled Components

React controls the form elements' state. The value is stored in the component's state and updated via `onChange` handlers.

- **Use Case**: When you need to validate, manipulate, or monitor input values.
- Example:

  ```tsx
  const ControlledInput = () => {
    const [value, setValue] = React.useState("");

    return (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />
    );
  };
  ```

### Uncontrolled Components

The DOM itself maintains the form elements' state, and you access values using refs.

- **Use Case**: When minimal interaction with the input is needed (e.g., file uploads).
- Example:

  ```tsx
  const UncontrolledInput = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
      alert(inputRef.current?.value);
    };

    return (
      <div>
        <input ref={inputRef} placeholder="Type here" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  ```

- **Key Differences**:
  - Controlled components provide better control and enable real-time validation.
  - Uncontrolled components are simpler and faster to set up.

## Fragments: Returning Multiple Elements Without Extra DOM Nodes

- **What are Fragments?**

  - Fragments allow you to return multiple elements from a component without adding an extra wrapper node in the DOM.

- **Why Use Fragments?**

  - To avoid unnecessary `<div>` wrappers (commonly referred to as "div soup").
  - To keep the DOM cleaner and improve performance.

- **Syntax**:

  - Short syntax: `<>...</>`.
  - Long syntax: `<React.Fragment>...</React.Fragment>`.

- **Example**:

  ```tsx
  const FragmentExample = () => (
    <>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </>
  );
  ```

- **Key Benefits**:
  - Reduces unnecessary nodes in the DOM.
  - Improves performance in scenarios involving large component trees.
  - Enables better styling and layout management without excessive wrappers.
