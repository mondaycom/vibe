import React, { useState, useEffect, useCallback } from "react";
import styles from "./TableOfContents.module.scss";
import { Flex, IconButton } from "@vibe/core";
import { Timeline } from "@vibe/icons";
import cx from "classnames";

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [activeHeader, setActiveHeader] = useState("");

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  useEffect(() => {
    const contentElement = document.querySelector("#storybook-docs");
    const foundHeaders = Array.from(contentElement.getElementsByTagName("h2"))
      .filter((h: HTMLElement) => {
        return Boolean(h.id);
      })
      .map(h => {
        return { id: h.id, text: h.textContent || "", element: h };
      })
      // limit to 15 headers
      .slice(0, 15);
    setHeaders(foundHeaders);
  }, [isOpen]);

  const handleScroll = useCallback(() => {
    let currentActiveHeader = "";
    // Find the header that is closest to the top of the viewport
    for (let i = headers.length - 1; i >= 0; i--) {
      const header = headers[i];
      if (header.element) {
        const rect = header.element.getBoundingClientRect();
        // Check if the header is at or above the top of the viewport (with a small offset)
        // or if it's the first header and we haven't found any other active header yet
        if (rect.top <= 100 || (i === 0 && !currentActiveHeader)) {
          currentActiveHeader = header.id;
          break;
        }
      }
    }
    if (currentActiveHeader !== activeHeader) {
      setActiveHeader(currentActiveHeader);
    }
  }, [headers, activeHeader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigateToHeader = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  if (!headers.length) {
    return null;
  }

  return (
    <div className={styles.toc} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Flex justify="space-between" align="center">
        {isOpen && <div className={styles.header}>On this page</div>}
        <IconButton
          className={cx(styles.button, { [styles.open]: isOpen })}
          icon={Timeline}
          size="large"
          aria-label="Table of Contents"
        />
      </Flex>
      {isOpen && (
        <ul className={styles.list}>
          {headers.map(header => (
            <li
              key={header.id}
              className={cx(styles.listItem, { [styles.active]: activeHeader === header.id })}
              onClick={() => navigateToHeader(header.id)}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  navigateToHeader(header.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {header.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
