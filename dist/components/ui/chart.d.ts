import type { BoxProps, Tokens } from "@chakra-ui/react";
import * as React from "react";
import type { LegendProps, TooltipProps } from "recharts";
interface SeriesItem<T> {
    dataKey: keyof T;
    color: Tokens["colors"] | React.CSSProperties["color"];
    icon?: React.ReactNode;
    label?: React.ReactNode;
    stackId?: string;
    yAxisId?: string;
    strokeDasharray?: string;
}
interface UseChartConfigProps<T> {
    data: T[];
    series?: SeriesItem<T>[];
}
export type ChartColor = Tokens["colors"] | React.CSSProperties["color"];
interface UseChartConfigReturn<T> {
    series: SeriesItem<T>[];
    id: string;
    key: <K extends keyof T>(prop: K) => K;
    color: (key: ChartColor) => string;
    formatter: (options: Intl.NumberFormatOptions) => (value: number) => string;
    highlightedArea: string | null;
    setHighlightedArea: (area: string | null) => void;
    isHighlighted: (area: string) => boolean;
    data: T[];
    getSeries: (key: string) => SeriesItem<T> | undefined;
}
export declare function useChartConfig<T>(props: UseChartConfigProps<T>): UseChartConfigReturn<T>;
interface ChartRootProps extends BoxProps {
    children: React.ReactElement;
    label?: React.ReactNode;
}
export declare const ChartRoot: React.ForwardRefExoticComponent<ChartRootProps & React.RefAttributes<HTMLDivElement>>;
interface ChartGradientProps {
    id: string;
    fillOpacity?: number;
    stops: {
        color: ChartColor;
        offset: string | number;
        opacity?: number;
    }[];
}
export declare const ChartGradient: React.ForwardRefExoticComponent<ChartGradientProps & React.RefAttributes<SVGLinearGradientElement>>;
interface ChartLegendContentProps<T extends Record<string, unknown>> extends LegendProps {
    chart: UseChartConfigReturn<T>;
    nameKey?: Exclude<keyof T, number | symbol>;
    title?: React.ReactNode;
}
export declare function ChartLegendContent<T extends Record<string, unknown>>(props: ChartLegendContentProps<T>): import("react/jsx-runtime").JSX.Element | null;
interface ChartTooltipContentProps<T> extends TooltipProps<string, string> {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    chart: UseChartConfigReturn<T>;
}
export declare function ChartTooltipContent<T>(props: ChartTooltipContentProps<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=chart.d.ts.map