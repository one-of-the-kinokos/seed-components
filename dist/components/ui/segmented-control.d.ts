import { SegmentGroup } from "@chakra-ui/react";
import * as React from "react";
interface Item {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface SegmentedControlProps extends SegmentGroup.RootProps {
    items: Array<string | Item>;
}
export declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=segmented-control.d.ts.map