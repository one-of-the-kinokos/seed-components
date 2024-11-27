import { ActionBar } from "@chakra-ui/react";
import * as React from "react";
interface ActionBarContentProps extends ActionBar.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const ActionBarContent: React.ForwardRefExoticComponent<ActionBarContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const ActionBarCloseTrigger: React.ForwardRefExoticComponent<ActionBar.CloseTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ActionBarRoot: React.FC<ActionBar.RootProps>;
export declare const ActionBarSelectionTrigger: React.ForwardRefExoticComponent<ActionBar.SelectionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ActionBarSeparator: React.ForwardRefExoticComponent<ActionBar.SeparatorProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=action-bar.d.ts.map