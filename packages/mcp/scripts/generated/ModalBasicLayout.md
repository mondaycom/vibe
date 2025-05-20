# Storybook Code Examples

## Overview

```tsx
return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container} {...args}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} />
      </Modal>;
```

## Sizes

```tsx
const [showSmall, setShowSmall] = useState(false);
const [showMedium, setShowMedium] = useState(false);
const [showLarge, setShowLarge] = useState(false);
return <>
        <Flex gap="large" style={{
    paddingBlock: 40
  }}>
          <Button onClick={() => setShowSmall(true)}>Small</Button>
          <Button onClick={() => setShowMedium(true)}>Medium</Button>
          <Button onClick={() => setShowLarge(true)}>Large</Button>
        </Flex>

        <Modal id="modal-basic-small" show={showSmall} size="small" onClose={() => setShowSmall(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowSmall(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowSmall(false)
    }} />
        </Modal>

        <Modal id="modal-basic-medium" show={showMedium} size="medium" onClose={() => setShowMedium(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowMedium(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowMedium(false)
    }} />
        </Modal>

        <Modal id="modal-basic-large" show={showLarge} size="large" onClose={() => setShowLarge(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowLarge(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowLarge(false)
    }} />
        </Modal>
      </>;
```

## AlertModal

```tsx
return <Modal id="modal-basic" show={show} alertModal size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Alert modal" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              This will allow closing the modal only by the close buttons and not by ESC or by clicking outside.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} />
      </Modal>;
```

## Scroll

```tsx
return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container} style={{
  height: 400
}}>
        <ModalBasicLayout>
          <ModalHeader title="Scrollable modal" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
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
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} />
      </Modal>;
```

## Wizard

```tsx
const steps = [<ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>];
const {
  activeStep,
  direction,
  next,
  back,
  isFirstStep,
  isLastStep,
  goToStep
} = useWizard({
  stepCount: steps.length
});
const primaryButtonText = isLastStep ? "Confirm" : "Next";
return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{
    text: primaryButtonText,
    onClick: next
  }} secondaryButton={{
    text: "Back",
    onClick: back,
    disabled: isFirstStep
  }} />
      </Modal>;
```

## FooterWithExtraContent

```tsx
return <Modal id="modal-basic" show={show} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} renderSideAction={<Checkbox label="Don't show again" />} />
      </Modal>;
```

## Confirmation

```tsx
return <Modal id="modal-basic" show={show} size="small" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Want to delete?" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              There are other tasks connected to this task. Deleting this task will remove any existing connections. It
              will be kept in trash for 30 days.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} />
      </Modal>;
```

## HeaderWithIconButton

```tsx
return <Modal id="modal-basic" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="medium" onClose={() => setShow(false)} container={container}>
        <ModalBasicLayout>
          <ModalHeader title="Modal title" description={<Text type="text1">
                Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
              </Text>} />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
        </ModalBasicLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} renderSideAction={<Checkbox label="Don't show again" />} />
      </Modal>;
```

## Animation

```tsx
const [showAnchor, setShowAnchor] = useState(false);
const [showCenterPop, setShowCenterPop] = useState(false);
const [showTransition, setShowTransition] = useState(false);
const anchorButtonRef = useRef<HTMLButtonElement>(null);
const transitionSteps = [<ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>, <ModalBasicLayout>
        <ModalHeader title="Modal with wizard" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
      </ModalBasicLayout>];
const {
  activeStep,
  direction,
  next,
  back,
  isFirstStep,
  isLastStep,
  goToStep
} = useWizard({
  stepCount: transitionSteps.length
});
return <>
        <Flex gap="large" style={{
    paddingBlock: 40
  }}>
          <Button ref={anchorButtonRef} onClick={() => setShowAnchor(true)}>
            Anchor
          </Button>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>

        <Modal id="modal-basic-anchor" show={showAnchor} anchorElementRef={anchorButtonRef} size="medium" onClose={() => setShowAnchor(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowAnchor(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowAnchor(false)
    }} />
        </Modal>

        <Modal id="modal-basic-center" show={showCenterPop} size="medium" onClose={() => setShowCenterPop(false)}>
          <ModalBasicLayout>
            <ModalHeader title="Modal title" description={<Text type="text1">
                  Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
                </Text>} />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
          </ModalBasicLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowCenterPop(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowCenterPop(false)
    }} />
        </Modal>

        <Modal id="modal-basic-transition" show={showTransition} size="medium" onClose={() => setShowTransition(false)}>
          <TransitionView activeStep={activeStep} direction={direction}>
            {transitionSteps}
          </TransitionView>
          <ModalFooterWizard activeStep={activeStep} stepCount={transitionSteps.length} onStepClick={goToStep} primaryButton={{
      text: isLastStep ? "Confirm" : "Next",
      onClick: next
    }} secondaryButton={{
      text: "Back",
      onClick: back,
      disabled: isFirstStep
    }} />
        </Modal>
      </>;
```

