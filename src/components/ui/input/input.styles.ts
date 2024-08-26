import { StyleSheet } from 'react-native'
import { COLORS } from '../../../styles/styles'

export default StyleSheet.create({
    input:{
        color: COLORS.black,
    },
    label:{
        color: COLORS.grayText,
        position: "absolute",
        top: 10,
        left: 16,
        fontSize: 12,
    },
    container:{
        position: "relative",
        borderRadius: 12,
        backgroundColor: COLORS.grayDesign,
        paddingBottom: 10,
        paddingTop: 20,
        paddingHorizontal: 16,
        height: 64,
        justifyContent: 'center'
    }
})
