import React from "react";
import { Contributor } from "../contributor/contributor";
import { Orr, Hadas, Meirav, Sergey, Yael } from "../assets";
import "./contributors.scss";

const CONTRIBUTERS = [
  {
    imgSrc: Orr,
    fullName: "Orr Gottlieb",
    email: "orr@monday.com",
    title: "Team Lead",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-1"
  },
  {
    imgSrc: Meirav,
    fullName: "Meirav Ron",
    email: "meiravro@monday.com",
    title: "Design Lead",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-2"
  },
  {
    imgSrc: Hadas,
    fullName: "Hadas Farhi",
    email: "hadasfa@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-3"
  },
  {
    imgSrc: Sergey,
    fullName: "Sergey Roytman",
    email: "sergeyro@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-4"
  },
  {
    imgSrc: Yael,
    fullName: "Yael Rosen-Karen",
    email: "yaelro@monday.com",
    title: "Product Designer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-2"
  }
];

export const Contributors = () => (
  <div className="monday-storybook-welcome-contributors">
    {CONTRIBUTERS.map(({ imgSrc, fullName, email, title, className }) => (
      <Contributor key={email} imgSrc={imgSrc} fullName={fullName} email={email} title={title} className={className} />
    ))}
  </div>
);
