import { Breadcrumb, type SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
export interface BreadcrumbRootProps extends Breadcrumb.RootProps {
    separator?: React.ReactNode;
    separatorGap?: SystemStyleObject["gap"];
}
export declare const BreadcrumbRoot: React.ForwardRefExoticComponent<BreadcrumbRootProps & React.RefAttributes<HTMLDivElement>>;
export declare const BreadcrumbLink: React.ForwardRefExoticComponent<Breadcrumb.LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export declare const BreadcrumbCurrentLink: React.ForwardRefExoticComponent<Breadcrumb.CurrentLinkProps & React.RefAttributes<HTMLElement>>;
export declare const BreadcrumbEllipsis: React.ForwardRefExoticComponent<Breadcrumb.EllipsisProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=breadcrumb.d.ts.map