import { Platform, StyleSheet } from 'react-native'
import { COLORS } from '../../../styles/styles'

export default StyleSheet.create({
    input:{
        color: COLORS.black,
        transform: [{translateY: Platform.OS === "android" ? 12 : 10}, {translateX: Platform.OS === "android" ? -3 : 0}]
        //paddingTop: 20,
    },
    label:{
        color: COLORS.grayText,
        position: "absolute",
        top: 0,
        left: 16,
        fontSize: 12,
    },
    container:{
        position: "relative",
        borderRadius: 12,
        backgroundColor: COLORS.grayDesign,
        paddingBottom: 10,
        paddingHorizontal: 16,
        height: 63,
        borderWidth: 2,
        borderColor: COLORS.grayDesign,
        justifyContent: 'center',
        marginBottom: 20
    },
    error:{
        color: COLORS.red,
        position:"absolute",
        left: 0,
        bottom: -20 
    },
    endAdornment:{
        position: "absolute",
        right: 10,
    },
    disabled:{
        backgroundColor: COLORS.disabled,
        borderColor: COLORS.disabled,
    },
    maskText:{
        color: COLORS.grayText
    },
    maskWrap:{
        position: "absolute", 
        bottom: 14,
        left: 17
    }
})
