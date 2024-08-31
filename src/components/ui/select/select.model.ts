import { StyleProp, TextStyle, ViewStyle } from "react-native";
export type SelectType<T> = T & {title: string, value: string | number}
export interface ISelectProps<T>{
    label?: string;
    error?: string;
    styles?: {
        container?:  StyleProp<ViewStyle>,
        label?: StyleProp<TextStyle>
    },
    options: SelectType<T>[],
    value?: SelectType<T>,
    disabled?: boolean,
    onChange: (value?: null | SelectType<T>) => void
}