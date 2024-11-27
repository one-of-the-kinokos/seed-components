import { PinInput as ChakraPinInput } from "@chakra-ui/react";
import * as React from "react";
export interface PinInputProps extends ChakraPinInput.RootProps {
    rootRef?: React.Ref<HTMLDivElement>;
    count?: number;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    attached?: boolean;
}
export declare const PinInput: React.ForwardRefExoticComponent<PinInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=pin-input.d.ts.map