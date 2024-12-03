import type { Story } from "@ladle/react";
import { ComponentProps } from "react";
import { BoxShadowButton } from "../BoxShadowButton";
import { Flex } from "@chakra-ui/react";
import { CatalogueLayout } from "@/lib/CatalogueLayout";
import variantMd from "../md/variant.md?raw";

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

Variant.decorators = [
  (Component) => {
    return (
      <>
        <CatalogueLayout mdstring={variantMd}>
          <>
            <Flex
              width={"full"}
              direction={"column"}
              alignItems={"center"}
              gap={"30px"}
            >
              <Component />
            </Flex>
          </>
        </CatalogueLayout>
      </>
    );
  },
];

export { Variant };
