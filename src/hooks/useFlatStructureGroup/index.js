import {useCallback} from "react";

export function useFlatStructureGroup({groupId }) {
    const titleId = ``
    const createTitleComponent =
        useCallback((titleContent) =>
            <div role="group" aria-labelledby={titleId}>
                <span role="presentation" id={titleId}>
                    {titleContent}
                </span>
            </div>, [titleId]);
    const createOptionComponent = useCallback((itemContent));
    const optionProps = {role: }
}
