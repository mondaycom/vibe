import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { AccordionItem, Accordion } from "../../../../../components";
import styles from "./accordion-description.module.scss";

export const AccordionDescription = () => {
  const component = useMemo(() => {
    return (
      <Accordion className={styles.smallWrapper}>
        <AccordionItem title="Notifications">
          <div className={styles.smallContent} />
        </AccordionItem>
        <AccordionItem title="Setting">
          <div className={styles.smallContent} />
        </AccordionItem>
      </Accordion>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Accordion"
      href="/?path=/docs/data-display-accordion--overview"
      description="Accordion is a vertically stacked list of items. Each item can be expanded or collapsed to reveal the content within with that item."
    />
  );
};
