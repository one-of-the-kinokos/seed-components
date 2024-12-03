import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ReactElement } from "react";
import Markdown from "react-markdown";

function CatalogueLayout(props: { mdstring: string; children: ReactElement }) {
  return (
    <>
      <Flex
        borderWidth={"1px"}
        borderColor={"gray"}
        rounded={"lg"}
        padding={"5px"}
      >
        <Box width={"full"} className="markdown-body">
          <Markdown>{props.mdstring}</Markdown>
        </Box>
        <Spacer
          minWidth={"1px"}
          maxWidth={"1px"}
          marginX={"5px"}
          bgColor={"gray"}
        />
        {props.children}
      </Flex>
    </>
  );
}

export { CatalogueLayout };
