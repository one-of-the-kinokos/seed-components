import type { ButtonProps } from "@chakra-ui/react";
import { Toggle as ChakraToggle } from "@chakra-ui/react";
import * as React from "react";
interface ToggleProps extends ChakraToggle.RootProps {
    variant?: keyof typeof variantMap;
    size?: ButtonProps["size"];
}
declare const variantMap: {
    readonly solid: {
        readonly on: "solid";
        readonly off: "outline";
    };
    readonly surface: {
        readonly on: "surface";
        readonly off: "outline";
    };
    readonly subtle: {
        readonly on: "subtle";
        readonly off: "ghost";
    };
    readonly ghost: {
        readonly on: "subtle";
        readonly off: "ghost";
    };
};
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ToggleIndicator: React.ForwardRefExoticComponent<ChakraToggle.IndicatorProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=toggle.d.ts.map