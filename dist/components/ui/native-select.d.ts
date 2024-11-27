import { NativeSelect as Select } from "@chakra-ui/react";
import * as React from "react";
interface NativeSelectRootProps extends Select.RootProps {
    icon?: React.ReactNode;
}
export declare const NativeSelectRoot: React.ForwardRefExoticComponent<NativeSelectRootProps & React.RefAttributes<HTMLDivElement>>;
interface NativeSelectItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface NativeSelectField extends Select.FieldProps {
    items?: Array<string | NativeSelectItem>;
}
export declare const NativeSelectField: React.ForwardRefExoticComponent<NativeSelectField & React.RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=native-select.d.ts.map