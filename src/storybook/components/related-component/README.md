# RelatedComponent
Component description - will contain a textual description alongside a basic live example of the component.

## Guidelines
- There is no unique syntax for creating a RelatedComponent component in MDX files. Therefore, use the component as you would in a regular JSX file.
- Each description must contain both a textual description and a visual example (not one of them).
- The visual example must be an instance of the component itself and not an image or a different element.

## Props

Prop | Description
--- | ---
title | The described component name
component | an instance of the described component
description / a textual description of the component purpose

## Technical notes
- Please add a constant that describes the described component's name in the file: `related-components\component-description-map.js`. 
- Please add mapping between the new constant component name to an instance of the RelatedComponent in  `related-components\component-description-map.js`.
