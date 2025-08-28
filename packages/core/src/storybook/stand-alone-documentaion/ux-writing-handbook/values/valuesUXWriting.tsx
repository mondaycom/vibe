import React from "react";
import { weWorkFor, stayConsistent, stressFree, thePen, writeFor, gradual } from "../assets";
import { Value } from "./values";
import "./valuesUXWriting.scss";

const BASE_CLASS = "monday-storybook-principles";

export const ValuesUXWriting = () => (
  <div className={BASE_CLASS}>
    <Value
      imgSrc={weWorkFor}
      title="We work for the users"
      description="And they don’t work for us. That means we write copy that’s simple, intuitive, and relevant."
    />
    <Value
      imgSrc={stayConsistent}
      title="Stay consistent"
      description="Use consistent terminology across all features and products."
    />
    <Value
      imgSrc={stressFree}
      title="Keep it stress-free"
      description="Do not manipulate or guilt users, even if they choose to do something less profitable for you."
    />
    <Value
      imgSrc={thePen}
      title="Gradual complexity "
      description="Introduce new features one step at a time. Learning takes time."
    />
    <Value
      imgSrc={writeFor}
      title="The pen is mightier than the sword "
      description="Do not use passive-aggressive or offensive language."
    />
    <Value
      imgSrc={gradual}
      title="Write for all readers "
      description="Use clear language without technical jargon or narrow cultural references."
    />
  </div>
);
