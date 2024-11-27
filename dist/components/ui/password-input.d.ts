import type { GroupProps, InputProps, StackProps } from "@chakra-ui/react";
import * as React from "react";
export interface PasswordVisibilityProps {
    defaultVisible?: boolean;
    visible?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    visibilityIcon?: {
        on: React.ReactNode;
        off: React.ReactNode;
    };
}
export interface PasswordInputProps extends InputProps, PasswordVisibilityProps {
    rootProps?: GroupProps;
}
export declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;
interface PasswordStrengthMeterProps extends StackProps {
    max?: number;
    value: number;
}
export declare const PasswordStrengthMeter: React.ForwardRefExoticComponent<PasswordStrengthMeterProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=password-input.d.ts.map