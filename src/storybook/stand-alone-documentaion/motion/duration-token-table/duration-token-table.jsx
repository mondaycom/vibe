import { TokenTable } from "../../../components/token-table/token-table";

export const DurationTokenTable = () => {
  const theadData = ["Token", "Usage", "Value"];

  const tbodyData = [
    {
      id: "1",
      items: ["--motion-productive-short", "Micro-Interactions", "70ms"]
    },
    {
      id: "2",
      items: ["--motion-productive-medium", "Small expansions, small notifications", "100ms"]
    },
    {
      id: "3",
      items: ["--motion-productive-long", "Expansions,  distance movment", "150ms"]
    },
    { id: "4", items: ["--motion-expressive-short", "Notification - elastic/bounce", "250ms"] },
    { id: "5", items: ["--motion-expressive-long", "Notification - elastic/bounce + movment", "400ms"] }
  ];
  return (
    <div>
      <TokenTable theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
};
