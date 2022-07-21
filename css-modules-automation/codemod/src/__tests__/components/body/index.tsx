import React from "react";
import BalanceText from "@hive/react-balance-text";
import classnames from "classnames";
// import Layout, { LayoutProps } from "components/atoms/layout";

import "./styles.scss";

export interface BodyProps {
    large?: boolean;
    one?: boolean;
    two?: boolean;
    three?: boolean;
    thin?: boolean;
    light?: boolean;
    regular?: boolean;
    medium?: boolean;
    bold?: boolean;
    black?: boolean;
    grey?: boolean;
    white?: boolean;
    red?: boolean;
    green?: boolean;
    left?: boolean;
    center?: boolean;
    right?: boolean;
    balance?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Body: React.StatelessComponent<BodyProps & React.HTMLAttributes<HTMLElement>> = ({
    large,
    one,
    two,
    three,
    thin,
    light,
    regular,
    medium,
    bold,
    black,
    grey,
    white,
    red,
    green,
    left,
    center,
    right,
    balance,
    className,
    children,
    ...rest
}) => {
    const mergedClassName: string = classnames(
        "body",
        {
            "body--importance-one": one || !(one || two || three || large),
            "body--importance-two": two,
            "body--importance-three": three,
            "body--weight-thin": thin,
            "body--weight-light": light,
            "body--weight-regular":
                regular || !(thin || light || regular || medium || bold),
            "body--weight-medium": medium,
            "body--weight-bold": bold,
            "body--color-black": black || !(black || grey || white),
            "body--color-grey": grey,
            "body--color-white": white,
            "body--color-red": red,
            "body--color-green": green,
            "body--alignment-left": left || !(left || center || right),
            "body--alignment-center": center,
            "body--alignment-right": right,
            "body--large": large
        },
        className
    );

    // Wrap children to balance the text if required
    if (balance) {
        children = <BalanceText>{children}</BalanceText>;
    }

    // <Layout {...rest}>
    // </Layout>
    return (
        <p className={mergedClassName} {...rest}>
            {children}
        </p>
    );
};

export default Body;
