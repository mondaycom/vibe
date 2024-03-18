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
- Please add mapping between component name and corresponding `RelatedComponent` into the `descriptionComponentsMap` which you pass to the `RelatedComponents` component.
