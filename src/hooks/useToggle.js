import {useState} from "react";

export function useToggle (defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const switchValue = event => setValue(!value);

    return {value, switchValue};
}
