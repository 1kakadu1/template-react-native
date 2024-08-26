import { Platform, StyleSheet } from 'react-native'

export const COLORS = {
    white: "#fff",
    whiteLight: "rgba(255,255,255, 0.3)",
    whiteVeryLight: "rgba(255,255,255, 0.1)",
    black: '#232020',
    black10:"rgba(255, 255, 255, 0.10)",
    black30:"rgba(255, 255, 255, 0.30)",
    graySecond: '#898989',
    red: "#A3282D",
    redActive:"#891115",
    redLight:"rgba(161, 43, 47, 0.5)",
    grayText: "#C0C0C0",
    gray: "#E8E8E8",
    graySecondary: "#A1A1A1",
    backColor: '#F7F7F7',
    disabled:"#DCDEE4",
    pink: "#FFECED",
    grayDesign: "#F4F5F7"
}

export const appStyles = StyleSheet.create({
  text24: {
    fontSize: 24,
    lineHeight: 28,
  },
  text20: {
    fontSize: 20,
    lineHeight: 24,
  },
  text18: {
    fontSize: 18,
    lineHeight: 20,
  },
  text16: {
    fontSize: 16,
    lineHeight: 20,
  },
  text12: {
    fontSize: 12,
    lineHeight: 14,
  },
  textWeight400: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
  },
  textWeight500: {
    fontFamily: 'RobotoMedium',
    fontWeight: '500',
  },
  textWeight600: {
    fontFamily: 'RobotoBold',
    fontWeight: '600',
  },
  textWeight700: {
    fontFamily: 'RobotoBold',
    fontWeight: '700',
  },

  flex1: {
    flex: 1,
  },
})
