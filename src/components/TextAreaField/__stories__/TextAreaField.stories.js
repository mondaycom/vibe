import {createComponentTemplate} from "vibe-storybook-components";
import TextAreaField from "../TextAreaField";
import {createStoryMetaSettingsDecorator} from "../../../storybook";
import styles from "./TextAreaField.stories.module.scss";
import {Check} from "../../Icon/Icons";
import cx from "classnames";

const metaSettings = createStoryMetaSettingsDecorator({
    component: TextAreaField, enumPropNamesArray: [], // List enum props here
    iconPropNamesArray: ["labelIconName"], // List props that are typed as icons here
    actionPropsArray: [] // List the component's actions here
});

export default {
    title: "Inputs/TextAreaField",
    component: TextAreaField,
    argTypes: metaSettings.argTypes,
    decorators: metaSettings.decorators
};

const textAreaFieldTemplate = createComponentTemplate(TextAreaField);

export const Overview = {
    render: textAreaFieldTemplate.bind({}), name: "Overview", args: {
        title: "Name",
        showCharCount: true,
        placeholder: "Placeholder text here",
        debounce: 200,
        rows: 10,
        cols: 10,
        minLength: 1,
        maxLength: 100000,
        onKeyDown: (e) => console.log("onKeyDown", e.key),
    }
};


export const States = {
        render: () => (
            <div className={styles.mondayStorybookTextAreaField} style={{width: "100%"}}>
                <div
                    className={cx(styles.mondayStorybookTextAreaFieldColumnWrapper, styles.mondayStorybookTextAreaFieldSpacing)}>
                    <TextAreaField title="Name" placeholder="Disabled" cols={10} rows={10} minLength={10} maxLength={10}
                                   disabled/>
                    <TextAreaField title="Name" placeholder="With label icon" cols={10} rows={10} minLength={10}
                                   maxLength={10}
                                   labelIconName={Check}/>
                    <TextAreaField title="Name" rows={10} cols={10} minLength={10} maxLength={10} validation={{
                        status: "success", text: "Success"
                    }}/>
                    <TextAreaField title="Name" placeholder="Error" rows={10} cols={10} minLength={10} maxLength={10}
                                   validation={{
                                       status: "error", text: "error"
                                   }}/>
                </div>
            </div>),
        name: "States"
    }
;
