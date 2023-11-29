import { Link, Tip } from "vibe-storybook-components";

export const TipMultipleAvatarsTogether = () => (
  <Tip title="Mutiple avatars togethers?">
    If you want to stack multiple avatars together, check out
    <Link href="/?path=/docs/media-avatar-avatargroup--docs" size={Link.sizes.SMALL}>
      AvatarGroup
    </Link>
    component
  </Tip>
);
