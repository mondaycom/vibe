# AnchorListItem
This component is displayed whenever a component's mdx file displays an item in the list.
In practice, we use lists in these files when we want to build table of contents.

## Guidelines
- Each anchor list item in a component MDX file should be linked to a section name title with the same name as the anchor list item.
- For creating an item in the table of contents in an MDX file, which is called "Section name" and linked to a section name with the same value, please create a table of contents item with the following syntax: [Section name] (# section-name)
- When anchor list item name contains multiple words - use a capital letter only for the first letter of the first word.

## Props
not relevant for mdx files

Prop | Description
--- | ---
Children | Anchor list item content

