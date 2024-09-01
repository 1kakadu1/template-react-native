import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export enum ScreenName{
    home = "Home",
    qr_code = "QrCode",
    about = "About",
    about_detail = "AboutDatail",
    root_tabs="RootTabs",
    hoome_tabs="HomeTabs",
    qr_code_tabs="QrCodeTabs",
    auth_login_user="AuthLoginUser"
}

interface IParams{
  screen?: string;
  params?: IParams;
}

export type RootParamList = {
    [ScreenName.home]: undefined;
    [ScreenName.qr_code]: undefined;
    [ScreenName.about]: { title: string };
    [ScreenName.about_detail]: { title: string };
    [ScreenName.root_tabs]: IParams;
    [ScreenName.hoome_tabs]: IParams;
    [ScreenName.qr_code_tabs]: IParams;
    [ScreenName.auth_login_user]: IParams;
};


export type IHomeScreenPropsHomeScreenNavigationProp = NativeStackScreenProps<
RootParamList,
  ScreenName.home
>;

export type AboutScreenNavigationProps = NativeStackScreenProps<
RootParamList,
  ScreenName.about
>;

export type AboutDetailScreenNavigationProp = NativeStackScreenProps<
RootParamList,
  ScreenName.about_detail
>;
export type IQrCodePropsHomeScreenNavigationProp = NativeStackScreenProps<
RootParamList,
  ScreenName.qr_code
>;

export type IAuthLOginUserScreenNavigationProp = NativeStackScreenProps<
RootParamList,
  ScreenName.auth_login_user
>;

export type Navigation = NativeStackNavigationProp<RootParamList, ScreenName , any>