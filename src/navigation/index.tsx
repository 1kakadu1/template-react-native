import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootParamList, ScreenName } from "./navigation.model";
import { navigationRef } from "./navigation.utils";
import HomeScreen from "../screens/home";
import QrCodeScreen from "../screens/qr";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../screens/auth/login";

const Stack = createNativeStackNavigator<RootParamList>();
const Tab = createBottomTabNavigator<RootParamList>();

const TabHomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={ScreenName.home} 
                component={HomeScreen} 
            />
        </Stack.Navigator>
    )
}

const TabQrCodeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={ScreenName.qr_code} 
                component={QrCodeScreen} 
            />
        </Stack.Navigator>
    )
}

const TabsScreens = () =>{
    return(
        <Tab.Navigator initialRouteName={ScreenName.hoome_tabs}>
            <Tab.Screen name={ScreenName.hoome_tabs} options={{ headerShown: false }} component={TabHomeStack} />
            <Tab.Screen name={ScreenName.qr_code_tabs} options={{ headerShown: false }} component={TabQrCodeStack} />
        </Tab.Navigator>
    )
}

export const NavigationApp = ()=>{
    const init = ScreenName.home;

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={init}>
                <Stack.Screen 
                    name={ScreenName.root_tabs} 
                    component={TabsScreens}
                    options={{ headerShown: false }}
                />
      
                <Stack.Group>
                    {/* <Stack.Screen 
                        name={ScreenName.about_detail} 
                        component={AboutDetailScreen} 
                        options={{
                            animation: 'slide_from_bottom',
                        }}
                    /> */}
                    <Stack.Screen
                        name={ScreenName.auth_login_user} 
                        component={LoginScreen} 
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 