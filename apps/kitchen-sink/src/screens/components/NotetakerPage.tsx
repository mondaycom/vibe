import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Search,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsContext,
  Text,
} from "@vibe/core";
import { DropdownChevronDown } from "@mondaydotcomorg/icons";
import styles from "./NotetakerPage.module.scss";

interface UpcomingMeeting {
  title: string;
  time: string;
  participants: string[];
  isNext?: boolean;
}

interface RecordedMeeting {
  title: string;
  participants: string[];
  date: string;
  duration: string;
}

const UPCOMING: UpcomingMeeting[] = [
  {
    title: "Weekly 1:1",
    time: "Today at 2:00 pm",
    participants: ["AR", "JL"],
  },
  {
    title: "Team Weekly Sync",
    time: "Today at 3:00 pm",
    participants: ["SC", "MD", "AR"],
    isNext: true,
  },
  {
    title: "Candidate Interview",
    time: "Today at 4:00 pm",
    participants: ["TB", "CP", "AR", "JL"],
  },
  {
    title: "Daily Standup",
    time: "Tomorrow at 11:30 am",
    participants: ["KP", "DV", "AR", "SC", "TB"],
  },
];

const RECORDED: RecordedMeeting[] = [
  {
    title: "Product Sync",
    participants: ["SC", "AR", "MD", "TB"],
    date: "Jun 2, 2026",
    duration: "36m 48s",
  },
  {
    title: "Roadmap Planning",
    participants: ["TB", "CP", "SC", "AR", "MD", "JL"],
    date: "Jun 1, 2026",
    duration: "38m 33s",
  },
  {
    title: "Design Critique",
    participants: ["KP", "AR", "SC", "TB"],
    date: "May 31, 2026",
    duration: "28m 57s",
  },
  {
    title: "Design Review",
    participants: ["SC", "TB", "AR", "CP", "JL"],
    date: "May 28, 2026",
    duration: "35m 40s",
  },
  {
    title: "Engineering Sync",
    participants: ["SC", "AR", "MD", "CP", "TB", "JL", "KP", "DV", "RB"],
    date: "May 28, 2026",
    duration: "46m 20s",
  },
  {
    title: "Team Weekly Sync",
    participants: ["SC", "MD"],
    date: "May 27, 2026",
    duration: "3m 14s",
  },
];

function UpcomingCard({ title, time, participants, isNext }: UpcomingMeeting) {
  return (
    <article className={styles.upcomingCard}>
      {isNext && <span className={styles.nextBadge}>Next</span>}
      <Text type="text2" weight="medium" color="primary" ellipsis>
        {title}
      </Text>
      <Text type="text3" color="secondary" className={styles.cardTime}>
        {time}
      </Text>
      <AvatarGroup size="small" max={3}>
        {participants.map((p) => (
          <Avatar key={p} type="text" text={p} aria-label={p} />
        ))}
      </AvatarGroup>
      <Button kind="secondary" size="small" className={styles.inviteBtn}>
        Invite Notetaker
      </Button>
    </article>
  );
}

function FilterRow() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Flex className={styles.filterRow} justify="space-between" align="center">
      <Search
        className={styles.filterSearch}
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search"
        inputAriaLabel="Search meetings"
        size="small"
      />
      <Flex gap="small">
        <Button kind="secondary" size="small" rightIcon={DropdownChevronDown}>
          Recorded only
        </Button>
        <Button kind="secondary" size="small" rightIcon={DropdownChevronDown}>
          My meetings
        </Button>
      </Flex>
    </Flex>
  );
}

function MeetingTable({ meetings }: { meetings: RecordedMeeting[] }) {
  return (
    <table className={styles.meetingTable}>
      <thead>
        <tr>
          <th className={styles.th}>
            <Text type="text3" weight="medium" color="secondary">
              Meeting summaries
            </Text>
          </th>
          <th className={styles.th}>
            <Text type="text3" weight="medium" color="secondary">
              Participants
            </Text>
          </th>
          <th className={styles.th}>
            <Text type="text3" weight="medium" color="secondary">
              Date
            </Text>
          </th>
          <th className={styles.th}>
            <Text type="text3" weight="medium" color="secondary">
              Recording
            </Text>
          </th>
          <th className={styles.th}>
            <Text type="text3" weight="medium" color="secondary">
              Status
            </Text>
          </th>
        </tr>
      </thead>
      <tbody>
        {meetings.map(({ title, participants, date, duration }) => (
          <tr key={title} className={styles.tr}>
            <td className={styles.td}>
              <Text type="text2" color="primary" ellipsis>
                {title}
              </Text>
            </td>
            <td className={styles.td}>
              <AvatarGroup size="small" max={3}>
                {participants.map((p) => (
                  <Avatar key={p} type="text" text={p} aria-label={p} />
                ))}
              </AvatarGroup>
            </td>
            <td className={styles.td}>
              <Text type="text3" color="secondary">
                {date}
              </Text>
            </td>
            <td className={styles.td}>
              <Flex align="center" gap="xs">
                <span className={styles.recordingDot} aria-hidden="true" />
                <Text type="text3" color="secondary">
                  Recorded · {duration}
                </Text>
              </Flex>
            </td>
            <td className={styles.td}>
              <Text type="text3" color="secondary">
                —
              </Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function NotetakerPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className={styles.root}>
      <section aria-label="Upcoming meetings">
        <Text
          type="text1"
          weight="medium"
          color="primary"
          className={styles.sectionTitle}
        >
          Upcoming
        </Text>
        <div className={styles.upcomingStrip}>
          {UPCOMING.map((m) => (
            <UpcomingCard key={m.title} {...m} />
          ))}
        </div>
      </section>

      <TabsContext activeTabId={activeTab}>
        <TabList
          activeTabId={activeTab}
          onTabChange={setActiveTab}
          aria-label="Meeting view"
        >
          <Tab value={0}>Meeting summaries</Tab>
          <Tab value={1}>Upcoming meetings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FilterRow />
            <MeetingTable meetings={RECORDED} />
          </TabPanel>
          <TabPanel>
            <div className={styles.upcomingTabContent}>
              {UPCOMING.map((m) => (
                <UpcomingCard key={m.title} {...m} />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </Box>
  );
}
