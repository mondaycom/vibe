import { TokenTable } from "../../../components/token-table/token-table";

export const EasingTokenTable = () => {
  const theadData = ["Token", "Usage", "Cubic bezier", "After effects"];

  const tbodyData = [
    {
      id: "1",
      items: ["--motion-timing-enter", "Entrence", "cubic-bezier(0,0,0.35,1)", null]
    },
    {
      id: "2",
      items: ["--motion-timing-exit", "Small expansions, small notifications", "cubic-bezier(0.4,0,1,1)", null]
    },
    {
      id: "3",
      items: ["--motion-timing-transition", "expansions,  distance movment", "cubic-bezier(0.4,0,0.35,1)", null]
    },
    {
      id: "4",
      items: ["--motion-timing-emphesize - short", "Notification - elastic / bounce", "cubic-bezier(0,0,0.2,1.4)", null]
    }
  ];
  return (
    <div>
      <TokenTable theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
};
