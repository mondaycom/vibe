import "./IconContainer.scss";

export const IconContainer = ({ icon }: { icon: React.FC }) => {
  return <div className="monday-ui-style-storybook_icon-container">{icon({})}</div>;
};

export default IconContainer;
