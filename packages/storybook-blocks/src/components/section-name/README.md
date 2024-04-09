# Section name
A name of a section in the component storybook documentation MDX file.

## Guidelines
- In MDX documents, you can create a section name by using this syntax: `##section name`.
- Each section title in a component MDX file must be linked to an anchor with the same name in the table of contents.
- For creating an item in the table of contents in an MDX file, which is called "Section name" and linked to a section name with the same value, please look at the anchor list item documentation.
- Each story should contain only these sections in the order described:
    - **Overview:** 
        - This section will briefly explain the component purpose in 2-3 short sentences and a basic story example with full controls support.
        - When you create a new story, please use our ComponentStory component.
    -  **Props:** 
        - This section will contain a list of all the component's supported props and their types and description. 
        - This list will create by using the ArgsTable storybook component with the following syntax: <ArgsTable of={Component} />
    - **Usage:**
        - This section will contain a list of technical and copy usage guidelines for creating a component that looks and functions according to our vision (the developers and designers who built the component) when implementing it.
        - This list will be implemented by using our UsageGuidelines component.
    - **Variants:**
        - This section will contain stories for showing the component different types and states. 
        - Please include only types and states implemented by passing props to the component without hard-coded appearance modifications.
        - For example, please do not include stories for hover state or pressed state in this section. This is because a developer cannot make the component look like this states when no action happens without overriding the component appearance using the className prop. 
        - When you create a new story, please use our ComponentStory component. 
        - Each story will have a related title that will be implemented using our Title component.
    - **Do's and don'ts:**
        - This section will contain "copy" best practices for correct usage of the component vs. common mistakes and how to avoid them.
        - Unlike usage guidelines, this section will only include best practices that can be compared to bad practices. 
        - Please implement the dos and don'ts by using the ComponentRules component.
    - **Use cases and examples:**
        - This section will contain stories of real examples of usage of the documented components. 
        - These stories will show examples of the component, which is worth emphasizing, as part of bigger organisms to show the component's abilities relevant to this case.
        - When you create a new story, please use our ComponentStory component. 
        - Each story will have a related title that will be implemented using our Title component.
    - **Related components:**
        - This section will show three components similar to the documented component and can be easily confused with.
        - The related components information should be implemented by using our RelatedComponent component.


## Props
not relevant for mdx files

Prop | Description
--- | ---
Children | section name
