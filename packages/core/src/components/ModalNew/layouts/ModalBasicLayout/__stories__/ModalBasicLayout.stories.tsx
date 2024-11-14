import React, { useRef, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../Modal/Modal";
import { createStoryMetaSettingsDecorator } from "../../../../../storybook";
import ModalBasicLayout from "../ModalBasicLayout";
import ModalHeader from "../../../ModalHeader/ModalHeader";
import ModalContent from "../../../ModalContent/ModalContent";
import ModalFooter from "../../../footers/ModalFooter/ModalFooter";
import Flex from "../../../../Flex/Flex";
import Button from "../../../../Button/Button";
import { createPortal } from "react-dom";
import Text from "../../../../Text/Text";
import Link from "../../../../Link/Link";
import WizardSlideshow from "../../../../WizardSlideshow/WizardSlideshow";
import ModalFooterWizard from "../../../footers/ModalFooterWizard/ModalFooterWizard";
import useWizard from "../../../../../hooks/useWizard/useWizard";
import { Checkbox } from "../../../../Checkbox";
import IconButton from "../../../../IconButton/IconButton";
import { Help } from "../../../../Icon/Icons";
import { withOpenedModalPreview } from "../../../Modal/__stories__/Modal.stories.helpers";

type Story = StoryObj<typeof Modal>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Modal
});

export default {
  title: "Feedback/Modal [New]/Basic modal",
  component: Modal,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Modal>;

export const Overview: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (args, { show, setShow }) => {
    return (
      <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)}>
        <ModalBasicLayout>
          <ModalHeader
            title="Modal title"
            description={
              <Text type={Text.types.TEXT1}>
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>
            }
          />
          <ModalContent>
            {
              <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            }
          </ModalContent>
        </ModalBasicLayout>
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

export const Sizes: Story = {
  render: () => {
    const [showSmall, setShowSmall] = useState(false);
    const [showMedium, setShowMedium] = useState(false);
    const [showLarge, setShowLarge] = useState(false);

    return (
      <>
        <Flex gap={Flex.gaps.LARGE} style={{ paddingBlock: 40 }}>
          <Button onClick={() => setShowSmall(true)}>Small</Button>
          <Button onClick={() => setShowMedium(true)}>Medium</Button>
          <Button onClick={() => setShowLarge(true)}>Large</Button>
        </Flex>
        {createPortal(
          <Modal id="modal-basic-small" show={showSmall} size="small" onClose={() => setShowSmall(false)}>
            <ModalBasicLayout>
              <ModalHeader
                title="Modal title"
                description={
                  <Text type={Text.types.TEXT1}>
                    Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                  </Text>
                }
              />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
            </ModalBasicLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-basic-medium" show={showMedium} size="medium" onClose={() => setShowMedium(false)}>
            <ModalBasicLayout>
              <ModalHeader
                title="Modal title"
                description={
                  <Text type={Text.types.TEXT1}>
                    Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                  </Text>
                }
              />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
            </ModalBasicLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-basic-large" show={showLarge} size="large" onClose={() => setShowLarge(false)}>
            <ModalBasicLayout>
              <ModalHeader
                title="Modal title"
                description={
                  <Text type={Text.types.TEXT1}>
                    Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                  </Text>
                }
              />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
            </ModalBasicLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
      </>
    );
  }
};

export const AlertModal: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (_, { show, setShow }) => {
    return (
      <Modal id="modal-basic" show={show} alertModal size="medium" onClose={() => setShow(false)}>
        <ModalBasicLayout>
          <ModalHeader title="Alert modal" />
          <ModalContent>
            This will allow closing the modal only by the close buttons and not by ESC or by clicking outside.
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
      </Modal>
    );
  }
};

export const Scroll: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (_, { show, setShow }) => {
    return (
      <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)}>
        <ModalBasicLayout>
          <ModalHeader title="Scrollable modal" />
          <ModalContent>
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task. The Basic Modal is intended for
              straightforward tasks, like selecting items or gathering basic information. Basic Modals help users focus
              on a single task without distractions. These modals do not support images or videos. When the content of
              the modal is too large to fit within the viewport, the modal content should become scrollable while the
              header and footer stay sticky. If the scroll is too long, consider switching to a different modal size or
              a different layout. Modal content will appear here, you can custom it however you want, according to the
              user needs. Please make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
      </Modal>
    );
  }
};

export const Wizard: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (_, { show, setShow }) => {
    const steps = [
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>,
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>,
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)}>
        <WizardSlideshow activeStep={activeStep} direction={direction}>
          {steps}
        </WizardSlideshow>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onDotClick={(_, newStep) => goToStep(newStep)}
          primaryButton={{ text: "Next", onClick: next, disabled: !canGoNext }}
          secondaryButton={{ text: "Back", onClick: back, disabled: !canGoBack }}
        />
      </Modal>
    );
  }
};

export const FooterWithSideAction: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (_, { show, setShow }) => {
    return (
      <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)}>
        <ModalBasicLayout>
          <ModalHeader
            title="Modal title"
            description={
              <Text type={Text.types.TEXT1}>
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>
            }
          />
          <ModalContent>
            {
              <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            }
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter
          primaryButton={{ text: "Confirm" }}
          secondaryButton={{ text: "Cancel" }}
          renderSideAction={<Checkbox label="Don't show again" />}
        />
      </Modal>
    );
  }
};

export const HeaderWithExtraIconButton: Story = {
  decorators: [(Story, context) => withOpenedModalPreview(Story, { isDocsView: context.viewMode === "docs" })],
  render: (_, { show, setShow }) => {
    return (
      <Modal
        id="modal-basic"
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
        <ModalBasicLayout>
          <ModalHeader
            title="Modal title"
            description={
              <Text type={Text.types.TEXT1}>
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>
            }
          />
          <ModalContent>
            {
              <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            }
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter
          primaryButton={{ text: "Confirm" }}
          secondaryButton={{ text: "Cancel" }}
          renderSideAction={<Checkbox label="Don't show again" />}
        />
      </Modal>
    );
  }
};

export const Animation: Story = {
  render: () => {
    const [showAnchor, setShowAnchor] = useState(false);
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const anchorButtonRef = useRef<HTMLButtonElement>(null);

    const transitionSteps = [
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>,
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>,
      <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
      </ModalBasicLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: transitionSteps.length
    });

    return (
      <>
        <Flex gap={Flex.gaps.LARGE} style={{ paddingBlock: 40 }}>
          <Button ref={anchorButtonRef} onClick={() => setShowAnchor(true)}>
            Anchor
          </Button>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>
        {createPortal(
          <Modal
            id="modal-basic-anchor"
            show={showAnchor}
            anchorElementRef={anchorButtonRef}
            size="medium"
            onClose={() => setShowAnchor(false)}
          >
            <ModalBasicLayout>
              <ModalHeader
                title="Modal title"
                description={
                  <Text type={Text.types.TEXT1}>
                    Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                  </Text>
                }
              />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
            </ModalBasicLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-basic-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
            <ModalBasicLayout>
              <ModalHeader
                title="Modal title"
                description={
                  <Text type={Text.types.TEXT1}>
                    Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                  </Text>
                }
              />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
            </ModalBasicLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal
            id="modal-basic-transition"
            show={showTransition}
            size="medium"
            onClose={() => setShowTransition(false)}
          >
            <WizardSlideshow activeStep={activeStep} direction={direction}>
              {transitionSteps}
            </WizardSlideshow>
            <ModalFooterWizard
              activeStep={activeStep}
              stepCount={transitionSteps.length}
              onDotClick={(_, newStep) => goToStep(newStep)}
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
