import {  NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData, TouchableHighlight, View } from "react-native"
import { IInputProps } from "./input.model"
import stylesInput from "./input.styles"
import { COLORS, appStyles } from "../../../styles/styles"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useMemo } from "react"

export const InputField = ({
    styles,
    endAdornment,
    startAdornment,
    label,
    value,
    error,
    ...props
} : IInputProps) =>{
    const transformY = useSharedValue(value ? 10 : 18);
    const fontSize = useSharedValue(value ? 12 : 16);
    const errorSharedValue = useSharedValue(error ? COLORS.red : COLORS.grayDesign);
    const opacitySharedValue = useSharedValue(error ? 1 : 0);
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: transformY.value }],
      fontSize: fontSize.value
    }));
    const animatedErrorStyles = useAnimatedStyle(() => ({
        borderColor: errorSharedValue.value
    }));
    const animatedOpacityStyles = useAnimatedStyle(() => ({
        opacity: opacitySharedValue.value
    }));

    const setActive = ()=>{
        fontSize.value = withTiming(12, { duration: 300, easing: Easing.inOut(Easing.quad) });
        transformY.value = withTiming(10, { duration: 300, easing: Easing.inOut(Easing.quad) });
    }

    const unsetActive = () =>{
        if(value === undefined || value === ""){
            fontSize.value = withTiming(16, { duration: 300, easing: Easing.inOut(Easing.quad) });
            transformY.value = withTiming(18, { duration: 300, easing: Easing.inOut(Easing.quad) });
        }
    }

    const disabledColor = useMemo(()=>{
     return props?.editable === false ? { color: COLORS.grayText}: undefined;
    }, [props.editable])

    return(
        <Animated.View style={[stylesInput.container, styles?.container, props?.editable === false ? stylesInput.disabled : undefined,animatedErrorStyles]}>
            {
                label  && (
                    <Animated.Text style={[stylesInput.label, appStyles.textWeight500 ,styles?.label, disabledColor , animatedStyles]}>
                        {label}
                    </Animated.Text>
                )
            }
            <TextInput 
                {...props}
                value={value}
                onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                    props?.onFocus && props?.onFocus(e);
                    setActive()
                }}
                onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                    props?.onBlur && props?.onBlur(e);
                    unsetActive();
                }}
                style={[
                    props.style, 
                    styles?.input,
                    appStyles.text16,
                    appStyles.textWeight500, 
                    stylesInput.input,
                    disabledColor
                ]}
                placeholderTextColor={COLORS.grayText}
            />
            {
                endAdornment && (
                    <View style={[stylesInput.endAdornment]}>{endAdornment}</View>
                )
            }
            <Animated.Text style={[stylesInput.error, animatedOpacityStyles]}>{error || ""}</Animated.Text>
        </Animated.View>
    )
}