import React from "react";
import { addons } from "@storybook/manager-api";
import { ADDON_ID, STORAGE_KEY } from "./consts";
import NotificationLink from "./NotificationLink";
import NotificationText from "./NotificationText";

addons.register(ADDON_ID, api => {
  const notifications = [
    {
      id: "welcome-v3",
      content: {
        headline: "Welcome to Vibe 3!",
        subHeadline: (
          <NotificationText>
            This is our new major. If you're looking for Vibe v2 docs, please{" "}
            <NotificationLink href="/v2">click here</NotificationLink>
          </NotificationText>
        )
      }
    },
    {
      id: "new-modal",
      content: {
        headline: "Did you got to check our new Modal?",
        subHeadline: "Click here to go to the documentation"
      },
      link: "/docs/feedback-modal-new"
    }
  ];

  const dismissedNotifications = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  notifications
    .filter(({ id }) => !dismissedNotifications.includes(id))
    .reverse()
    .forEach(({ id, content, link }) => {
      api.addNotification({
        id,
        content,
        link,
        onClear: options => {
          if (!options.dismissed) return;
          localStorage.setItem(STORAGE_KEY, JSON.stringify([...dismissedNotifications, id]));
        }
      });
    });
});
