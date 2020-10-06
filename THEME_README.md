# Theming
Theming is the ability of our components to change their appearance according to the user's request for example - dark, light theme are pretty common but there are more advanced themes such as two tone and or color blind themes.

### Key Guidelines for supporting themes
1. When styling a component you should be theme agnostic - you should not be aware of the current theme.
2. You should not import colors by their name (snow_white, basic_blue...), you should import colors by their theme name - (primaryHoverColor, primaryTextColor...)
3. Use the `theme-prop` helper mixin to use a theme. (theme-prop is our mixing for supporting ie11)

### How we implemented themes
Our theme mechanism is based on [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), CSS variables are a very powerful tool to create dynamic css variables (it is not supported on ie11 - we have a fallback for it).
We define our initial styling at the body/root element level - doing so we are exposing our css variables (colors) to all child elements. When we want to apply a specific theme we simply add the theme class to a common ancestor (body for example) and all the components should change their appearance.

#### Creating a theme.
We extracted our css variables to a different repo (@mondaydotcomorg/monday-ui-style)
In order to create a new theme you need to override all of the keys (the list of keys can be found in the monday-ui-style repo)

#### Adding a new variable to a theme
Adding a key should be done in the @mondaydotcomorg/monday-ui-style repo

### IE11 support
As IE 11 is at it's final breath we don't want to invest too much time to support it but we do have around 3% usage in ie so in order to do so we will show the default theme when using ie 11. In order to achive that please use the `theme-prop`

### Theme example:
```css

body {  
  --primary-text-color: var(--color-mud_black);  
  --positive-color: var(--color-success);  
  --negative-color: var(--color-error);  
  --primary-border-color: var(--color-explosive);  
  --placeholder-color: var(--color-explosive);  
  --icon-color: var(--color-explosive);  
  --icon-color-hover: var(--color-blackish);  
  --primary-active-color: var(--color-basic_blue);  
}  
  
.compass-color-blind0theme {  
  --primary-text-color: white;  
  --positive-color: green;  
  --negative-color: red;  
  --primary-border-color: black;  
  --placeholder-color: black;  
  --icon-color: black;  
  --icon-color-hover: grey;  
  --primary-active-color: blue;  
}

```
