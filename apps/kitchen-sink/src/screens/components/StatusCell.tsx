import { Clickable, Text } from "@vibe/core";
import styles from "./StatusCell.module.scss";
import { StatusType, PriorityType } from "./types";

interface StatusCellProps {
  status: StatusType | PriorityType;
  onClick?: () => void;
}

const getStatusColor = (status: StatusType | PriorityType): string => {
  switch (status) {
    // Statuses
    case "Done":
      return "var(--color-done-green)";
    case "Working on it":
      return "var(--color-working_orange)";
    case "Stuck":
      return "var(--color-stuck-red)";
    case "Waiting":
      return "var(--color-dark_purple)";
    case "Sync with other team":
      return "var(--color-dark_indigo)";

    // Priorities
    case "High":
      return "var(--color-stuck-red)";
    case "Medium":
      return "var(--color-egg_yolk)";
    case "Low":
      return "var(--color-bright-blue)";
    case "Critical":
      return "var(--color-blackish)";

    default:
      return "var(--color-american_gray)";
  }
};

export const StatusCell: React.FC<StatusCellProps> = ({ status, onClick }) => {
  const backgroundColor = getStatusColor(status);

  return (
    <Clickable
      onClick={onClick}
      aria-label={status || "Empty status"}
      className={styles.cell}
    >
      <span className={styles.chip} style={{ backgroundColor }}>
        <Text
          type="text2"
          weight="normal"
          align="center"
          element="div"
          color="fixedLight"
          className={styles.label}
        >
          {status || ""}
        </Text>
      </span>
    </Clickable>
  );
};
