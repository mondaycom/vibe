import { Flex } from "components";
import { principleClarity, principleDelight, principleIntuative, principleSpeed } from "../assets";
import { Principle } from "../../welcome/principle/principle";

export const PrinciplesAccessibility = () => (
  <Flex direction={Flex.directions.ROW} wrap gap={Flex.gaps.LARGE} align={Flex.align.START}>
    <Principle
      imgSrc={principleClarity}
      title="Clear"
      description="Create clear information and design components that will be easy to perceive to all users' senses."
    />
    <Principle
      imgSrc={principleSpeed}
      title="Operable"
      description="Design components and elements that users would be able to use with a keyboard or a keyboard equivalent."
    />
    <Principle
      imgSrc={principleIntuative}
      title="Understandable"
      description="Use simple language and design an easy to use interface that can be understood by all users."
    />
    <Principle
      imgSrc={principleDelight}
      title="Robust"
      description="Create robust content that can accommodate a wide variety of users."
    />
  </Flex>
);
