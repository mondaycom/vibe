import { useState, useRef, useEffect, useCallback } from "react";
import svgPaths from "../imports/svg-rt86nqhfv4";
import { imgFrame2147239680 } from "../imports/svg-s2yy1";
import imgImage721 from "../assets/agent-builder/432ada78325d53e71ce8d672d1b411eb4ee25265.png";
import {
  avatars,
  colorSchemes,
  renderAvatarVisual,
  summarizeExpertise,
} from "./agentBuilderData";
import {
  useAgentBuilder,
  type AgentConfigInitial,
} from "../context/AgentBuilderContext";
import styles from "./AgentBuilderConfig.module.scss";

const C_TEXT = "var(--primary-text-color)";
const C_SUB = "var(--secondary-text-color)";
const C_BORDER = "var(--layout-border-color)";
const C_BORDER_LIGHT = "var(--ui-border-color)";
const C_BG = "var(--primary-background-color)";
const C_GREY = "var(--allgrey-background-color)";
const FONT_TITLE = "var(--title-font-family)";
const FONT_BODY = "var(--font-family)";

export function AgentBuilderConfig({
  initial,
}: {
  initial: AgentConfigInitial | null;
}) {
  const { openOnboarding, close } = useAgentBuilder();
  const preselected = initial;

  const [selectedColor, setSelectedColor] = useState(() => {
    if (preselected?.avatarBg) {
      const idx = colorSchemes.findIndex(
        (c) => c.color === preselected.avatarBg,
      );
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const [selectedAvatar, setSelectedAvatar] = useState(
    preselected?.avatarIndex ?? 0,
  );
  const [prevAvatar, setPrevAvatar] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [confirmedName, setConfirmedName] = useState(
    preselected?.name ?? "Elena",
  );
  const [buttonAnimating, setButtonAnimating] = useState(false);
  const [expertise, setExpertise] = useState("");
  const [displayedHeader, setDisplayedHeader] = useState("");
  const [confirmedExpertise, setConfirmedExpertise] = useState(
    preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert",
  );
  const titleTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [showTitleCursor, setShowTitleCursor] = useState(false);
  const currentHeaderRef = useRef("");
  const currentSubtitleRef = useRef(
    preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert",
  );
  const confirmedNameRef = useRef(preselected?.name ?? "Elena");

  const [typewriterPhase, setTypewriterPhase] = useState<
    "name" | "expertise" | "done"
  >("name");
  const typewriterDone = useRef(false);
  const [showNameBorder, setShowNameBorder] = useState(false);
  const [showExpertiseBorder, setShowExpertiseBorder] = useState(false);

  const nameSpanRef = useRef<HTMLSpanElement>(null);
  const expertiseSpanRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState<number>(0);
  const [expertiseWidth, setExpertiseWidth] = useState<number>(0);

  useEffect(() => {
    if (nameSpanRef.current) setNameWidth(nameSpanRef.current.offsetWidth);
  }, [agentName]);

  useEffect(() => {
    if (expertiseSpanRef.current)
      setExpertiseWidth(expertiseSpanRef.current.offsetWidth);
  }, [expertise]);

  const handleOnboard = () => {
    const expertiseTitle = confirmedExpertise
      ? summarizeExpertise(confirmedExpertise) + " Agent"
      : "Feedback Intelligence Agent";
    openOnboarding({
      name: confirmedName,
      expertise: expertiseTitle,
      avatarBg: colorSchemes[selectedColor].color,
      avatarImg: avatars[selectedAvatar].centerImg,
      avatarIndex: selectedAvatar,
    });
  };

  const animateHeader = useCallback((newHeader: string) => {
    titleTimeoutsRef.current.forEach(clearTimeout);
    titleTimeoutsRef.current = [];
    setShowTitleCursor(true);

    const oldHeader = currentHeaderRef.current;
    const deleteSpeed = 15;
    const writeSpeed = 25;
    const pauseBetween = 100;

    for (let i = oldHeader.length; i >= 0; i--) {
      const timeout = setTimeout(
        () => {
          setDisplayedHeader(oldHeader.slice(0, i));
        },
        (oldHeader.length - i) * deleteSpeed,
      );
      titleTimeoutsRef.current.push(timeout);
    }

    const deleteTime = oldHeader.length * deleteSpeed;

    for (let i = 0; i <= newHeader.length; i++) {
      const timeout = setTimeout(
        () => {
          setDisplayedHeader(newHeader.slice(0, i));
          if (i === newHeader.length) {
            currentHeaderRef.current = newHeader;
            setTimeout(() => setShowTitleCursor(false), 500);
          }
        },
        deleteTime + pauseBetween + i * writeSpeed,
      );
      titleTimeoutsRef.current.push(timeout);
    }
  }, []);

  const confirmName = () => {
    const newName = agentName.trim();
    if (newName && newName !== confirmedNameRef.current) {
      setButtonAnimating(true);
      setConfirmedName(newName);
      confirmedNameRef.current = newName;
      setTimeout(() => setButtonAnimating(false), 600);
      animateHeader(`${newName}, ${currentSubtitleRef.current}`);
    }
  };

  const confirmExpertise = useCallback(() => {
    if (expertise.trim() !== confirmedExpertise) {
      setConfirmedExpertise(expertise.trim());
      const newTitle = summarizeExpertise(expertise) + " expert";
      if (newTitle !== currentSubtitleRef.current) {
        currentSubtitleRef.current = newTitle;
        animateHeader(`${confirmedNameRef.current}, ${newTitle}`);
      }
    }
  }, [expertise, confirmedExpertise, animateHeader]);

  const handleAvatarSelect = useCallback(
    (idx: number) => {
      if (idx === selectedAvatar) return;
      setPrevAvatar(selectedAvatar);
      setSelectedAvatar(idx);
      setTransitioning(true);
    },
    [selectedAvatar],
  );

  useEffect(() => {
    if (!transitioning) return;
    const raf = requestAnimationFrame(() => setTransitioning(false));
    const cleanup = setTimeout(() => setPrevAvatar(null), 600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cleanup);
    };
  }, [transitioning]);

  useEffect(() => {
    if (typewriterDone.current) return;
    typewriterDone.current = true;

    const targetName = preselected?.name ?? "Elena";
    const targetExpertise = preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert";
    const typeSpeed = 60;
    const expertiseTypeSpeed = 30;
    const pauseBetween = 400;
    const initialDelay = 500;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const showBorderT = setTimeout(() => setShowNameBorder(true), initialDelay);
    timeouts.push(showBorderT);

    const typeStartDelay = initialDelay;

    for (let i = 0; i <= targetName.length; i++) {
      const t = setTimeout(
        () => {
          setAgentName(targetName.slice(0, i));
        },
        typeStartDelay + i * typeSpeed,
      );
      timeouts.push(t);
    }

    const nameEndTime = typeStartDelay + targetName.length * typeSpeed;

    const showExBorderT = setTimeout(() => {
      setTypewriterPhase("expertise");
      setShowExpertiseBorder(true);
    }, nameEndTime + pauseBetween);
    timeouts.push(showExBorderT);

    const expertiseTypeStart = nameEndTime + pauseBetween;

    for (let i = 0; i <= targetExpertise.length; i++) {
      const t = setTimeout(
        () => {
          setExpertise(targetExpertise.slice(0, i));
        },
        expertiseTypeStart + i * expertiseTypeSpeed,
      );
      timeouts.push(t);
    }

    const expertiseEndTime =
      expertiseTypeStart + targetExpertise.length * expertiseTypeSpeed;

    const finishT = setTimeout(() => {
      setTypewriterPhase("done");
      setConfirmedExpertise(targetExpertise);
      currentSubtitleRef.current = targetExpertise;
      const fullHeader = `${targetName}, ${targetExpertise}`;
      setShowTitleCursor(true);
      const headerWriteSpeed = 25;
      for (let i = 0; i <= fullHeader.length; i++) {
        const ht = setTimeout(() => {
          setDisplayedHeader(fullHeader.slice(0, i));
          if (i === fullHeader.length) {
            currentHeaderRef.current = fullHeader;
            setTimeout(() => setShowTitleCursor(false), 500);
          }
        }, i * headerWriteSpeed);
        timeouts.push(ht);
      }
    }, expertiseEndTime + 300);
    timeouts.push(finishT);

    return () => timeouts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeColor = colorSchemes[selectedColor].color;
  const isWhite = activeColor === "#ffffff";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 50,
        backgroundColor: C_BG,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <img
          alt=""
          src={imgImage721}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "top",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          overflow: "hidden",
          padding: "32px 32px 0",
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgba(249, 249, 249, 0.5) 0%, rgba(249, 249, 249, 0.5) 100%)",
        }}
      >
        <div
          style={{
            backgroundColor: C_GREY,
            height: "100%",
            position: "relative",
            borderRadius: "16px 16px 0 0",
            boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
            flexShrink: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              overflow: "hidden",
              borderRadius: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                paddingTop: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Header */}
              <div
                style={{ position: "relative", flexShrink: 0, width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: "8px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <button
                      onClick={close}
                      className={styles.iconButton}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "6px",
                      }}
                      title="Back to dashboard"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M12.5 15L7.5 10L12.5 5"
                          stroke={C_TEXT}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "6px",
                        flexShrink: 0,
                        width: "32px",
                        height: "32px",
                        overflow: "hidden",
                        transition: "background-color 0.5s ease",
                        backgroundColor: activeColor,
                      }}
                    >
                      <div
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          borderRadius: "inherit",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          alt=""
                          src={avatars[selectedAvatar].centerImg}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "bottom",
                            transform: "scale(2)",
                            transformOrigin: "bottom center",
                          }}
                        />
                      </div>
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          border: `1px solid ${C_BORDER}`,
                          pointerEvents: "none",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: FONT_TITLE,
                        color: C_TEXT,
                        fontSize: "18px",
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        margin: 0,
                      }}
                    >
                      {displayedHeader}
                      {showTitleCursor && (
                        <span className={styles.titleCursor} />
                      )}
                    </p>
                  </div>
                  <button
                    onClick={close}
                    className={styles.iconButton}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "4px",
                    }}
                    aria-label="Close"
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        flexShrink: 0,
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <div style={{ position: "absolute", inset: "20%" }}>
                        <svg
                          style={{
                            position: "absolute",
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }}
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 12.0008 12"
                        >
                          <path d={svgPaths.p3bd83000} fill={C_TEXT} />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: C_BG,
                  flex: "1 0 0",
                  minHeight: "1px",
                  minWidth: "1px",
                  position: "relative",
                  borderRadius: "16px 16px 0 0",
                  width: "100%",
                }}
              >
                {/* Colored background container (visual only) */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: "all 0.5s ease-in-out",
                    pointerEvents: "none",
                    backgroundColor: isWhite ? "transparent" : activeColor,
                    borderRadius: isWhite ? "16px 16px 0 0" : "40px",
                    width: isWhite ? "100%" : "min(414px, 36vw)",
                    top: isWhite ? "0" : "166px",
                    height: isWhite ? "100%" : "calc(100% - 166px - 50px)",
                  }}
                />

                {/* Previous avatar (fading out) */}
                {prevAvatar !== null && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      pointerEvents: "none",
                      opacity: transitioning ? 1 : 0,
                      transition:
                        "opacity 500ms ease-in-out, clip-path 500ms ease-in-out",
                      clipPath: isWhite
                        ? "inset(0 round 16px 16px 0 0)"
                        : "inset(166px calc((100% - min(414px, 36vw)) / 2) 50px calc((100% - min(414px, 36vw)) / 2) round 40px)",
                    }}
                  >
                    <img
                      alt=""
                      src={avatars[prevAvatar].centerImg}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "bottom",
                        transition: "transform 500ms ease-in-out",
                        transform: isWhite ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "bottom center",
                      }}
                    />
                  </div>
                )}
                {/* Current avatar (fading in) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    opacity: transitioning ? 0 : 1,
                    transition:
                      "opacity 500ms ease-in-out, clip-path 500ms ease-in-out",
                    clipPath: isWhite
                      ? "inset(0 round 16px 16px 0 0)"
                      : "inset(166px calc((100% - min(414px, 36vw)) / 2) 50px calc((100% - min(414px, 36vw)) / 2) round 40px)",
                  }}
                >
                  <img
                    alt=""
                    key={avatars[selectedAvatar].id}
                    src={avatars[selectedAvatar].centerImg}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                      transition: "transform 500ms ease-in-out",
                      transform: isWhite ? "scale(1)" : "scale(0.9)",
                      transformOrigin: "bottom center",
                    }}
                  />
                </div>

                {/* Agent name + subtitle */}
                <div
                  style={{
                    position: "absolute",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                    left: "calc(50% + 5px)",
                    top: "36px",
                    width: "auto",
                    maxWidth: "90%",
                  }}
                >
                  {/* Name input */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 0",
                      position: "relative",
                      borderRadius: "8px",
                      flexShrink: 0,
                      opacity:
                        showNameBorder || typewriterPhase === "done" ? 1 : 0,
                      transition: "opacity 200ms ease-out",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: `1px solid ${C_BORDER_LIGHT}`,
                        pointerEvents: "none",
                        borderRadius: "8px",
                        opacity:
                          showNameBorder || typewriterPhase === "done" ? 1 : 0,
                        transition: "opacity 200ms ease-out",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        type="text"
                        value={agentName}
                        onChange={(e) => {
                          if (typewriterPhase === "done")
                            setAgentName(e.target.value);
                        }}
                        onFocus={(e) => {
                          if (typewriterPhase === "done")
                            e.currentTarget.select();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") e.currentTarget.blur();
                        }}
                        onBlur={confirmName}
                        readOnly={typewriterPhase !== "done"}
                        style={{
                          background: "transparent",
                          fontFamily: FONT_TITLE,
                          fontWeight: 500,
                          color: C_TEXT,
                          fontSize: "48px",
                          textAlign: "center",
                          letterSpacing: "-1.4753px",
                          lineHeight: 1,
                          outline: "none",
                          border: "none",
                          padding: "0 12px",
                          width: `${nameWidth + 24}px`,
                          transition: "width 80ms ease-out",
                          caretColor:
                            typewriterPhase !== "done"
                              ? "transparent"
                              : undefined,
                        }}
                      />
                      <span
                        ref={nameSpanRef}
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          visibility: "hidden",
                          whiteSpace: "pre",
                          fontFamily: FONT_TITLE,
                          fontWeight: 500,
                          fontSize: "48px",
                          letterSpacing: "-1.4753px",
                          lineHeight: 1,
                        }}
                      >
                        {agentName || "\u200b"}
                      </span>
                    </div>
                  </div>
                  {/* Expertise subtitle */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "8px",
                      flexShrink: 0,
                      opacity:
                        showExpertiseBorder || typewriterPhase === "done"
                          ? 1
                          : 0,
                      transition: "opacity 200ms ease-out",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        padding: "4px 0",
                        position: "relative",
                        borderRadius: "inherit",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="text"
                          value={expertise}
                          onChange={(e) => {
                            if (typewriterPhase === "done")
                              setExpertise(e.target.value);
                          }}
                          onFocus={(e) => {
                            if (typewriterPhase === "done")
                              e.currentTarget.select();
                          }}
                          onBlur={confirmExpertise}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") e.currentTarget.blur();
                          }}
                          readOnly={typewriterPhase !== "done"}
                          style={{
                            fontFamily: FONT_BODY,
                            lineHeight: 1.43,
                            color: C_SUB,
                            fontSize: "16px",
                            letterSpacing: "0.16px",
                            whiteSpace: "nowrap",
                            background: "transparent",
                            outline: "none",
                            border: "none",
                            textAlign: "center",
                            padding: "0 12px",
                            width: `${expertiseWidth + 24}px`,
                            transition: "width 80ms ease-out",
                            caretColor:
                              typewriterPhase !== "done"
                                ? "transparent"
                                : undefined,
                          }}
                        />
                        <span
                          ref={expertiseSpanRef}
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            visibility: "hidden",
                            whiteSpace: "pre",
                            fontFamily: FONT_BODY,
                            lineHeight: 1.43,
                            fontSize: "16px",
                            letterSpacing: "0.16px",
                          }}
                        >
                          {expertise || "\u200b"}
                        </span>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: `1px solid ${C_BORDER_LIGHT}`,
                        pointerEvents: "none",
                        borderRadius: "8px",
                        opacity:
                          showExpertiseBorder || typewriterPhase === "done"
                            ? 1
                            : 0,
                        transition: "opacity 200ms ease-out",
                      }}
                    />
                  </div>
                </div>

                {/* Left side — avatar selection */}
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    left: "48px",
                    top: "127px",
                    width: "280px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      height: "439px",
                      alignItems: "flex-start",
                      position: "relative",
                      flexShrink: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        flexShrink: 0,
                        width: "100%",
                        maskImage: `url('${imgFrame2147239680}')`,
                        WebkitMaskImage: `url('${imgFrame2147239680}')`,
                        maskSize: "310px 439px",
                        WebkitMaskSize: "310px 439px",
                        maskPosition: "-16px 0px",
                        WebkitMaskPosition: "-16px 0px",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0 4px",
                          width: "100%",
                        }}
                      >
                        <p
                          style={{
                            flex: "1 0 0",
                            fontFamily: FONT_BODY,
                            lineHeight: 1.43,
                            fontSize: "16px",
                            color: "rgba(50,51,56,0.38)",
                            letterSpacing: "0.16px",
                            margin: 0,
                          }}
                        >
                          Choose your hero
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        position: "relative",
                        flexShrink: 0,
                        width: "100%",
                        flex: 1,
                        minHeight: 0,
                        padding: "6px",
                        margin: "-6px",
                        maskImage:
                          "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          alignItems: "flex-start",
                          alignContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        {avatars.map((avatar, idx) => {
                          const isSelected = selectedAvatar === idx;
                          return (
                            <div
                              key={avatar.id}
                              style={{
                                flex: "1 0 0",
                                height: "104px",
                                minWidth: "66px",
                                position: "relative",
                                zIndex: isSelected ? 10 : undefined,
                              }}
                            >
                              {isSelected ? (
                                <div
                                  style={{
                                    position: "absolute",
                                    display: "flex",
                                    inset: "-3.5px -2.75px -2.5px -3.25px",
                                    alignItems: "center",
                                    padding: "3px",
                                    borderRadius: "14px",
                                  }}
                                >
                                  <div
                                    aria-hidden="true"
                                    style={{
                                      position: "absolute",
                                      border: "1.5px solid #000",
                                      inset: "-1.5px",
                                      pointerEvents: "none",
                                      borderRadius: "15.5px",
                                    }}
                                  />
                                  <button
                                    onClick={() => handleAvatarSelect(idx)}
                                    className={styles.avatarButton}
                                    style={{ flex: "1 0 0", height: "104px" }}
                                  >
                                    {renderAvatarVisual(avatar, avatar.name)}
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => handleAvatarSelect(idx)}
                                  className={`${styles.avatarButton} ${styles.avatarButtonHover}`}
                                  style={{ position: "absolute", inset: 0 }}
                                >
                                  {renderAvatarVisual(avatar, avatar.name)}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side — color selection */}
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "flex-start",
                    right: "48px",
                    top: "127px",
                    width: "248px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 4px",
                        width: "100%",
                      }}
                    >
                      <p
                        style={{
                          flex: "1 0 0",
                          fontFamily: FONT_BODY,
                          lineHeight: 1.43,
                          fontSize: "16px",
                          color: "rgba(50,51,56,0.38)",
                          letterSpacing: "0.16px",
                          margin: 0,
                        }}
                      >
                        Background color
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      alignItems: "center",
                      alignContent: "center",
                      position: "relative",
                      flexShrink: 0,
                      width: "100%",
                    }}
                  >
                    {colorSchemes.map((color) => {
                      const isSelected = selectedColor === color.id;
                      if (isSelected) {
                        return (
                          <div
                            key={color.id}
                            style={{
                              height: "104px",
                              minWidth: "50px",
                              position: "relative",
                              borderRadius: "60px",
                              flexShrink: 0,
                              width: "56px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                transform: "translate(-50%, -50%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                left: "50%",
                                padding: "3px",
                                borderRadius: "14px",
                                top: "50%",
                              }}
                            >
                              <div
                                aria-hidden="true"
                                style={{
                                  position: "absolute",
                                  border: "1.5px solid #000",
                                  inset: "-1.5px",
                                  pointerEvents: "none",
                                  borderRadius: "15.5px",
                                }}
                              />
                              <div
                                style={{
                                  width: "56px",
                                  height: "104px",
                                  borderRadius: "12px",
                                  position: "relative",
                                  backgroundColor: color.color,
                                }}
                              >
                                {color.border && (
                                  <div
                                    aria-hidden="true"
                                    style={{
                                      position: "absolute",
                                      border: `1px solid ${C_BORDER}`,
                                      inset: 0,
                                      pointerEvents: "none",
                                      borderRadius: "12px",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={styles.colorButton}
                          style={{
                            flex: "1 0 0",
                            height: "104px",
                            minWidth: "50px",
                            backgroundColor: color.color,
                          }}
                        >
                          {color.border && (
                            <div
                              aria-hidden="true"
                              style={{
                                position: "absolute",
                                border: `1px solid ${C_BORDER}`,
                                inset: 0,
                                pointerEvents: "none",
                                borderRadius: "12px",
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Onboard button */}
                <div
                  style={{
                    position: "absolute",
                    height: "40px",
                    right: "72px",
                    bottom: "70px",
                  }}
                >
                  <button
                    onClick={handleOnboard}
                    className={styles.onboardButton}
                    style={{
                      display: "flex",
                      height: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 16px",
                      borderRadius: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_BODY,
                        fontWeight: 300,
                        lineHeight: "22px",
                        fontSize: "16px",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                      }}
                    >
                      Onboard{" "}
                      <span
                        style={{
                          display: "inline-block",
                          marginLeft: "4px",
                          transition: "all 0.4s ease-out",
                          opacity: buttonAnimating ? 0 : 1,
                          transform: buttonAnimating
                            ? "translateY(8px)"
                            : "translateY(0)",
                          filter: buttonAnimating ? "blur(4px)" : "blur(0px)",
                        }}
                      >
                        {confirmedName}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
