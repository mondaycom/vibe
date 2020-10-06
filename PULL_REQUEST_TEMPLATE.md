## Go over this checklist before submitting your Pull Request

Description: **ADD YOUR PR DESCRIPTION HERE**

STEP 1: Fulfill the description of the PR above

STEP 2: Select one of 2 main scenarios of adding the new component or editing the existing one

STEP 3: Delete checklist which you don't need

STEP 4: Go over the checklist. All checkboxes should be marked

STEP 5: Delete this instruction

STEP 6: Happy code review and merge!


### Adding new component
#### Basic
- [ ] Used plop (npm run plop) to create a new component. This command will create a folder for your component and will update index.js file
- [ ] PR has description
- [ ] New component is functional and using React Hooks. 
- [ ] New React Hooks were added to /src/hooks folder (optional)
- [ ] Component defines PropTypes
- [ ] There is Readme for the component, which explains the main aspects of how to use it
#### Style
- [ ] Styles are added to NewComponent.scss file inside of the NewComponent folder
- [ ] CSS selectors are named using [BEM convention](http://getbem.com/naming/) 
- [ ] Design is compatible with [Monday Design System](https://design.monday.com/)
#### Storybook
- [ ] Stories were added to /src/NewComponent/__stories__/NewComponent.stories.js file
- [ ] Stories include sandbox story with knobs for each property
- [ ] Stories include all flows of using the component
- [ ] Component passed Accessibility Plugin checks
#### Tests
- [ ] Tests are compliant with TESTING_README.md instructions



### Updating existing component
#### Basic
- [ ] PR has description
- [ ] Changes to the component are backward compatible (including selectors structure). If not - add to the title of the PR "BREAKABLE_CHANGE""
- [ ] All changes to the component are reflected in the ReadMe
- [ ] If component is old and was not compliant with the latest guidelines - it was fixed (optional) 
#### Style
- [ ] CSS selectors are named using [BEM convention](http://getbem.com/naming/) 
- [ ] Design is compatible with [Monday Design System](https://design.monday.com/)
#### Storybook
- [ ] All the changes to the component should be reflected in the Storybook.
- [ ] Component passed Accessibility Plugin checks
#### Tests
- [ ] All current tests are passing
- [ ] New functionality is covered with tests
- [ ] Tests are compliant with TESTING_README.md instructions


