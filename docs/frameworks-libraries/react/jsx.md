---
sidebar_position: 2
---

# JSX

## What is JSX?

- **JSX (JavaScript XML)** is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code directly in JavaScript, making it easier to define the structure of the UI and improving the readability of React components.
- JSX is not valid JavaScript; it is a syntactic sugar that is compiled into JavaScript using tools like Babel. Under the hood, JSX transforms into calls to React's `React.createElement()` method.

## Features of JSX

1. **HTML-Like Syntax**:

   - JSX looks like HTML but can embed JavaScript expressions inside `{}`.
   - Example:
     ```jsx
     const element = <h1>Hello, {user.name}!</h1>;
     ```

2. **JavaScript Integration**:

   - JSX supports embedding JavaScript expressions, loops, conditionals, and functions.
   - Example:
     ```jsx
     const numbers = [1, 2, 3, 4];
     const listItems = numbers.map((number) => <li key={number}>{number}</li>);
     ```

3. **Component Rendering**:

   - JSX is used to render React components, allowing developers to nest components inside one another.
   - Example:

     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }

     const element = <Welcome name="Abhishek" />;
     ```

4. **Attribute Handling**:

   - Attributes in JSX resemble HTML but are camelCased for consistency with JavaScript conventions. For example, `class` in HTML becomes `className` in JSX, and `onclick` becomes `onClick`.
   - Example:
     ```jsx
     const button = (
       <button className="btn-primary" onClick={handleClick}>
         Click Me
       </button>
     );
     ```

5. **JavaScript Functions and Expressions**:
   - You can pass JavaScript functions, objects, and variables into JSX using `{}`.
   - Example:
     ```jsx
     const style = { color: "blue", fontSize: 20 };
     const text = <p style={style}>This is styled text</p>;
     ```

## How JSX is Transformed

- JSX code is transformed into JavaScript using a transpiler like **Babel**. For instance:
  ```jsx
  const element = <h1>Hello, World!</h1>;
  ```
  gets converted to:
  ```javascript
  const element = React.createElement("h1", null, "Hello, World!");
  ```
- `React.createElement` creates a virtual DOM representation of the element.

## Advantages of JSX

1. **Improved Readability**:
   - JSX allows developers to write UI code that is visually similar to HTML, making it more intuitive and easier to understand.
2. **Powerful JavaScript Integration**:
   - You can use JavaScript's full power (e.g., functions, loops, conditionals) directly within JSX, providing flexibility in building dynamic UIs.
3. **Component Nesting**:
   - JSX makes it easy to nest and compose components, promoting reusable and modular code.
4. **Static Analysis**:
   - JSX allows tools like ESLint to statically analyze the code for syntax and accessibility issues.

## Common JSX Rules and Best Practices

1. **Wrapping Elements**:

   - JSX expressions must have a single root element. If you need to return multiple elements, wrap them in a parent element (e.g., `<div>`) or use React fragments (`<>...</>`).

     ```jsx
     // Invalid JSX
     return (
       <h1>Title</h1>
       <p>Description</p>
     );

     // Valid JSX
     return (
       <>
         <h1>Title</h1>
         <p>Description</p>
       </>
     );
     ```

2. **JSX Expressions Must Be Closed**:

   - All tags must be properly closed, including self-closing tags like `<img />`, `<br />`, or `<input />`.

3. **JavaScript Expressions in `{}`**:

   - Use `{}` to embed JavaScript expressions inside JSX.
     ```jsx
     const name = "Abhishek";
     const element = <h1>Hello, {name}</h1>;
     ```

4. **Class vs className**:

   - Always use `className` instead of `class` for setting CSS classes in JSX.
     ```jsx
     const button = <button className="btn-primary">Click Me</button>;
     ```

5. **Inline Styles**:

   - Inline styles in JSX are specified as objects with camelCased property names.
     ```jsx
     const style = { color: "red", backgroundColor: "yellow" };
     const element = <p style={style}>Styled Text</p>;
     ```

6. **Avoid Using String Literals for Props**:

   - Pass strings inside quotes but avoid unnecessary wrapping of JavaScript expressions in `{}` when not needed.

     ```jsx
     // Good
     const element = <input type="text" value="Hello" />;

     // Avoid
     const element = <input type="text" value={"Hello"} />;
     ```

7. **Key Attribute for Lists**:
   - Always provide a `key` attribute when rendering lists to help React efficiently update the UI.
     ```jsx
     const items = ["A", "B", "C"];
     const list = items.map((item, index) => <li key={index}>{item}</li>);
     ```

## Limitations of JSX

1. **Learning Curve**:
   - JSX introduces a new syntax that might be unfamiliar to developers who are new to React or JavaScript.
2. **Tooling Dependency**:
   - JSX requires transpilation, adding an extra step in the development process.
3. **Complexity in Large Components**:
   - Large components with deeply nested JSX can become difficult to read and maintain. Breaking components into smaller pieces helps mitigate this.

## JSX vs Traditional JavaScript

| **Feature**    | **JSX**                           | **Traditional JavaScript** |
| -------------- | --------------------------------- | -------------------------- |
| Syntax         | HTML-like with JavaScript         | Only JavaScript syntax     |
| Readability    | More intuitive and declarative    | Verbose for UI creation    |
| Transformation | Compiled to `React.createElement` | No transformation required |
