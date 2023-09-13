import Avatar from "../../../Avatar/Avatar";
import { Board, Folder, Group, Workspace } from "../../../Icon/Icons";
import { LabelColor } from "../../../Label/LabelConstants";

export const doAndDontIconsRuleData = [
  {
    id: "workspace",
    title: "Workspace",
    icon: Workspace
  },
  {
    id: "folder",
    title: "Folder",
    icon: Folder
  },
  {
    id: "board",
    title: "Board",
    icon: Board
  },
  {
    id: "group",
    title: "Group",
    icon: Group
  }
];

export const emailTableData = [
  {
    id: "1",
    sentOn: "2020-01-01",
    sentBy: "John Doe",
    subject: "Lorem ipsum dolor",
    status: "Sent",
    emailsSent: 100
  },
  {
    id: "3",
    sentOn: "2023-03-03",
    sentBy: "Some Person",
    subject:
      "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
    status: "Sent",
    emailsSent: 999
  },
  {
    id: "2",
    sentOn: "2022-02-02",
    sentBy: "Other Name",
    subject: "This is the subject",
    status: "Sent",
    emailsSent: 99
  }
];

export const emailColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150
  },
  {
    id: "subject",
    title: "Subject"
  },
  {
    id: "sentBy",
    title: "Sent by",
    width: { min: 120, max: 200 },
    infoContent: "This is the sender"
  },
  {
    id: "status",
    title: "Status",
    width: 150,
    infoContent: "Info content for the status column"
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150
  }
];

export const scrollTableData = [
  {
    id: "1",
    sentOn: "2020-01-01",
    sentBy: "John Doe",
    subject: "Lorem ipsum dolor",
    status: "Sent",
    priority: "Urgent",
    emailsSent: 100
  },
  {
    id: "2",
    sentOn: "2020-02-02",
    sentBy: "Jane Doe",
    subject: "Dolor sit amet",
    status: "Draft",
    priority: "High",
    emailsSent: 50
  },
  {
    id: "3",
    sentOn: "2020-03-03",
    sentBy: "Peter Smith",
    subject: "Consectetur adipiscing elit",
    status: "Draft",
    priority: "Normal",
    emailsSent: 0
  },
  {
    id: "4",
    sentOn: "2020-04-04",
    sentBy: "Susan Jones",
    subject: "Sed do eiusmod tempor incididunt",
    status: "Sent",
    priority: "Low",
    emailsSent: 200
  },
  {
    id: "5",
    sentOn: "2020-05-05",
    sentBy: "David Brown",
    subject: "Ut labore et dolore magna aliqua",
    status: "Sent",
    priority: "Urgent",
    emailsSent: 150
  },
  {
    id: "6",
    sentOn: "2020-06-06",
    sentBy: "Michael Johnson",
    subject: "Et harum quidem rerum facilis est et expedita distinctio",
    status: "Pending",
    priority: "High",
    emailsSent: 75
  }
];

export const scrollTablePriorityColumnToLabelColor = {
  Urgent: LabelColor.NEGATIVE,
  High: LabelColor.DARK,
  Normal: LabelColor.PRIMARY,
  Low: LabelColor.POSITIVE
};

export const scrollTableStatusColumnToLabelColor = {
  Sent: LabelColor.POSITIVE,
  Draft: LabelColor.NEGATIVE,
  Pending: LabelColor.PRIMARY
};

export const scrollTableColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150
  },
  {
    id: "subject",
    title: "Subject",
    width: { min: 300, max: 500 }
  },
  {
    id: "sentBy",
    title: "Sent by",
    width: 150,
    infoContent: "This is the sender"
  },
  {
    id: "status",
    title: "Status",
    width: 150,
    infoContent: "Info content for the status column"
  },
  {
    id: "priority",
    title: "Priority",
    width: 150
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150
  }
];

export const virtualizedScrollTableData = [...new Array(5000)].map((_, index) => ({
  id: index,
  num: index,
  text: `This is line number ${index}`
}));

export const virtualizedScrollTableColumns = [
  {
    id: "num",
    title: "#",
    width: 100
  },
  {
    id: "text",
    title: "Text",
    loadingStateType: "long-text"
  }
];

export function sort(columnId, sortState, tableData) {
  if (sortState === "asc") {
    return [...tableData].sort((a, b) => {
      return b[columnId] > a[columnId] ? 1 : -1;
    });
  } else if (sortState === "desc") {
    return [...tableData].sort((a, b) => {
      return b[columnId] < a[columnId] ? 1 : -1;
    });
  } else {
    return emailTableData;
  }
}

export const TableEmptyState = () => <h1 style={{ textAlign: "center" }}>Empty State</h1>;

export const TableErrorState = () => <h1 style={{ textAlign: "center" }}>Error State</h1>;
export const TableAvatar = ({ text }) => (
  <Avatar
    text={text
      .split(" ")
      .map(s => s[0])
      .join("")}
    customSize={24}
    size={Avatar.sizes.SMALL}
    ariaLabel={text}
    backgroundColor="dark_purple"
  />
);
