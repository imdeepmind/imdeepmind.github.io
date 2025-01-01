---
sidebar_position: 3
---

# Props

- **Props** (short for "properties") are a core concept in React. They are used to pass data from a parent component to a child component.
- Props are **read-only** and are meant to make React components dynamic by customizing their behavior or appearance based on the data passed to them.

## Characteristics of Props

1. **Immutable**:

   - Props cannot be modified by the receiving component. They are immutable, meaning they are read-only and cannot be changed within the child component.

2. **Unidirectional Data Flow**:

   - Data flows from the parent component to the child component in a **one-way direction** (top-down). Child components cannot directly modify the props they receive.

3. **Customizable Components**:

   - Props allow components to be reusable and dynamic by providing them with unique data each time they are used.

4. **JavaScript Expressions**:
   - You can pass any valid JavaScript expression, such as strings, numbers, arrays, objects, functions, and even other React components, as props.

## How to Use Props

### Passing Props to a Component

Props are passed as attributes to a component, similar to how attributes are used in HTML elements.

Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Abhishek" />;
```

Here:

- The `name` attribute is a prop being passed to the `Welcome` component.
- The value `"Abhishek"` is the data being passed as the prop.

### Accessing Props

Props are accessed in the child component via the `props` object.

Example:

```jsx
function Greeting(props) {
  return (
    <p>
      Good {props.timeOfDay}, {props.userName}!
    </p>
  );
}

const element = <Greeting timeOfDay="Morning" userName="Abhishek" />;
```

Output:

```
Good Morning, Abhishek!
```

### Default Props

Default props provide default values for props when no value is explicitly passed by the parent component.

Example:

```jsx
function Button(props) {
  return <button>{props.label}</button>;
}

Button.defaultProps = {
  label: "Click Me",
};

const element = <Button />; // Uses default prop "Click Me"
```

### Destructuring Props

To make the code cleaner and easier to read, you can destructure props directly in the function signature or inside the component.

Example:

```jsx
// Without destructuring
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// With destructuring
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

const element = <Welcome name="Abhishek" />;
```

## Props with Functional Components vs Class Components

- In **functional components**, props are passed as an argument to the component function:

  ```jsx
  function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  ```

- In **class components**, props are accessed using `this.props`:
  ```jsx
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  ```

### Passing Functions as Props

Props can also pass functions from a parent to a child component, allowing the child component to communicate with the parent (e.g., to trigger an event or callback).

Example:

```jsx
function ChildComponent(props) {
  return <button onClick={props.handleClick}>Click Me</button>;
}

function ParentComponent() {
  const showMessage = () => {
    alert("Button clicked!");
  };

  return <ChildComponent handleClick={showMessage} />;
}
```

### Passing Children as Props (`props.children`)

The `props.children` property is a special prop that allows you to pass child elements to a component. It is used to render the content inside a component's opening and closing tags.

Example:

```jsx
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>This is a title</h1>
      <p>This is a description</p>
    </Wrapper>
  );
}
```

Output:

```html
<div class="wrapper">
  <h1>This is a title</h1>
  <p>This is a description</p>
</div>
```

### Prop Types and Validation

To ensure that the correct types of props are being passed to a component, React provides the `prop-types` library for runtime validation.

1. **Installing PropTypes**:

   ```bash
   npm install prop-types
   ```

2. **Using PropTypes**:

   ```jsx
   import PropTypes from "prop-types";

   function Button({ label, onClick }) {
     return <button onClick={onClick}>{label}</button>;
   }

   Button.propTypes = {
     label: PropTypes.string.isRequired,
     onClick: PropTypes.func,
   };
   ```

3. **Supported Prop Types**:
   - `PropTypes.string`
   - `PropTypes.number`
   - `PropTypes.bool`
   - `PropTypes.func`
   - `PropTypes.array`
   - `PropTypes.object`
   - `PropTypes.node` (anything that can be rendered)
   - `PropTypes.element` (React element)
   - `PropTypes.any`

### Common Patterns and Best Practices

1. **Default Values with `defaultProps`**:

   - Always define default values for props to ensure predictable behavior.
   - Example:
     ```jsx
     MyComponent.defaultProps = {
       title: "Default Title",
     };
     ```

2. **Prop Type Validation**:

   - Use `prop-types` to validate props and catch bugs during development.

3. **Avoid Passing Excessive Props**:

   - Only pass the props that are necessary. Avoid overloading components with unnecessary data.

4. **Use Destructuring for Readability**:

   - Destructure props to make your code cleaner.

5. **Use Callback Functions for Events**:

   - Pass functions as props for handling events in child components.

6. **Pass Complex Data Using Objects**:
   - If a component requires multiple related props, consider wrapping them in an object.
     ```jsx
     const user = { name: "Abhishek", age: 25 };
     <Profile user={user} />;
     ```

### Props vs State

| **Feature**        | **Props**                        | **State**                          |
| ------------------ | -------------------------------- | ---------------------------------- |
| **Definition**     | Data passed from parent to child | Data managed within a component    |
| **Mutability**     | Immutable (read-only)            | Mutable (can be changed)           |
| **Scope**          | Passed down from parent to child | Local to the component             |
| **Responsibility** | Managed by the parent component  | Managed by the component itself    |
| **Usage**          | Used for customization           | Used for dynamic, interactive data |
