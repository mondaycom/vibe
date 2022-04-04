import { Contributor } from "../contributor/contributor";
import { Evgeniy, Hadas, Orr, Sahar, Moshe, Nick, Omri } from "../assets";
import "./contributors.scss";

export const Contributors = () => (
  <div className="monday-storybook-welcome-contributors">
    <Contributor
      imgSrc={Orr}
      href="orr@monday.com"
      fullName="Orr Gottlieb"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-1"
    />
    <Contributor
      imgSrc={Evgeniy}
      href="orr@monday.com"
      fullName="Evgeniy Kazenic"
      title="Designer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-2"
    />
    <Contributor
      imgSrc={Hadas}
      href="orr@monday.com"
      fullName="Hadas Farhi"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-3"
    />
    <Contributor
      imgSrc={Moshe}
      href="orr@monday.com"
      fullName="Moshe Zemah"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-4"
    />
    <Contributor
      imgSrc={Sahar}
      href="orr@monday.com"
      fullName="Sahar Brodbeker"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-5"
    />
    <Contributor
      imgSrc={Nick}
      href="orr@monday.com"
      fullName="Nik Savchenko"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-4"
    />
    <Contributor
      imgSrc={Omri}
      href="orr@monday.com"
      fullName="Omri Lavi"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-2"
    />
    <Contributor
      imgSrc={Omri}
      href="orr@monday.com"
      fullName="Yonatan Lev Ari"
      title="Developer"
      className="monday-storybook-welcome-contributors_contributor--bg-pattern-1"
    />
  </div>
);
