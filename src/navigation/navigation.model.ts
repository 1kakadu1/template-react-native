import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export enum ScreenName{
    home = "Home",
    about = "About",
    about_detail = "AboutDatail",
    qr_code = "QrCode"
}

export type RootStackParamList = {
    [ScreenName.home]: undefined;
    [ScreenName.qr_code]: undefined;
    [ScreenName.about]: { title: string };
    [ScreenName.about_detail]: { title: string };
};


export type IHomeScreenPropsHomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.home
>;

export type AboutScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.about
>;

export type AboutDetailScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.about_detail
>;
export type IQrCodePropsHomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.qr_code
>;

export type Navigation = NativeStackNavigationProp<RootStackParamList, ScreenName, any>