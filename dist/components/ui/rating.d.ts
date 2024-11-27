import { RatingGroup } from "@chakra-ui/react";
import * as React from "react";
export interface RatingProps extends RatingGroup.RootProps {
    icon?: React.ReactElement;
    count?: number;
    label?: React.ReactNode;
}
export declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=rating.d.ts.map