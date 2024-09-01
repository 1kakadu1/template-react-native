import { Button } from "../../components/ui";
import { IAuthLOginUserScreenNavigationProp, ScreenName } from "../../navigation/navigation.model";
import { View } from "react-native"

export const LoginScreen = (props: IAuthLOginUserScreenNavigationProp) =>{
    const { navigation } = props;
    return(
        <View>
            <Button     
                onPress={()=>{
                    navigation.navigate(
                        ScreenName.root_tabs, 
                        {screen: ScreenName.hoome_tabs, params: {
                            screen: ScreenName.home
                        } })
                    }
                 } 
                title="Home"
            />  
        </View>
    )
}