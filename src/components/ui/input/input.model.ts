import { ReactNode } from "react"
import { StyleProp, ViewStyle, TextStyle ,TextInputProps } from "react-native"
import { Mask } from "react-native-mask-input";

export interface IInputProps extends TextInputProps {
    styles?: {
        container?:  StyleProp<ViewStyle>,
        endAdornment?: StyleProp<ViewStyle>,
        startAdornment?: StyleProp<ViewStyle>,
        input?: StyleProp<TextStyle>,
        label?: StyleProp<TextStyle>
    },
    endAdornment?: ReactNode;
    startAdornment?: ReactNode;
    label?: string;
    error?: string;
    beforeElement?: ReactNode
}

export interface IInputMaskProps extends IInputProps{
    mask?: Mask,
    placeholderOff?: boolean;
}

export interface IMaskProps extends IInputMaskProps{
    mask?: Mask,
    placeholderOff?: boolean;
    makeMask:{
        onChangeText: (text: string) => void;
        value: string;
        selection: {
            start: number;
            end: number;
        } | undefined;
        placeholder: string | undefined;
    }
}