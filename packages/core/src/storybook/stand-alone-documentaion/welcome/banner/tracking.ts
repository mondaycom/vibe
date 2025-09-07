export const BANNER_EVENTS = {
  MONDAY_VIBE_BANNER_VIEWED: "monday_vibe_banner_viewed",
  MONDAY_VIBE_BANNER_BUTTON_CLICKED: "monday_vibe_banner_button_clicked"
} as const;

export const trackEvent = ({ name, data }: { name: string; data: Record<string, unknown> }): void => {
  if (process.env.NODE_ENV === "development") {
    console.log("[BigBrain Event]", { name, data });
    return;
  }

  fetch("https://track.bigbrain.me/prod/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "dapulse"
    },
    body: JSON.stringify({
      name,
      data
    })
  }).catch(() => {});
};

export function trackBannerViewed(): void {
  trackEvent({
    name: BANNER_EVENTS.MONDAY_VIBE_BANNER_VIEWED,
    data: {}
  });
}

export function trackBannerButtonClicked(): void {
  trackEvent({
    name: BANNER_EVENTS.MONDAY_VIBE_BANNER_BUTTON_CLICKED,
    data: {}
  });
}
