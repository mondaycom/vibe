import React from "react";
import Avatar from "../../../Avatar/Avatar";
import { Calendar, Doc, Status } from "../../../Icon/Icons";
import { LabelColor } from "../../../Label/LabelConstants";
import { ITableColumn } from "../Table";

export const doAndDontIconsRuleColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    icon: Calendar,
    width: 95
  },
  {
    id: "subject",
    title: "Subject",
    icon: Doc
  },
  {
    id: "status",
    title: "Status",
    icon: Status,
    width: 120
  }
];

export const doAndDontIconsRuleData = [
  {
    id: "1",
    sentOn: "Apr 22",
    subject: "Limited time offer: AP Process",
    sentBy: "John Doe",
    status: "In progress"
  },
  {
    id: "2",
    sentOn: "Apr 22",
    subject: "Action required: Update your AP",
    sentBy: "Jane Doe",
    status: "Queued"
  },
  {
    id: "3",
    sentOn: "Apr 22",
    subject: "Limited time offer: AP Process",
    sentBy: "Peter Smith",
    status: "Sent"
  }
];

export const doAndDontBordersRuleColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "subject",
    title: "Subject",
    loadingStateType: "long-text"
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150,
    loadingStateType: "medium-text"
  }
];

export const doAndDontBordersRuleData = [
  {
    id: "1",
    sentOn: "2020-01-01",
    subject: "Lorem ipsum dolor",
    emailsSent: 100
  },
  {
    id: "2",
    sentOn: "2022-02-02",
    subject: "This is the subject",
    emailsSent: 99
  },
  {
    id: "3",
    sentOn: "2023-03-03",
    subject: "This is another subject",
    emailsSent: 999
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
    id: "2",
    sentOn: "2022-02-02",
    sentBy: "Other Name",
    subject: "This is the subject",
    status: "Sent",
    emailsSent: 99
  },
  {
    id: "3",
    sentOn: "2023-03-03",
    sentBy: "Some Person",
    subject:
      "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
    status: "Sent",
    emailsSent: 999
  }
];

export const emailColumns: ITableColumn[] = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "subject",
    title: "Subject",
    loadingStateType: "long-text"
  },
  {
    id: "sentBy",
    title: "Sent by",
    width: { min: 120, max: 200 },
    infoContent: "This is the sender",
    loadingStateType: "circle"
  },
  {
    id: "status",
    title: "Status",
    width: 150,
    infoContent: "Info content for the status column",
    loadingStateType: "medium-text"
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150,
    loadingStateType: "medium-text"
  }
];

export const scrollTableData = [
  {
    id: "1",
    sentOn: "2020-01-01",
    sentBy: "John Doe",
    subject: "Lorem ipsum dolor",
    status: "In progress",
    priority: "Urgent",
    emailsSent: 100
  },
  {
    id: "2",
    sentOn: "2020-02-02",
    sentBy: "Jane Doe",
    subject: "Dolor sit amet",
    status: "In progress",
    priority: "High",
    emailsSent: 50
  },
  {
    id: "3",
    sentOn: "2020-03-03",
    sentBy: "Peter Smith",
    subject: "Consectetur adipiscing elit",
    status: "Queued",
    priority: "Normal",
    emailsSent: 0
  },
  {
    id: "4",
    sentOn: "2020-04-04",
    sentBy: "Susan Jones",
    subject: "Sed do eiusmod tempor incididunt",
    status: "Failed",
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
    status: "Sent",
    priority: "High",
    emailsSent: 75
  }
];

export const stickyColumns: ITableColumn[] = [
  {
    id: "projectName",
    title: "Project name",
    width: 200,
    loadingStateType: "medium-text"
  },
  {
    id: "status",
    title: "Status",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "description",
    title: "Description",
    loadingStateType: "long-text"
  },
  {
    id: "createdOn",
    title: "Created on",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "owner",
    title: "Owner",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "priority",
    title: "Priority",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "category",
    title: "Category",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "dueDate",
    title: "Due Date",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "comments",
    title: "Comments",
    loadingStateType: "long-text"
  }
];

export const stickyTableData = [
  {
    id: "1",
    projectName: "Limited time offer",
    status: "In progress",
    description: "This is description 1",
    createdOn: "2024-07-03",
    emailsSent: 100,
    owner: "John Doe",
    priority: "High",
    category: "Marketing",
    dueDate: "2024-08-15",
    comments: "This project needs to be prioritized due to upcoming deadline."
  },
  {
    id: "2",
    projectName: "Action required",
    status: "In progress",
    description: "This is description 2",
    createdOn: "2024-07-08",
    emailsSent: 150,
    owner: "Jane Smith",
    priority: "Medium",
    category: "Sales",
    dueDate: "2024-08-20",
    comments: "Waiting for client feedback."
  },
  {
    id: "3",
    projectName: "Cancellation request",
    status: "Done",
    description: "This is description 3",
    createdOn: "2024-07-12",
    emailsSent: 300,
    owner: "Mark Johnson",
    priority: "Low",
    category: "Support",
    dueDate: "2024-07-25",
    comments: "Completed without issues."
  },
  {
    id: "4",
    projectName: "Limited time offer",
    status: "Stuck",
    description: "This is description 4",
    createdOn: "2024-08-06",
    emailsSent: 50,
    owner: "Lucy Brown",
    priority: "High",
    category: "Marketing",
    dueDate: "2024-09-01",
    comments: "Blocked by vendor issues."
  },
  {
    id: "5",
    projectName: "Cancellation request",
    status: "Done",
    description: "This is description 5",
    createdOn: "2024-09-05",
    emailsSent: 400,
    owner: "Alan Turing",
    priority: "Low",
    category: "Support",
    dueDate: "2024-09-10",
    comments: "Resolved, no further action required."
  }
];

export const highlightableRowColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "subject",
    title: "Subject",
    loadingStateType: "long-text"
  },
  {
    id: "emailsSent",
    title: "Emails sent",
    width: 150,
    loadingStateType: "medium-text"
  },
  {
    id: "highlight",
    title: "Highlight",
    width: 150,
    infoContent: "Info content for the highlight column",
    loadingStateType: "medium-text"
  }
];

export const highlightableTableData = [
  {
    id: "1",
    sentOn: "2020-01-01",
    subject: "Lorem ipsum dolor",
    emailsSent: 100
  },
  {
    id: "2",
    sentOn: "2022-02-02",
    subject: "This is the subject",
    emailsSent: 99
  },
  {
    id: "3",
    sentOn: "2023-03-03",
    subject:
      "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
    emailsSent: 999
  }
];

export const priorityColumnToLabelColor: { [key: string]: LabelColor } = {
  Urgent: LabelColor.NEGATIVE,
  High: LabelColor.DARK,
  Normal: LabelColor.PRIMARY,
  Low: LabelColor.POSITIVE
};

export const statusColumnToLabelColor: { [key: string]: LabelColor } = {
  Sent: LabelColor.POSITIVE,
  Queued: LabelColor.DARK,
  Failed: LabelColor.NEGATIVE,
  "In progress": LabelColor.PRIMARY,
  Done: LabelColor.POSITIVE,
  Stuck: LabelColor.NEGATIVE
};

export const scrollTableColumns = [
  {
    id: "sentOn",
    title: "Sent on",
    width: 150
  },
  {
    id: "priority",
    title: "Priority",
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
    id: "emailsSent",
    title: "Emails sent",
    width: 150
  }
];

export const virtualizedScrollTableData = [...new Array(5000)].map((_, index) => ({
  id: index.toString(),
  num: index,
  text: `This is line number ${index}`
}));

export const virtualizedScrollTableColumns: ITableColumn[] = [
  {
    id: "num",
    title: "#",
    width: 100
  },
  {
    id: "text",
    title: "Text"
  }
];

export function sort<T>(columnId: keyof T, sortState: "asc" | "desc" | "none", tableData: T[]) {
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

export const TableAvatar = ({ text }: { text: string }) => (
  <Avatar
    text={text
      .split(" ")
      .map(s => s[0])
      .join("")}
    customSize={24}
    size={Avatar.sizes.SMALL}
    ariaLabel={text}
    backgroundColor={Avatar.colors.DARK_PURPLE}
  />
);
