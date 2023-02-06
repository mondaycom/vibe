import { FC } from "react";
import { Link } from "../../../components";

type Contributor = {
  name: string;
  href: string;
  key?: string;
};

interface contributorsDataProps {
  contributorsData: Array<Contributor>;
}

export const Contributors: FC<contributorsDataProps> = ({ contributorsData }) => {
  return (
    <>
      {contributorsData.map(({ name, href, key }) => (
        <Link key={key || href} href={href} className="monday-other-contributors-list_developer">
          {name}
        </Link>
      ))}
    </>
  );
};
