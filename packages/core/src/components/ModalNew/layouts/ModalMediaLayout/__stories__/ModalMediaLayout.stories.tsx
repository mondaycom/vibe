import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../Modal/Modal";
import { createStoryMetaSettingsDecorator } from "../../../../../storybook";
import ModalHeader from "../../../ModalHeader/ModalHeader";
import ModalContent from "../../../ModalContent/ModalContent";
import ModalMedia from "../../ModalMedia";
import { mediaImage } from "./assets";
import ModalFooter from "../../../footers/ModalFooter/ModalFooter";
import ModalMediaLayout from "../ModalMediaLayout";
import Text from "../../../../Text/Text";
import Link from "../../../../Link/Link";
import useWizard from "../../../../../hooks/useWizard/useWizard";
import TransitionView from "../../../../TransitionView/TransitionView";
import ModalFooterWizard from "../../../footers/ModalFooterWizard/ModalFooterWizard";
import IconButton from "../../../../IconButton/IconButton";
import { Help } from "../../../../Icon/Icons";
import Flex from "../../../../Flex/Flex";
import Button from "../../../../Button/Button";
import { createPortal } from "react-dom";
import { withOpenedModalPreview } from "../../../Modal/__stories__/Modal.stories.helpers";

type Story = StoryObj<typeof Modal>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Modal
});

export default {
  title: "Feedback/Modal [New]/Media modal",
  component: Modal,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Modal>;

export const Overview: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { large: true, isDocsView: context.viewMode === "docs" })
  ],
  render: (args, { show, setShow }) => {
    return (
      <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)}>
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{ maxWidth: "none", width: "105%" }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
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
    (Story, context) => withOpenedModalPreview(Story, { large: true, isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow }) => {
    const steps = [
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ maxWidth: "none", width: "105%" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>,
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" style={{ maxWidth: "none", width: "105%" }} />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-media" show={show} size="medium" onClose={() => setShow(false)}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onStepClick={(_, newStep) => goToStep(newStep)}
          primaryButton={{ text: "Next", onClick: next, disabled: !canGoNext }}
          secondaryButton={{ text: "Back", onClick: back, disabled: !canGoBack }}
        />
      </Modal>
    );
  }
};

export const HeaderWithExtraIconButton: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { large: true, isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow }) => {
    return (
      <Modal
        id="modal-media"
        show={show}
        renderHeaderAction={
          <IconButton
            icon={Help}
            size={IconButton.sizes.SMALL}
            kind={IconButton.kinds.TERTIARY}
            ariaLabel="Help with creating a modal"
          />
        }
        size="medium"
        onClose={() => setShow(false)}
      >
        <ModalMediaLayout>
          <ModalMedia>
            <img src={mediaImage} alt="media placeholder" style={{ maxWidth: "none", width: "105%" }} />
          </ModalMedia>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              The media modal is ideal for introducing new features or onboarding, the user can also{" "}
              <Link inheritFontSize inlineText text="add a link" />.
            </Text>
          </ModalContent>
        </ModalMediaLayout>
        <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
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
          <img src={mediaImage} alt="media placeholder" />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
            We have made some changes to our modal component. Keep reading to see what improvements we made.
          </Text>
        </ModalContent>
      </ModalMediaLayout>,
      <ModalMediaLayout>
        <ModalMedia>
          <img src={mediaImage} alt="media placeholder" />
        </ModalMedia>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
            Now the modal can also allow wizard process, when including stepper in the modal footer, it also contain an
            animation.
          </Text>
        </ModalContent>
      </ModalMediaLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: transitionSteps.length
    });

    return (
      <>
        <Flex gap={Flex.gaps.LARGE} style={{ paddingBlock: 40 }}>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>
        {createPortal(
          <Modal id="modal-media-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
            <ModalMediaLayout>
              <ModalMedia>
                <img src={mediaImage} alt="media placeholder" />
              </ModalMedia>
              <ModalHeader title="Modal title" />
              <ModalContent>
                <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                  The media modal is ideal for introducing new features or onboarding, the user can also{" "}
                  <Link inheritFontSize inlineText text="add a link" />.
                </Text>
              </ModalContent>
            </ModalMediaLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal
            id="modal-media-transition"
            show={showTransition}
            size="medium"
            onClose={() => setShowTransition(false)}
          >
            <TransitionView activeStep={activeStep} direction={direction}>
              {transitionSteps}
            </TransitionView>
            <ModalFooterWizard
              activeStep={activeStep}
              stepCount={transitionSteps.length}
              onStepClick={(_, newStep) => goToStep(newStep)}
              primaryButton={{ text: "Next", onClick: next, disabled: !canGoNext }}
              secondaryButton={{ text: "Back", onClick: back, disabled: !canGoBack }}
            />
          </Modal>,
          document.body
        )}
      </>
    );
  }
};
