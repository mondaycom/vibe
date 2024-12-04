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
import TransitionView from "../../../../TransitionView/TransitionView";
import ModalFooterWizard from "../../../footers/ModalFooterWizard/ModalFooterWizard";
import TextField from "../../../../TextField/TextField";
import Flex from "../../../../Flex/Flex";
import Dropdown from "../../../../Dropdown/Dropdown";
import FieldLabel from "../../../../FieldLabel/FieldLabel";
import IconButton from "../../../../IconButton/IconButton";
import { Menu } from "@vibe/icons";
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
  title: "Components/Modal [New]/Side by side modal",
  component: Modal,
  subcomponents: {
    ModalSideBySideLayout,
    ModalMedia,
    ModalHeader,
    ModalContent,
    ModalFooter,
    ModalFooterWizard,
    TransitionView
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Modal>;

export const Overview: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { size: "medium", isDocsView: context.viewMode === "docs" })
  ],
  render: (args, { show, setShow }) => {
    const steps = [
      <ModalSideBySideLayout>
        <ModalHeader
          title="Side by side modal"
          description={
            <Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>
          }
        />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout>
        <ModalHeader
          title="Side by side modal"
          description={
            <Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>
          }
        />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>
    ];

    const { activeStep, direction, next, back, isFirstStep, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} {...args}>
        <TransitionView activeStep={activeStep} direction={direction} height={300}>
          {steps}
        </TransitionView>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onStepClick={goToStep}
          primaryButton={{ text: "Next", onClick: next }}
          secondaryButton={{ text: "Back", onClick: back, disabled: isFirstStep }}
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
    (Story, context) => withOpenedModalPreview(Story, { size: "medium", isDocsView: context.viewMode === "docs" })
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
      <ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Fill in the details" />
        <ModalContent>
          <Flex direction="column" gap="medium">
            <TextField title="Full name" placeholder="John Dow" />
            <TextField title="Email" placeholder="Email@monday.com" />
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Update your settings defenitions" />
        <ModalContent>
          <Flex direction="column" gap="medium" align="stretch">
            <TextField title="Fill address" placeholder="City, street, number" />
            <Flex direction="column" align="stretch">
              <FieldLabel labelText="Language preferences" />
              <Dropdown
                insideOverflowWithTransformContainer
                size="small"
                placeholder={dropdownOptions[0].label}
                options={dropdownOptions}
              />
            </Flex>
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>
    ];

    const { activeStep, direction, next, back, isFirstStep, goToStep } = useWizard({
      stepCount: steps.length
    });

    return (
      <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} style={{ height: 500 }}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard
          activeStep={activeStep}
          stepCount={steps.length}
          onStepClick={goToStep}
          primaryButton={{ text: "Next", onClick: next }}
          secondaryButton={{ text: "Back", onClick: back, disabled: isFirstStep }}
        />
      </Modal>
    );
  }
};

export const HeaderWithExtraIconButton: Story = {
  decorators: [
    (Story, context) => withOpenedModalPreview(Story, { size: "medium", isDocsView: context.viewMode === "docs" })
  ],
  render: (_, { show, setShow }) => {
    return (
      <Modal
        id="modal-sbs"
        show={show}
        renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />}
        size="large"
        onClose={() => setShow(false)}
      >
        <ModalSideBySideLayout>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
          <ModalMedia>
            <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
          </ModalMedia>
        </ModalSideBySideLayout>
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
    const [showAnchor, setShowAnchor] = useState(false);
    const [showCenterPop, setShowCenterPop] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const anchorButtonRef = useRef<HTMLButtonElement>(null);

    const transitionSteps = [
      <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>,
      <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
        </ModalMedia>
      </ModalSideBySideLayout>
    ];

    const { activeStep, direction, next, back, isFirstStep, goToStep } = useWizard({
      stepCount: transitionSteps.length
    });

    return (
      <>
        <Flex gap="large" style={{ paddingBlock: 40 }}>
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
            style={{ height: 500 }}
          >
            <ModalSideBySideLayout>
              <ModalHeader title="Modal title" />
              <ModalContent>
                <Text type="text1" align="inherit" element="p">
                  Modal content will appear here, you can custom it however you want, according to the user needs.
                  Please make sure that the content is clear for completing the relevant task.
                </Text>
              </ModalContent>
              <ModalMedia>
                <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
              </ModalMedia>
            </ModalSideBySideLayout>
            <ModalFooter
              primaryButton={{ text: "Confirm", onClick: () => setShowAnchor(false) }}
              secondaryButton={{ text: "Cancel", onClick: () => setShowAnchor(false) }}
            />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-sbs-center" show={showCenterPop} size="large" onClose={() => setShowCenterPop(false)}>
            <ModalSideBySideLayout>
              <ModalHeader title="Modal title" />
              <ModalContent>
                <Text type="text1" align="inherit" element="p">
                  Modal content will appear here, you can custom it however you want, according to the user needs.
                  Please make sure that the content is clear for completing the relevant task.
                </Text>
              </ModalContent>
              <ModalMedia>
                <img src={mediaImage} alt="side by side placeholder" style={{ width: "100%", objectFit: "cover" }} />
              </ModalMedia>
            </ModalSideBySideLayout>
            <ModalFooter
              primaryButton={{ text: "Confirm", onClick: () => setShowCenterPop(false) }}
              secondaryButton={{ text: "Cancel", onClick: () => setShowCenterPop(false) }}
            />
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal id="modal-sbs-transition" show={showTransition} size="large" onClose={() => setShowTransition(false)}>
            <TransitionView activeStep={activeStep} direction={direction} height={380}>
              {transitionSteps}
            </TransitionView>
            <ModalFooterWizard
              activeStep={activeStep}
              stepCount={transitionSteps.length}
              onStepClick={goToStep}
              primaryButton={{ text: "Next", onClick: next }}
              secondaryButton={{ text: "Back", onClick: back, disabled: isFirstStep }}
            />
          </Modal>,
          document.body
        )}
      </>
    );
  }
};
