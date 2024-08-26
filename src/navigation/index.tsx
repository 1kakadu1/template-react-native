import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, ScreenName } from "./navigation.model";
import { navigationRef } from "./navigation.utils";
import HomeScreen from "../screens/home";
import  AboutDetailScreen from "../screens/about-detail";
import AboutScreen  from "../screens/about";
import QrCodeScreen from "../screens/qr";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationApp = ()=>{
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={ScreenName.home}>
                <Stack.Group>
                    <Stack.Screen 
                        name={ScreenName.qr_code} 
                        component={QrCodeScreen}
                    />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen 
                        name={ScreenName.home} 
                        component={HomeScreen}
                    />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen 
                        name={ScreenName.about} 
                        component={AboutScreen} 
                    />
                    <Stack.Screen 
                        name={ScreenName.about_detail} 
                        component={AboutDetailScreen} 
                        options={{
                            animation: 'slide_from_bottom',
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 