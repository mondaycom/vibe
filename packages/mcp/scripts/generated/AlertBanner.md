# Storybook Code Examples

## Overview

```tsx
alertBannerTemplate = (args: AlertBannerProps) => {
  return <AlertBanner {...args}>
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>;
}
```

## Types

```tsx
<div className="monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container">
      <AlertBanner>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="positive">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="negative">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="warning">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor="dark">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </div>
```

## Alert Banner with button

```tsx
<AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>
```

## Alert Banner with link

```tsx
<AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>
```

## Alert banner as an announcement

```tsx
<AlertBanner backgroundColor="dark" className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>
```

## Alert banner as an opportunity to upgrade

```tsx
<AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>
```

## Overflow text

```tsx
<AlertBanner className="monday-storybook-alert-banner_small-container">
      <AlertBannerText text="This is a really long alert..." />
      <AlertBannerLink text="Call to action" href="https://monday.com" />
    </AlertBanner>
```

