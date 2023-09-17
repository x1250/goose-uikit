import React from "react";
import Flex from "./Flex";
import Text from "../Text/Text";
import { Link } from "../Link";

export default {
  title: "Components/Flex",
  component: Flex,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text>You can apply any flexbox properties on the Flex component.</Text>
      <Flex justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </Flex>
      <Flex justifyContent="center" mt="8px">
        <span>center</span>
      </Flex>
    </div>
  );
};
