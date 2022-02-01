import Avatar from "../../Avatar/Avatar";

export const optionRenderer = ({ src, id, label, position }) => {
  return (
    <div className="person-picker-mock-option">
      <Avatar size={Avatar.sizes.SMALL} src={src} type={Avatar.types.IMG} key={id} />
      <span className="person-picker-mock-name">
        {label}
        <span>{position}</span>
      </span>
    </div>
  );
};
