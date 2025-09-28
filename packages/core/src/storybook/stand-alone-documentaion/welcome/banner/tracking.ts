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

export function trackBannerButtonClicked(): void {
  trackEvent({
    name: "ai_app_design_system_redirect",
    data: {}
  });
}
