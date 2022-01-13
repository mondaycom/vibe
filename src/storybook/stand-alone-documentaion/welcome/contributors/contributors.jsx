import { Contributor } from "../contributor/contributor";
import { Evgeniy, Hadas, Orr, Sahar, Moshe, Nick, Omri } from "../assets";
import "./contributors.scss";

export const Contributors = () => (
  <div className="monday-storybook-welcome-contributors">
    <Contributor
      imgSrc={Orr}
      fullName="Orr Gottlieb"
      title="Tech Lead"
      className="monday-storybook-welcome-contributors_contributor--orr"
    />
    <Contributor
      imgSrc={Evgeniy}
      fullName="Evgeniy Kazenic"
      title="Product Designer Lead"
      className="monday-storybook-welcome-contributors_contributor--evgeniy"
    />
    <Contributor
      imgSrc={Hadas}
      fullName="Hadas Farhi"
      title="Full Stack Developer"
      className="monday-storybook-welcome-contributors_contributor--hadas"
    />
    <Contributor
      imgSrc={Moshe}
      fullName="Moshe Zemah"
      title="Senior Tech Lead"
      className="monday-storybook-welcome-contributors_contributor--moshe"
    />
    <Contributor
      imgSrc={Sahar}
      fullName="Sahar Brodbeker"
      title="Tech Lead"
      className="monday-storybook-welcome-contributors_contributor--sahar"
    />
    <Contributor
      imgSrc={Nick}
      fullName="Nik Savchenko"
      title="Tech Lead"
      className="monday-storybook-welcome-contributors_contributor--nick"
    />
    <Contributor
      imgSrc={Omri}
      fullName="Omri Lavi"
      title="Senior Full Stack Engineer"
      className="monday-storybook-welcome-contributors_contributor--evgeniy"
    />
  </div>
);
