import { type BadgeProps, Stat as ChakraStat } from "@chakra-ui/react";
import * as React from "react";
interface StatLabelProps extends ChakraStat.LabelProps {
    info?: React.ReactNode;
}
export declare const StatLabel: React.ForwardRefExoticComponent<StatLabelProps & React.RefAttributes<HTMLDivElement>>;
interface StatValueTextProps extends ChakraStat.ValueTextProps {
    value?: number;
    formatOptions?: Intl.NumberFormatOptions;
}
export declare const StatValueText: React.ForwardRefExoticComponent<StatValueTextProps & React.RefAttributes<HTMLDivElement>>;
export declare const StatUpTrend: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export declare const StatDownTrend: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export declare const StatRoot: React.ForwardRefExoticComponent<ChakraStat.RootProps & React.RefAttributes<HTMLDListElement>>;
export declare const StatHelpText: React.ForwardRefExoticComponent<ChakraStat.HelpTextProps & React.RefAttributes<HTMLElement>>;
export declare const StatValueUnit: React.ForwardRefExoticComponent<ChakraStat.ValueUnitProps & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=stat.d.ts.map