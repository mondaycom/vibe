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
descriptionComponentsMap | A Map object that maps between the component name and the <RelatedComponent> instance that describes it.

## Technical notes
- For each component that `RelatedComponents` support, there is a constant that describes the component's name in the `descriptionComponentsMap`.
- The description component should be a RelatedComponent instance - read the component's readme for more details.
