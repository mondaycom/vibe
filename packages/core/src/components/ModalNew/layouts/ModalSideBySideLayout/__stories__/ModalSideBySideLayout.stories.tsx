import React, { useRef, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../Modal/Modal";
import { createStoryMetaSettingsDecorator } from "../../../../../storybook";
import { withOpenedModalPreview } from "../../../Modal/__stories__/Modal.stories.helpers";
import ModalHeader from "../../../ModalHeader/ModalHeader";
import ModalContent from "../../../ModalContent/ModalContent";
import ModalSideBySideLayout from "../ModalSideBySideLayout";
import ModalMedia from "../../ModalMedia";
import { mediaImage } from "./assets";
import useWizard from "../../../../../hooks/useWizard/useWizard";
import WizardSlideshow from "../../../../WizardSlideshow/WizardSlideshow";
import ModalFooterWizard from "../../../footers/ModalFooterWizard/ModalFooterWizard";
import TextField from "../../../../TextField/TextField";
import Flex from "../../../../Flex/Flex";
import Dropdown from "../../../../Dropdown/Dropdown";
import FieldLabel from "../../../../FieldLabel/FieldLabel";
import IconButton from "../../../../IconButton/IconButton";
import { Help } from "../../../../Icon/Icons";
import ModalFooter from "../../../footers/ModalFooter/ModalFooter";
import Button from "../../../../Button/Button";
import { createPortal } from "react-dom";
import Text from "../../../../Text/Text";
import Link from "../../../../Link/Link";

type Story = StoryObj<typeof Modal>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Modal
});

export default {
  title: "Feedback/Modal [New]/Side by side modal",
  component: Modal,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Modal>;

export const Overview: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { large: true, isDocsView: context.viewMode === "docs" })
  ],
  render: (args, { show, setShow }) => {
    const steps = [
      <ModalSideBySideLayout key={0}>
        <ModalHeader
          title="Side by side modal"
          description={
            <Text type={Text.types.TEXT1}>
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>
          }
        />
        <ModalContent>
          <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout key={1}>
        <ModalHeader
          title="Side by side modal"
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
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)}>
        <WizardSlideshow activeStep={activeStep} direction={direction}>
          {steps}
        </WizardSlideshow>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onStepClick={(_, newStep) => goToStep(newStep)}
          primaryButton={{ text: "Next", onClick: next, disabled: !canGoNext }}
          secondaryButton={{ text: "Back", onClick: back, disabled: !canGoBack }}
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
    (Story, context) => withOpenedModalPreview(Story, { large: true, isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow }) => {
    const dropdownOptions = [
      {
        label: "English",
        value: "en"
      },
      {
        label: "Hebrew",
        value: "he"
      }
    ];

    const steps = [
      <ModalSideBySideLayout key={0}>
        <ModalHeader title="Modal with wizard" description="Fill in the details" />
        <ModalContent>
          <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
            <TextField title="Full name" placeholder="John Dow" />
            <TextField title="Email" placeholder="Email@monday.com" />
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout key={1}>
        <ModalHeader title="Modal with wizard" description="Update your settings defenitions" />
        <ModalContent>
          <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.STRETCH}>
            <TextField title="Fill address" placeholder="City, street, number" />
            <Flex direction={Flex.directions.COLUMN} align={Flex.align.STRETCH}>
              <FieldLabel labelText="Language preferences" />
              <Dropdown size={Dropdown.sizes.SMALL} placeholder={dropdownOptions[0].label} options={dropdownOptions} />
            </Flex>
          </Flex>
          <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.STRETCH}>
            <TextField title="Fill address" placeholder="City, street, number" />
            <Flex direction={Flex.directions.COLUMN} align={Flex.align.STRETCH}>
              <FieldLabel labelText="Language preferences" />
              <Dropdown size={Dropdown.sizes.SMALL} placeholder={dropdownOptions[0].label} options={dropdownOptions} />
            </Flex>
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>
    ];

    const { activeStep, direction, next, back, canGoNext, canGoBack, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)}>
        <WizardSlideshow activeStep={activeStep} direction={direction}>
          {steps}
        </WizardSlideshow>
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
        id="modal-sbs"
        show={show}
        renderHeaderAction={
          <IconButton
            icon={Help}
            size={IconButton.sizes.SMALL}
            kind={IconButton.kinds.TERTIARY}
            ariaLabel="Help with creating a modal"
          />
        }
        size="large"
        onClose={() => setShow(false)}
      >
        <ModalSideBySideLayout>
          <ModalHeader title="Modal title" />
          <ModalContent>
            {
              <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            }
          </ModalContent>
          <ModalMedia>
            <img src={mediaImage} alt="side by side placeholder" />
          </ModalMedia>
        </ModalSideBySideLayout>
        <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
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
      <ModalSideBySideLayout key={0}>
        <ModalHeader title="Modal title" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout key={1}>
        <ModalHeader title="Modal title" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout key={2}>
        <ModalHeader title="Modal title" />
        <ModalContent>
          {
            <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          }
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" />
        </ModalMedia>
      </ModalSideBySideLayout>
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
            id="modal-sbs-anchor"
            show={showAnchor}
            anchorElementRef={anchorButtonRef}
            size="large"
            onClose={() => setShowAnchor(false)}
          >
            <ModalSideBySideLayout>
              <ModalHeader title="Modal title" />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
              <ModalMedia>
                <img src={mediaImage} alt="side by side placeholder" />
              </ModalMedia>
            </ModalSideBySideLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-sbs-center" show={showCenterPop} size="large" onClose={() => setShowCenterPop(false)}>
            <ModalSideBySideLayout>
              <ModalHeader title="Modal title" />
              <ModalContent>
                {
                  <Text type={Text.types.TEXT1} align={Text.align.INHERIT} element="p">
                    Modal content will appear here, you can custom it however you want, according to the user needs.
                    Please make sure that the content is clear for completing the relevant task.
                  </Text>
                }
              </ModalContent>
              <ModalMedia>
                <img src={mediaImage} alt="side by side placeholder" />
              </ModalMedia>
            </ModalSideBySideLayout>
            <ModalFooter primaryButton={{ text: "Confirm" }} secondaryButton={{ text: "Cancel" }} />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-sbs-transition" show={showTransition} size="large" onClose={() => setShowTransition(false)}>
            <WizardSlideshow activeStep={activeStep} direction={direction}>
              {transitionSteps}
            </WizardSlideshow>
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
