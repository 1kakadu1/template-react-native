import {  Text, TextInput, TouchableHighlight, View } from "react-native"
import { IInputProps } from "./input.model"
import stylesInput from "./input.styles"
import { COLORS, appStyles } from "../../../styles/styles"

export const InputField = ({
    styles,
    endAdornment,
    startAdornment,
    label,
    ...props
} : IInputProps) =>{
    return(
        <View style={[stylesInput.container, styles?.container]}>
            {
                label  && (
                    <Text style={[stylesInput.label, appStyles.textWeight500 ,styles?.label]}>
                        {label}
                    </Text>
                )
            }
            <TextInput 
                {...props}
                style={[
                    props.style, 
                    styles?.input,
                    appStyles.text16,
                    appStyles.textWeight500, 
                    stylesInput.input
                ]}
                placeholderTextColor={COLORS.grayText}
            />
        </View>
    )
}