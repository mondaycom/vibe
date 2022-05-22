import styles from "./Box.module.scss";

export const BACKGROUND_COLORS = Object.freeze(
    {
        PRIMARY_BACKGROUND_COLOR: styles.bgPrimaryBackgroundColor,
        PRIMARY_HOVER_BACKGROUND_COLOR: styles.bgPrimaryBackgroundHoverColor,
        SECONDARY_BACKGROUND_COLOR: styles.bgSecondaryBackgroundColor,
        GREY_BACKGROUND_COLOR: styles.bgGreyBackgroundColor,
        ALL_GREY_BACKGROUND_COLOR: styles.bgAllgreyBackgroundColor,
        INVERTED_COLOR_BACKGROUND: styles.bgInvertedColorBackground,
        DISABLED_BACKGROUND_COLOR: styles.bgDisabledBackgroundColor,
    }
)

export const COLORS = Object.freeze(
        PRIMARY_COLOR: styles.textPrimaryColor,
        PRIMARY_HOVER_COLOR: styles.textPrimaryHoverColor,
        PRIMARY_SELECTED_COLOR: styles.textPrimarySelectedColor,
        PRIMARY_TEXT_COLOR: styles.textPrimaryTextColor,
        TEXT_COLOR_ON_PRIMARY: styles.textTextColorOnInverted,
        TEXT_COLOR_ON_INVERTED: styles.textSecondaryTextColor,
        SECONDARY_TEXT_COLOR: styles.textSecondaryTextColor,
        PLACEHOLDER_COLOR: styles.textPlaceholderColor,
        ICON_COLOR: styles.textIconColor,
        LINK_COLOR: styles.textLinkColor,
        DISABLED_TEXT_COLOR: styles.textDisabledTextColor,
    }
)

export const ROUNDED = Object.freeze(
    {
        NONE: styles.rounded0,
        SMALL: styles.roundedSmall,
        MEDIUM: styles.roundedMedium,
        BIG: styles.roundedBig,
    }
)

export const ROUNDED_TOP = Object.freeze(
    {
        NONE: styles.roundedTop0,
        SMALL: styles.roundedTopSmall,
        MEDIUM: styles.roundedTopMedium,
        BIG: styles.roundedTopBig,
    }
)

export const ROUNDED_END = Object.freeze(
    {
        NONE: styles.roundedEnd0,
        SMALL: styles.roundedEndSmall,
        MEDIUM: styles.roundedEndMedium,
        BIG: styles.roundedEndBig,
    }
)

export const ROUNDED_BOTTOM = Object.freeze(
    {
            NONE: styles.roundedBottom0,
            SMALL: styles.roundedBottomSmall,
            MEDIUM: styles.roundedBottomMedium,
            BIG: styles.roundedBottomBig,
    }
)

export const ROUNDED_START = Object.freeze(
    {
            NONE: styles.roundedStart0,
            SMALL: styles.roundedStartSmall,
            MEDIUM: styles.roundedStartMedium,
            BIG: styles.roundedStartBig,
    }
)

export const SHADOW = Object.freeze(
    {
        SMALL: styles.shadowSmall,
        MEDIUM: styles.shadowMedium,
        LARGE: styles.shadowBig,
    }
)
