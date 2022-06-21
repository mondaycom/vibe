import { TokenTable } from "../../../components/token-table/token-table";

export const EasingTokenTable = () => {
    const theadData = ["Token", "Usage", "Cubic bezier", "After effects"];

    const tbodyData = [
        {
            id: "1",
            items: ["motion-timing-enter", "Entence", "",""]
        },
        {
            id: "2",
            items: ["motion-timing-exit", "Small expansions, small notifications","",""]
        },
        {
            id: "3",
            items: ["motion-timing-transition", "expansions,  distance movment", "",""]
        },
        { id: "4", items: ["motion-timing-emphesize - short", "Notification - elastic / bounce","",""] },
    ];
    return (
        <div>
            <TokenTable theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};
