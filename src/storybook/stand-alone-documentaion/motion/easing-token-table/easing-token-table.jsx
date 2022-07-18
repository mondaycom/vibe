import { TokenTable } from "../../../components/token-table/token-table";

export const EasingTokenTable = () => {
  const theadData = ["Token", "Usage", "Cubic bezier"];

  const tbodyData = [
    {
      id: "1",
      items: ["--motion-timing-enter", "Entrence", "(0,0,0.35,1)", null]
    },
    {
      id: "2",
      items: ["--motion-timing-exit", "Exit", "(0.4,0,1,1)", null]
    },
    {
      id: "3",
      items: ["--motion-timing-transition", "Transition", "(0.4,0,0.2,1)", null]
    },
    {
      id: "4",
      items: ["--motion-timing-emphesize", "Emphasized easing draws extra attention", "(0,0,0.2,1.4)", null]
    }
  ];
  return (
    <div>
      <TokenTable theadData={theadData} tbodyData={tbodyData} />
    </div>
  );
};
