# RelatedComponents
A list of components are similar in appearance or functionality to the documented component, and therefore, sometimes readers can easily confuse them.

## Guidelines
- There is no unique syntax for creating a RelatedComponents component in MDX files. Therefore, use the component as you would in a regular JSX file.
- Each instance of RelatedComponents should contain descriptions of only three components.


## Props

Prop | Description
--- | ---
title | the tip title
componentsNames | An array of strings so that each string is a constant representing the name of the component we want to display its description.

## Technical notes
- For each component that RelatedComponents support, there is a constant that describes the component's name in the file: `related-components\component-description-map.js`. 
- The file `related-components\component-description-map.js` also includes mapping for all the described components between the constant component name to an instance of a `RelatedComponent` that include this component description and live example.
- If you want to add a description to a non-existent component, build a description component and put it in the path: `related-components\descriptions` and add the new constant and description to `related-components\component-description-map.js`.
- The description component will be a Related Component instance - read the component's readme for more details.
