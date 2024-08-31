import { StyleSheet } from 'react-native'
import { COLORS } from '../../../styles/styles'

export const TEXT_COLOR = {
  "fill":  COLORS.white,
  "outline": COLORS.red,
  disabled: COLORS.grayText,
  "fillSecondary":  COLORS.redActive,
  "outlineSecondary": COLORS.white,
  "fillSecondaryDisabled": COLORS.grayText,
  "outlineSecondaryDisabled": COLORS.graySecondary,
  "fillDisabled": COLORS.grayText,
  "outlineDisabled": COLORS.grayText,
}

export default StyleSheet.create({
    input:{
        color: COLORS.black,
        paddingTop: 20,
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
        height: 63,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: COLORS.grayDesign,
        justifyContent: 'center',
        marginBottom: 20,
    },
    containerError:{

    },
    error:{
        color: COLORS.red,
        position:"absolute",
        left: 0,
        bottom: -20 
    },

    dropdownButtonStyle: {
        width: "100%",
        height: 58,
        backgroundColor: "transparent",
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 16,
        alignItems: "center"
      },
      dropdownButtonIconStyle:{
        marginTop: 10,
      },
      dropdownButtonIconActiveStyle:{
        marginTop: 10,
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        paddingTop: 30
      },
      dropdownMenuStyle: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(193, 190, 190, 0.6)',
        marginTop: 10,
        paddingBottom: 10
      },
      dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dropdownItemTxtStyle: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
      },
      disabledText:{
        color: COLORS.grayText
      },
      disabled:{
        backgroundColor: COLORS.disabled,
        borderColor: COLORS.disabled,
      },
})
