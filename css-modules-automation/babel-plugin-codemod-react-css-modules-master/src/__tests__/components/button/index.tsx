import React from "react";
import classnames from "classnames";
import { SvgIconProps } from "components/atoms/icons/SvgIcon";
import "./styles.scss";

export interface ButtonProps {
	disabled?: boolean;
	inToolbar?: boolean;
	block?: boolean;
	shrink?: boolean;
	primary?: boolean;
	secondary?: boolean;
	success?: boolean;
	subtleSuccess?: boolean;
	danger?: boolean;
	subtleDanger?: boolean;
	icon?: React.ReactElement<SvgIconProps>;
	type?: "submit" | "reset" | "button";
	tiny?: boolean;
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	className?: string;
	children?: React.ReactNode;
	noBorder?: boolean;
	noBackground?: boolean;
}

const Button: React.SFC<
	ButtonProps & React.DOMAttributes<HTMLButtonElement>
> = ({
	disabled,
	inToolbar,
	block,
	shrink,
	primary,
	secondary,
	success,
	subtleSuccess,
	danger,
	subtleDanger,
	icon,
	tiny,
	small,
	medium,
	large,
	className,
	children,
	noBorder,
	noBackground,
	...props
}) => {
	const mergedClassName: string = classnames(
		"button",
		{
			"button--icon": icon !== undefined && children === undefined,
			"button--disabled": disabled,
			"button--primary": primary,
			"button--secondary": secondary,
			"button--success": success,
			"button--subtle-success": subtleSuccess,
			"button--danger": danger,
			"button--subtle-danger": subtleDanger,
			"button--tiny": tiny,
			"button--small": small,
			"button--medium": medium,
			"button--large": large,
			"button--block": block,
			"button--no-border": noBorder,
			"button--no-background": noBackground
		},
		className
	);

	return (
		<button {...props} disabled={disabled} className={mergedClassName}>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
};

Button.defaultProps = {
	disabled: false,
	inToolbar: false,
	block: false,
	shrink: false,
	secondary: false,
	success: false,
	subtleSuccess: false,
	danger: false,
	subtleDanger: false,
	type: "button",
	tiny: false,
	small: false,
	medium: false
};

export default Button;
