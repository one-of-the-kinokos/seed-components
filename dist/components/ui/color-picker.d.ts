import type { IconButtonProps, StackProps } from "@chakra-ui/react";
import { ColorPicker as ChakraColorPicker } from "@chakra-ui/react";
export declare const ColorPickerTrigger: import("react").ForwardRefExoticComponent<ChakraColorPicker.TriggerProps & {
    fitContent?: boolean;
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ColorPickerInput: import("react").ForwardRefExoticComponent<Omit<ChakraColorPicker.ChannelInputProps, "channel"> & import("react").RefAttributes<HTMLInputElement>>;
interface ColorPickerContentProps extends ChakraColorPicker.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const ColorPickerContent: import("react").ForwardRefExoticComponent<ColorPickerContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerInlineContent: import("react").ForwardRefExoticComponent<ChakraColorPicker.ContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerSliders: import("react").ForwardRefExoticComponent<StackProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerArea: import("react").ForwardRefExoticComponent<ChakraColorPicker.AreaProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerEyeDropper: import("react").ForwardRefExoticComponent<IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ColorPickerChannelSlider: import("react").ForwardRefExoticComponent<ChakraColorPicker.ChannelSliderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerSwatchTrigger: import("react").ForwardRefExoticComponent<ChakraColorPicker.SwatchTriggerProps & {
    swatchSize?: ChakraColorPicker.SwatchTriggerProps["boxSize"];
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ColorPickerRoot: import("react").ForwardRefExoticComponent<ChakraColorPicker.RootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerChannelInputs: import("react").ForwardRefExoticComponent<ChakraColorPicker.ViewProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerChannelSliders: import("react").ForwardRefExoticComponent<ChakraColorPicker.ViewProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerLabel: import("react").ForwardRefExoticComponent<ChakraColorPicker.LabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const ColorPickerControl: import("react").ForwardRefExoticComponent<ChakraColorPicker.ControlProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerValueText: import("react").ForwardRefExoticComponent<ChakraColorPicker.ValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerValueSwatch: import("react").ForwardRefExoticComponent<ChakraColorPicker.ValueSwatchProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ColorPickerChannelInput: import("react").ForwardRefExoticComponent<ChakraColorPicker.ChannelInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const ColorPickerSwatchGroup: import("react").ForwardRefExoticComponent<ChakraColorPicker.SwatchGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=color-picker.d.ts.map