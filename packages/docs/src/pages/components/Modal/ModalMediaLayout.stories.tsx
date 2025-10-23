import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import {
  Modal,
  ModalMediaLayout,
  ModalMedia,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalFooterWizard
} from "@vibe/core/next";
import { useWizard, Button, Text, Link, Flex, IconButton, Menu, TransitionView } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import mediaImage from "./assets/media-image.png";
import { withOpenedModalPreview } from "./Modal.stories.helpers";

type Story = StoryObj<typeof Modal>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Modal
});

export default {
  title: "Components/Modal [New]/Media modal",
  component: Modal,
  subcomponents: {
    ModalMediaLayout,
    ModalMedia,
    ModalHeader,
    ModalContent,
    ModalFooter,
    ModalFooterWizard,
    TransitionView
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    layout: "fullscreen",
    docs: {
      liveEdit: {
        scope: { mediaImage }
      }
    }
  }
} satisfies Meta<typeof Modal>;

export const Overview: Story = {
  decorators: [
    (Story, context) =>
      withOpenedModalPreview(Story, {
        size: "large",
        isDocsView: context.viewMode === "docs",
        allowFullViewInDocs: true
      })
  ],
  render: (args, { show, setShow, container }) => {
    return (
      <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container} {...args}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter
          primaryButton={{ text: "Confirm", onClick: () => setShow(false) }}
          secondaryButton={{ text: "Cancel", onClick: () => setShow(false) }}
        />
      </Modal>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Wizard: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { size: "large", isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow, container }) => {
    const steps = [
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>,
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>
    ];

    const { activeStep, direction, next, back, isFirstStep, isLastStep, goToStep } = useWizard({
      stepCount: steps.length
    });

    const primaryButtonText = isLastStep ? "Confirm" : "Next";

    return (
      <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onStepClick={goToStep}
          primaryButton={{ text: primaryButtonText, onClick: next }}
          secondaryButton={{ text: "Back", onClick: back, disabled: isFirstStep }}
        />
      </Modal>
    );
  }
};

export const Announcement: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { size: "large", isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow, container }) => {
    return (
      <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
          </ModalMedia>
          <ModalHeader title="Meet our new feature" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Introducing our latest feature designed to make your workflow faster and easier. For more details{" "}
              <Link inheritFontSize inlineText text="click here" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter
          primaryButton={{ text: "Got it", onClick: () => setShow(false) }}
          secondaryButton={{ text: "Dismiss", onClick: () => setShow(false) }}
        />
      </Modal>
    );
  }
};

export const HeaderWithIconButton: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { size: "large", isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow, container }) => {
    return (
      <Modal
        id="modal-media"
        show={show}
        renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />}
        size="medium"
        onClose={() => setShow(false)}
        container={container}
      >
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter
          primaryButton={{ text: "Confirm", onClick: () => setShow(false) }}
          secondaryButton={{ text: "Cancel", onClick: () => setShow(false) }}
        />
      </Modal>
    );
  }
};

export const Animation: Story = {
  render: () => {
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const transitionSteps = [
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>,
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>
    ];

    const { activeStep, direction, next, back, isFirstStep, isLastStep, goToStep } = useWizard({
      stepCount: transitionSteps.length
    });

    return (
      <>
        <Flex gap="large" style={{ paddingBlock: 40 }}>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>

        <Modal id="modal-media-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
          <ModalMediaLayout>
            <ModalMedia>
              <img src={mediaImage} alt="media placeholder" style={{ width: "100%", objectFit: "cover" }} />
            </ModalMedia>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                The media modal is ideal for introducing new features or onboarding, the user can also{" "}
                <Link inheritFontSize inlineText text="add a link" />.
              </Text>
            </ModalContent>
          </ModalMediaLayout>
          <ModalFooter
            primaryButton={{ text: "Confirm", onClick: () => setShowCenterPop(false) }}
            secondaryButton={{ text: "Cancel", onClick: () => setShowCenterPop(false) }}
          />
        </Modal>

        <Modal id="modal-media-transition" show={showTransition} size="medium" onClose={() => setShowTransition(false)}>
          <TransitionView activeStep={activeStep} direction={direction}>
            {transitionSteps}
          </TransitionView>
          <ModalFooterWizard
            activeStep={activeStep}
            stepCount={transitionSteps.length}
            onStepClick={goToStep}
            primaryButton={{ text: isLastStep ? "Confirm" : "Next", onClick: next }}
            secondaryButton={{ text: "Back", onClick: back, disabled: isFirstStep }}
          />
        </Modal>
      </>
    );
  }
};
