import Avatar from "../../../Avatar/Avatar";

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

export const scrollTableData = [...new Array(5000)].map((_, index) => ({
  id: index,
  num: index,
  text: `This is line number ${index}`
}));

export const scrollTableColumns = [
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
