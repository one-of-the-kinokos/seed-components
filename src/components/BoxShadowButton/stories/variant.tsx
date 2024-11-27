import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { BoxShadowButton } from "../BoxShadowButton";
import { Box, Flex } from "@chakra-ui/react";
import Markdown from "react-markdown";

type variantsType = Pick<ComponentProps<typeof BoxShadowButton>, "variant">;
const Variant: Story = () => {
  const variants: variantsType[] = [
    { variant: "solid" },
    { variant: "ghost" },
    { variant: "outline" },
    { variant: "plain" },
    { variant: "subtle" },
    { variant: "surface" },
  ];

  return (
    <>
      {variants.map((v) => {
        return (
          <BoxShadowButton key={`${v.variant}`} width={"150px"} {...v}>
            {`${v.variant}`}
          </BoxShadowButton>
        );
      })}
    </>
  );
};

const description = `
# BoxShadowButton

Chakra UIのButtonコンポーネントに影をつけたもの。  
押すと影が消える。  
variantの値を変えることで見た目を変更できる。
`;

Variant.decorators = [
  (Component) => {
    return (
      <>
        <Flex gapX={"5vw"}>
          <Box width={"full"} className="markdown-body">
            <Markdown>{description}</Markdown>
          </Box>
          <Flex
            width={"full"}
            direction={"column"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Component />
          </Flex>
        </Flex>
      </>
    );
  },
];

export { Variant };
