---
sidebar_position: 8
---

# Styling

In React, styling is an essential part of building user interfaces that are both functional and aesthetically pleasing. There are various methods to style React components, and the choice of method depends on factors like scalability, reusability, and maintainability. Three popular approaches for styling React components are **CSS-in-JS**, **CSS Modules**, and **Inline Styles**. Below is a detailed explanation of each approach:

## CSS-in-JS

**CSS-in-JS** is a modern styling approach where CSS is written directly within JavaScript, often within the same file as the React components. This pattern allows you to leverage JavaScript’s power and flexibility to dynamically modify styles and apply logic to them.

### Popular CSS-in-JS Libraries

- **styled-components**
- **Emotion**

### How CSS-in-JS Works

In CSS-in-JS, styles are written in JavaScript files, typically using template literals or JavaScript objects. These styles are scoped to the component and are applied when the component renders.

### Example using `styled-components`

```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const App = () => (
  <div>
    <Button primary>Primary Button</Button>
    <Button>Secondary Button</Button>
  </div>
);

export default App;
```

In this example:

- `styled.button` creates a styled `button` component.
- The button's background color can be dynamically changed based on the `primary` prop.
- The styles are scoped to the component, so they won't leak into other parts of the application.

### Advantages of CSS-in-JS

- **Dynamic Styles**: Easily apply dynamic styles based on component props or application state.
- **Scoped Styles**: Styles are automatically scoped to components, avoiding global style conflicts.
- **JS Logic**: You can use JavaScript logic (e.g., conditional styles, loops) inside styles.
- **No Dependency on External Stylesheets**: Keeps styles in the component, making it easier to bundle and deploy.

### Disadvantages

- **Performance**: CSS-in-JS libraries can introduce runtime overhead because styles are computed and injected at runtime.
- **Larger Bundle Size**: Including styling logic in JavaScript increases the bundle size.
- **Learning Curve**: Requires understanding of how CSS and JavaScript interact.

## CSS Modules

**CSS Modules** is a technique that allows you to write CSS that is locally scoped to the component in which it is used. With CSS Modules, class names are transformed to unique, hashed values at build time to ensure they don’t conflict with other styles in your application. This approach gives you the full power of traditional CSS, but with the added benefit of automatic scoping.

### How CSS Modules Work

When using CSS Modules, you import a CSS file as a JavaScript object. Each class name is automatically scoped to the component, and you reference styles using the object.

### Example using CSS Modules

1. **Create a CSS Module File** (e.g., `Button.module.css`):

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.buttonPrimary {
  background-color: darkblue;
}
```

2. **Import and Use in a Component**:

```jsx
import React from "react";
import styles from "./Button.module.css";

const Button = ({ primary, children }) => {
  const buttonClass = primary ? styles.buttonPrimary : styles.button;
  return <button className={buttonClass}>{children}</button>;
};

export default Button;
```

In this example:

- The `Button.module.css` file contains styles that are scoped to the `Button` component.
- The `styles` object is imported, and the class names are applied dynamically based on props.

### Advantages of CSS Modules

- **Local Scoping**: Styles are automatically scoped to the component, avoiding global conflicts.
- **Maintainability**: Keeping CSS in separate files allows for better organization, especially for larger applications.
- **Familiar Syntax**: You still use regular CSS syntax, making it easier for developers familiar with CSS.

### Disadvantages

- **No Dynamic Styles**: Unlike CSS-in-JS, you can't easily use JavaScript logic to change styles.
- **Requires Build Tools**: To work with CSS Modules, your build tool (e.g., Webpack) needs to be configured to support it.

## Inline Styles

**Inline Styles** refer to directly defining styles within the `style` attribute of JSX elements. This approach uses JavaScript objects to define styles, and the styles are applied directly to the element during rendering.

### How Inline Styles Work

In React, inline styles are specified using a JavaScript object, where the keys are camelCased CSS property names, and the values are strings representing the CSS values.

### Example of Inline Styles

```jsx
const Button = ({ primary }) => {
  const buttonStyle = {
    backgroundColor: primary ? "blue" : "gray",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Click Me</button>;
};
```

In this example:

- The `buttonStyle` object contains the styles.
- The styles are applied directly to the `button` element using the `style` attribute.

### Advantages of Inline Styles

- **Quick and Simple**: Inline styles are quick to apply for small projects or one-off styles.
- **JavaScript Power**: You can use JavaScript expressions to dynamically set the style properties based on component state, props, or logic.

### Disadvantages

- **No Pseudo-Classes or Media Queries**: Inline styles do not support pseudo-classes like `:hover`, `:active`, or media queries.
- **Cannot Handle Complex Styles**: Inline styles are not suitable for handling complex CSS, like animations or keyframes.
- **Less Maintainable**: Styles within the JSX can make the code harder to maintain, especially for large components.

## When to Prefer Each Approach

- **CSS-in-JS**:

  - Best for dynamic styles that depend on JavaScript logic (e.g., theme switching, props-based styles).
  - Ideal for smaller projects or when styling is tightly coupled with the component.
  - Great for large-scale applications where CSS scope management is critical.

- **CSS Modules**:

  - Best when you prefer to write traditional CSS but want to avoid global style conflicts.
  - Useful for medium-to-large projects where you want to maintain the separation of concerns between JavaScript and CSS.
  - Suitable for teams working with traditional CSS but need a more modular approach.

- **Inline Styles**:
  - Best for simple, one-off styles or when you need to apply styles dynamically within the component.
  - Ideal for prototyping or quick fixes.
  - Should be avoided for complex, reusable styles or styles requiring pseudo-classes and media queries.
