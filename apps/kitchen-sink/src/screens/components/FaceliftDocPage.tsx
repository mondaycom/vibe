import type { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Icon,
  IconButton,
  Button,
  Divider,
  Tooltip,
} from "@vibe/core";
import {
  Add,
  AlignLeft,
  Bold,
  Bullet,
  Check,
  Doc,
  DropdownChevronDown,
  Favorite,
  Link,
  Mention,
  MondayVibeLogo,
  Numbers,
  Redo,
  Time,
  Undo,
} from "@mondaydotcomorg/icons";
import styles from "./FaceliftDocPage.module.scss";

function FaceliftDocToolbar() {
  return (
    <Flex
      gap="small"
      align="center"
      className={styles.toolbar}
      data-testid="facelift-doc-toolbar"
    >
      <Button kind="primary" size="small" leftIcon={Add}>
        Add
      </Button>
      <IconButton icon={Undo} size="small" aria-label="Undo" />
      <IconButton icon={Redo} size="small" aria-label="Redo" />

      <Divider direction="vertical" className={styles.dividerTall} />

      <Button kind="tertiary" size="small" rightIcon={DropdownChevronDown}>
        H1 Large title
      </Button>
      <IconButton icon={AlignLeft} size="small" aria-label="Alignment" />

      <Divider direction="vertical" className={styles.dividerTall} />

      <IconButton icon={Bullet} size="small" aria-label="Bulleted list" />
      <IconButton icon={Numbers} size="small" aria-label="Numbered list" />
      <IconButton icon={Check} size="small" aria-label="Checklist" />

      <Divider direction="vertical" className={styles.dividerTall} />

      <Button kind="tertiary" size="small" leftIcon={Bold}>
        Style
      </Button>

      <Divider direction="vertical" className={styles.dividerTall} />

      <IconButton icon={Mention} size="small" aria-label="Mention" />
      <IconButton icon={MondayVibeLogo} size="small" aria-label="Vibe AI" />
      <IconButton icon={Link} size="small" aria-label="Link" />
    </Flex>
  );
}

function DocMetaRow() {
  return (
    <Flex align="center" gap="medium" className={styles.metaRow} wrap>
      <Flex align="center" gap="xs">
        <Avatar
          size="xs"
          type="text"
          text="IB"
          backgroundColor="dark_purple"
          aria-label="Itamar Ben Shushan"
        />
        <Text type="text2" color="secondary">
          Creator{" "}
          <Text element="span" type="text2" color="primary" weight="medium">
            Itamar Ben Shushan
          </Text>
        </Text>
      </Flex>
      <span className={styles.metaSeparator} aria-hidden="true" />
      <Flex align="center" gap="xs">
        <Icon icon={MondayVibeLogo} iconSize={16} className={styles.metaIcon} />
        <Text type="text2" color="secondary">
          Created{" "}
          <Text element="span" type="text2" color="primary" weight="medium">
            Aug 01, 2025, 17:39
          </Text>
        </Text>
      </Flex>
      <span className={styles.metaSeparator} aria-hidden="true" />
      <Flex align="center" gap="xs">
        <Icon icon={Time} iconSize={16} className={styles.metaIcon} />
        <Text type="text2" color="secondary">
          Last updated{" "}
          <Text element="span" type="text2" color="primary" weight="medium">
            Jan 14, 2026, 17:26
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <Text
      element="p"
      type="text1"
      color="primary"
      ellipsis={false}
      className={styles.paragraph}
    >
      {children}
    </Text>
  );
}

function B({ children }: { children: ReactNode }) {
  return <strong className={styles.bold}>{children}</strong>;
}

function I({ children }: { children: ReactNode }) {
  return <em className={styles.italic}>{children}</em>;
}

function LinkInline({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}

function H1({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <Heading
      type="h1"
      weight="bold"
      color="primary"
      id={id}
      className={styles.h1}
    >
      {children}
    </Heading>
  );
}

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <Heading
      type="h2"
      weight="medium"
      color="primary"
      id={id}
      className={styles.h2}
    >
      {children}
    </Heading>
  );
}

function H3({ children, muted }: { children: ReactNode; muted?: ReactNode }) {
  return (
    <Heading type="h3" weight="medium" color="primary" className={styles.h3}>
      {children}
      {muted && <span className={styles.h3Muted}> {muted}</span>}
    </Heading>
  );
}

function TeamBlock({
  letter,
  title,
  formerly,
  oneLiner,
  description,
  land,
}: {
  letter: string;
  title: string;
  formerly: string;
  oneLiner: ReactNode;
  description: ReactNode;
  land: string;
}) {
  return (
    <section className={styles.teamBlock} aria-label={`Team ${letter}`}>
      <H3 muted={<span className={styles.muted}>(Formerly {formerly})</span>}>
        Team {letter}: <strong className={styles.teamTitle}>{title}</strong>
      </H3>
      <Paragraph>
        <B>One-Liner:</B> {oneLiner}
      </Paragraph>
      <Paragraph>
        <B>Description:</B> {description}
      </Paragraph>
      <Paragraph>
        <B>Land:</B>{" "}
        <Text element="span" type="text1" color="secondary">
          {land}
        </Text>
      </Paragraph>
    </section>
  );
}

function BulletList({ children }: { children: ReactNode }) {
  return <ul className={styles.bulletList}>{children}</ul>;
}

function SubBulletList({ children }: { children: ReactNode }) {
  return (
    <ul className={`${styles.bulletList} ${styles.bulletListSub}`}>
      {children}
    </ul>
  );
}

function LI({ children }: { children: ReactNode }) {
  return <li className={styles.bulletItem}>{children}</li>;
}

export function FaceliftDocPage() {
  return (
    <Box className={styles.docPage} data-testid="facelift-doc-page">
      <Box className={styles.toolbarBar}>
        <FaceliftDocToolbar />
      </Box>

      <Flex align="start" justify="center" className={styles.docScroll}>
        <article
          className={styles.docSurface}
          aria-labelledby="facelift-doc-title"
        >
          <header className={styles.docHeader}>
            <Flex align="center" gap="xs" className={styles.docTitleRow}>
              <Heading
                type="h1"
                weight="bold"
                color="primary"
                id="facelift-doc-title"
                className={styles.docTitle}
              >
                New group plan
              </Heading>
              <Tooltip content="Favorite">
                <IconButton
                  icon={Favorite}
                  kind="tertiary"
                  size="small"
                  aria-label="Favorite"
                  className={styles.docTitleFav}
                />
              </Tooltip>
            </Flex>
            <DocMetaRow />
          </header>

          <section className={styles.docBody}>
            <H1>
              The{" "}
              <Text element="span" type="text1" color="primary">
                <B>“Connective Tissue”</B>
              </Text>{" "}
              Group
            </H1>

            <Paragraph>
              We create the foundational layer that unites teams and empowers
              seamless collaboration across the entire platform.
            </Paragraph>

            <Paragraph>
              <B>Purpose:</B> Our mission is to transform how teams work
              together by building the foundational collaborative layers that
              run across every <LinkInline>monday.com</LinkInline> product. We
              create a system that provides the right context and an actionable
              experience, empowering teams to operate as one. Our goal is to
              make multi‑product collaboration feel intuitive, giving every user
              a clear path to their next step.
            </Paragraph>

            <H2>Team structure</H2>

            <Paragraph>
              Our mission is to build the core foundation for true
              collaboration.
            </Paragraph>

            <Paragraph>
              We&apos;ve chosen five verbs to define our teams because they
              represent the essential actions our users take every day. These
              verbs: <B>Harmonize, Communicate, Scale, Discover,</B> and{" "}
              <B>Curate</B> are not just team names; they are the fundamental
              behaviors that connect people and content.
            </Paragraph>

            <TeamBlock
              letter="A"
              title="Harmonise"
              formerly="Experience + P&I"
              oneLiner="We create the shared spaces that bring teams and content together."
              description={
                <>
                  This team builds the essential structure for collaboration
                  through <B>workspaces and folders</B>. We ensure teams have a
                  unified environment to work from, making it easy to organize
                  content, see the bigger picture, and stay aligned. Our work is
                  the connective tissue that holds everything in a project
                  together.
                </>
              }
              land="Workspace page, Folders, Home, LP, Topbar"
            />

            <TeamBlock
              letter="B"
              title="Communicate"
              formerly="P&I"
              oneLiner="We provide the tools for real-time, contextual communication."
              description={
                <>
                  This team is the central hub for all communication. We empower
                  users to collaborate seamlessly through{" "}
                  <B>notifications and mentions</B>. By providing a rich
                  conversation feed, we ensure every team member is always in
                  the loop, facilitating the meaningful conversations that drive
                  projects forward.
                </>
              }
              land="Notification, mentions, Updates"
            />

            <TeamBlock
              letter="Scale"
              title="Scale"
              formerly="Expansion"
              oneLiner="We provide the templates that help teams grow and standardize their work."
              description={
                <>
                  This team builds the core tools for defining and distributing
                  processes across an organization. Whether you&apos;re a small
                  team needing a starting point or a large enterprise scaling
                  operations, our <B>templates</B> ensure consistency and
                  provide top-level visibility. We make it easy to manage work
                  as you grow.
                </>
              }
              land="Temple center, temples, managed temple"
            />

            <TeamBlock
              letter="Discover"
              title="Discover"
              formerly="search"
              oneLiner="We make it easy for you to find the information you need and the next step you should take."
              description={
                <>
                  This team is redefining the search experience to be more than
                  just a query tool. Our focus is on{" "}
                  <B>actionable, intelligent search</B> that helps you not only
                  find content but also discover relevant insights. By
                  leveraging AI, we guide you to the most valuable information
                  at the right moment.
                </>
              }
              land="Search, Discover surfaces, AI suggestions"
            />

            <H1>Group goals and KR&apos;s</H1>

            <H3>
              Goal 1: Drive Deeper Collaboration and Increase User Retention
            </H3>

            <Paragraph>
              <B>Objective:</B> To build the core capabilities that transform
              individual work into powerful team collaboration. Our goal is to
              make the platform so effective and valuable for all teams—
              regardless of size—that it becomes an indispensable part of how
              they work, leading to higher engagement and retention.
            </Paragraph>

            <Paragraph>
              <B>Possible KR&apos;s:</B>{" "}
              <Text element="span" type="text1" color="secondary">
                <I>(its shitty now)</I>
              </Text>
            </Paragraph>

            <Paragraph>
              <B>Increase Team collaboration:</B> Achieve a <B>x% increase</B>{" "}
              in the average number of collaborative actions per user per month
              (e.g., mentions, comments, reactions). This directly measures the
              value of your team&apos;s communication tools.
            </Paragraph>

            <Paragraph>
              <B>Boost Collaborative Surface Adoption:</B> Grow the number of
              users who actively participate in shared spaces (e.g., creating
              and interacting with content in workspaces or folders) by{" "}
              <B>x%</B> within the next two quarters. This measures how well
              your tools are helping teams organize and align.
            </Paragraph>

            <Paragraph>
              <B>Improve Feature-Driven Retention:</B> Increase the 90-day
              retention rate of users who frequently engage with our
              group&apos;s core features by <B>x%</B>. This is a powerful signal
              that our work creates long-term value, making the product
              &quot;stickier.&quot;
            </Paragraph>

            <H2>Drive Contextual and Personalized Communication</H2>
            <BulletList>
              <LI>
                <B>Goal:</B> Elevate <B>communication</B> from simple alerts to
                an intelligent feed by using advanced <B>discovery</B> logic to
                provide a <B>personalized</B> and prioritized experience for
                every user.
              </LI>
              <LI>
                <B>Teams Involved:</B>
                <SubBulletList>
                  <LI>
                    <B>Communicate:</B> Owns the notifications and mentions
                    system.
                  </LI>
                  <LI>
                    <B>Discover:</B> Uses AI and contextual data to determine
                    the importance and relevance of a message.
                  </LI>
                  <LI>
                    <B>Personalize:</B> Provides the front-end experience that
                    presents this information in a unique, curated view for the
                    user.
                  </LI>
                </SubBulletList>
              </LI>
            </BulletList>

            <H2>Streamline Onboarding and Time-to-Value</H2>
            <BulletList>
              <LI>
                <B>Goal:</B> Accelerate the time it takes for a new user to
                achieve meaningful value by using <B>personalized</B> insights
                to suggest the most relevant <B>scaled</B> templates and a clear{" "}
                <B>harmonized</B> starting point.
              </LI>
              <LI>
                <B>Teams Involved:</B>
                <SubBulletList>
                  <LI>
                    <B>Personalize:</B> Identifies the user&apos;s role and
                    needs upon onboarding.
                  </LI>
                  <LI>
                    <B>Scale:</B> Provides the templates that will be
                    recommended as a starting point.
                  </LI>
                  <LI>
                    <B>Harmonize:</B> The templates are deployed into a
                    workspace, providing the user with a structured, aligned
                    starting point for their work.
                  </LI>
                </SubBulletList>
              </LI>
            </BulletList>

            <div className={styles.docEndSpacer} aria-hidden="true">
              <Icon icon={Doc} iconSize={16} />
            </div>
          </section>
        </article>
      </Flex>
    </Box>
  );
}

export default FaceliftDocPage;
