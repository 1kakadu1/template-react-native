import { ReactNode } from "react"
import { StyleProp, ViewStyle, TextStyle ,TextInputProps } from "react-native"

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
}