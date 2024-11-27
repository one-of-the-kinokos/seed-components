import { Blockquote as ChakraBlockquote } from "@chakra-ui/react";
import * as React from "react";
export interface BlockquoteProps extends ChakraBlockquote.RootProps {
    cite?: React.ReactNode;
    citeUrl?: string;
    icon?: React.ReactNode;
    showDash?: boolean;
}
export declare const Blockquote: React.ForwardRefExoticComponent<BlockquoteProps & React.RefAttributes<HTMLDivElement>>;
export declare const BlockquoteIcon: React.ForwardRefExoticComponent<ChakraBlockquote.BlockquoteIconProps & React.RefAttributes<SVGElement>>;
//# sourceMappingURL=blockquote.d.ts.map