import { Steps as ChakraSteps } from "@chakra-ui/react";
import * as React from "react";
interface StepInfoProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
}
export interface StepsItemProps extends Omit<ChakraSteps.ItemProps, "title">, StepInfoProps {
    completedIcon?: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const StepsItem: React.ForwardRefExoticComponent<StepsItemProps & React.RefAttributes<HTMLDivElement>>;
interface StepsIndicatorProps {
    completedIcon: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const StepsIndicator: React.ForwardRefExoticComponent<StepsIndicatorProps & React.RefAttributes<HTMLDivElement>>;
export declare const StepsList: React.ForwardRefExoticComponent<ChakraSteps.ListProps & React.RefAttributes<HTMLDivElement>>;
export declare const StepsRoot: React.ForwardRefExoticComponent<ChakraSteps.RootProps & React.RefAttributes<HTMLDivElement>>;
export declare const StepsContent: React.ForwardRefExoticComponent<ChakraSteps.ContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const StepsCompletedContent: React.ForwardRefExoticComponent<ChakraSteps.CompletedContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const StepsNextTrigger: React.ForwardRefExoticComponent<ChakraSteps.NextTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const StepsPrevTrigger: React.ForwardRefExoticComponent<ChakraSteps.PrevTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=steps.d.ts.map