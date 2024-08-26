import { ReactNode } from "react"
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"

export interface IButtonProps extends TouchableOpacityProps {
    style?: StyleProp<ViewStyle>
    title?: string
    disabled?: boolean
    loading?: boolean
    bordered?: boolean
    icon?: ReactNode
    error?: boolean
    dangerBordered?: boolean
    theme?: "fill" | "outline" | "fillSecondary" | "outlineSecondary"
}