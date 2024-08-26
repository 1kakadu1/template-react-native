import {  Text, TouchableHighlight } from "react-native"
import { IButtonProps } from "./button.model"
import styles, { TEXT_COLOR, UNDERLAY_COLOR } from "./button.styles"
import { appStyles } from "../../../styles/styles"
import { useMemo } from "react"

export const Button = ({ 
    title,
    disabled,
    loading,
    style,
    icon,
    theme = 'fill',
    ...props
}: IButtonProps) =>{
    const themeStyles = useMemo(()=>{

        if(disabled === true){
            return {
                style: styles[`${theme}Disabled`],
                underlayColor: UNDERLAY_COLOR[`${theme}Disabled`],
                textColor: TEXT_COLOR[`${theme}Disabled`], 
            }
        }

        return {
            textColor: TEXT_COLOR[theme],
            style: styles[theme],
            underlayColor: UNDERLAY_COLOR[theme]
        }
    }, [disabled, theme])
    return(
        <TouchableHighlight 
            {...props}
            underlayColor={themeStyles.underlayColor}
            disabled={disabled}
            style={[
                style, 
                styles.btn, 
                themeStyles.style
            ]}
        >
            <>
                {icon}
                <Text style={[appStyles.textWeight500, appStyles.text18, {color: themeStyles.textColor}]}>{title}</Text>
            </>
        </TouchableHighlight>
    )
}