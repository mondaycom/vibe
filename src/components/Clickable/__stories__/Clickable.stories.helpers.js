import { Link, Tip } from "vibe-storybook-components";

export const TipHookSolution = () => (
  <Tip title="Check out our hook solution for this use case">
    {`If you'd like to set clickable functionality on a specific element inside your React component instead of using a 
    wrapper, please, take a look on our`}
    <Link size={Link.sizes.SMALL} href="/?path=/docs/hooks-useclickableprops--overview">
      useClickableProps
    </Link>
    hook.
  </Tip>
);
