import { Contributor } from "../contributor/contributor";
import { Rotem, Evgeniy, Hadas, Orr, Sahar, Moshe } from "../assets";
import "./contributors.scss";

export const Contributors = () => (
  <div className="monday-storybook-welcome-contributors">
    <Contributor imgSrc={Orr} fullName="Orr Gottlieb" title="Tech lead" color={Contributor.colors.DONE_GREEN} />
    <Contributor
      imgSrc={Evgeniy}
      fullName="Evgeniy Kazenic"
      title="Product Designer Lead"
      color={Contributor.colors.AQUAMARINE}
    />
    <Contributor imgSrc={Moshe} fullName="Moshe Zemah" title="Senior Tech Lead" color={Contributor.colors.INDIGO} />
    <Contributor
      imgSrc={Hadas}
      fullName="Hadas Farhi"
      title="Full Stack Developer"
      color={Contributor.colors.EGG_YOLK}
    />
    <Contributor imgSrc={Sahar} fullName="Sahar Brodbeker" title="Tech lead" color={Contributor.colors.LIPSTICK} />
    <Contributor imgSrc={Rotem} fullName="Rotem Dekel" title="Product Designer" color={Contributor.colors.STUCK_RED} />
  </div>
);
