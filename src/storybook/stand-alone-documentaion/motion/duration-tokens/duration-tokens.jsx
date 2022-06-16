import { Flex } from "../../../../components/";
import { TokenInformationBox } from "../token-Information-box/token-information-box";

export const DurationTokens = () => {
  return (
    <div>
      <Flex>
        <TokenInformationBox title={"title"} description={"description"} tokenDescription={"token"} />
        <TokenInformationBox title={"title"} description={"description"} tokenDescription={"token"} />
      </Flex>
    </div>
  );
};
