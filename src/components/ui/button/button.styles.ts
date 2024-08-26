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
export const UNDERLAY_COLOR ={
  "fill":  COLORS.redActive,
  "outline": COLORS.redLight,
  disabled: COLORS.disabled,
  "fillSecondary":  COLORS.pink,
  "outlineSecondary": COLORS.black30,
  "fillSecondaryDisabled": COLORS.disabled,
  "outlineSecondaryDisabled": COLORS.whiteVeryLight,
  "fillDisabled": COLORS.disabled,
  "outlineDisabled": COLORS.disabled,
}
export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 10,
    height: 62,
    borderWidth: 2
  },
  loader: {
    height: 40,
    width: 40,
  },
  "fill":{
    backgroundColor: COLORS.red,
    color: TEXT_COLOR.fill,
    borderColor: COLORS.red,
  },
  "outline":{
    backgroundColor: "transparent",
    color: TEXT_COLOR.outline,
    borderColor: COLORS.redLight,
  },
  "disabled":{
    backgroundColor: COLORS.disabled,
    color: TEXT_COLOR.disabled,
    borderColor: COLORS.disabled,
  },
  "fillDisabled":  {
    backgroundColor: COLORS.disabled,
    color: TEXT_COLOR.disabled,
    borderColor: COLORS.disabled,
  },
  "outlineDisabled":  {
    backgroundColor: "transparent",
    color: TEXT_COLOR.outlineDisabled,
    borderColor: COLORS.gray,
  },
  "fillSecondary":  {
    backgroundColor: COLORS.white,
    color: TEXT_COLOR.fillSecondary,
    borderColor: COLORS.white,
  },
  "outlineSecondary": {
    backgroundColor: COLORS.black10,
    color: TEXT_COLOR.outlineSecondary,
    borderColor: COLORS.white,
  },
  "fillSecondaryDisabled":  {
    backgroundColor: COLORS.disabled,
    color: TEXT_COLOR.fillSecondaryDisabled,
    borderColor: COLORS.disabled,
  },
  "outlineSecondaryDisabled":  {
    backgroundColor: COLORS.black10,
    color: TEXT_COLOR.outlineSecondaryDisabled,
    borderColor: COLORS.graySecond,
  },
})
