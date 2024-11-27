import type { ButtonProps, RecipeProps } from "@chakra-ui/react";
import { FileUpload as ChakraFileUpload } from "@chakra-ui/react";
import * as React from "react";
export interface FileUploadRootProps extends ChakraFileUpload.RootProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const FileUploadRoot: React.ForwardRefExoticComponent<FileUploadRootProps & React.RefAttributes<HTMLInputElement>>;
export interface FileUploadDropzoneProps extends ChakraFileUpload.DropzoneProps {
    label: React.ReactNode;
    description?: React.ReactNode;
}
export declare const FileUploadDropzone: React.ForwardRefExoticComponent<FileUploadDropzoneProps & React.RefAttributes<HTMLInputElement>>;
interface VisibilityProps {
    showSize?: boolean;
    clearable?: boolean;
}
interface FileUploadListProps extends VisibilityProps, ChakraFileUpload.ItemGroupProps {
    files?: File[];
}
export declare const FileUploadList: React.ForwardRefExoticComponent<FileUploadListProps & React.RefAttributes<HTMLUListElement>>;
type Assign<T, U> = Omit<T, keyof U> & U;
interface FileInputProps extends Assign<ButtonProps, RecipeProps<"input">> {
    placeholder?: React.ReactNode;
}
export declare const FileInput: React.ForwardRefExoticComponent<FileInputProps & React.RefAttributes<HTMLButtonElement>>;
export declare const FileUploadLabel: React.ForwardRefExoticComponent<ChakraFileUpload.LabelProps & React.RefAttributes<HTMLLabelElement>>;
export declare const FileUploadClearTrigger: React.ForwardRefExoticComponent<import("@chakra-ui/react").FileUploadClearTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const FileUploadTrigger: React.ForwardRefExoticComponent<ChakraFileUpload.TriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=file-upload.d.ts.map