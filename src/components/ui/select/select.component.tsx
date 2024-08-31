import { Text, View } from "react-native"
import { ISelectProps, SelectType } from "./select.model"
import stylesSelect from "./select.styles"
import { COLORS, appStyles } from "../../../styles/styles"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import SelectDropdown from "react-native-select-dropdown"
import ArrowDown from "../../../assets/svg/arrow-down.svg";
import selectStyles from "./select.styles"

export const SelectField = <T, > ({
    label,
    error,
    styles,
    options,
    value,
    disabled,
    onChange
} : ISelectProps<T>) =>{
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
        if(value === undefined || value === null){
            fontSize.value = withTiming(16, { duration: 300, easing: Easing.inOut(Easing.quad) });
            transformY.value = withTiming(18, { duration: 300, easing: Easing.inOut(Easing.quad) });
        }
    }

    return(
        <Animated.View style={[stylesSelect.container, styles?.container, disabled ? stylesSelect.disabled : undefined ,animatedErrorStyles]}>
            {
                label  && (
                    <Animated.Text style={[stylesSelect.label, appStyles.textWeight500 ,styles?.label, animatedStyles]}>
                        {label}
                    </Animated.Text>
                )
            }
            <SelectDropdown
                disabled={disabled}
                data={options}
                defaultValue={value}
                onSelect={(selectedItem: SelectType<T>, index) => {
                    if(selectedItem === null){
                        unsetActive()
                    }else{
                        setActive();
                    }

                    onChange(selectedItem);
                }}
                renderButton={(selectedItem, isOpened) => {
                    if(label && (selectedItem === undefined || selectedItem === null)) return <View style={[stylesSelect.dropdownButtonStyle]}>
                        <View></View>
                        <ArrowDown style={selectStyles.dropdownButtonIconStyle} color={disabled ? COLORS.grayText : COLORS.black}/>
                    </View>
                    return (
                        <View style={[stylesSelect.dropdownButtonStyle]}>
                            <Text style={[appStyles.text16, appStyles.textWeight500, stylesSelect.dropdownButtonTxtStyle]}>
                                {(selectedItem && selectedItem.title) || 'Select your mood'}
                            </Text>
                            <ArrowDown style={selectStyles.dropdownButtonIconActiveStyle} color={disabled ? COLORS.grayText : COLORS.black}/>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={[stylesSelect.dropdownItemStyle, {borderTopWidth: index === 0 ? 1 : 0, paddingTop: index === 0 ? 10 : 0  ,borderColor: 'rgba(193, 190, 190, 0.6)'}]}>
                            <Text style={[stylesSelect.dropdownItemTxtStyle, appStyles.text16, appStyles.textWeight400 , {color: isSelected ? COLORS.red : COLORS.black}]}>{item.title}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={stylesSelect.dropdownMenuStyle}
                dropdownOverlayColor="transparent"
            />
            <Animated.Text style={[stylesSelect.error, animatedOpacityStyles]}>{error || ""}</Animated.Text>
        </Animated.View>
    )
}