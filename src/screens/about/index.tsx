import { AboutDetailScreenNavigationProp, AboutScreenNavigationProps, IHomeScreenPropsHomeScreenNavigationProp, ScreenName } from "../../navigation/navigation.model";
import { Button, StatusBar, Text, View } from "react-native";

export default function AboutScreen(props: AboutScreenNavigationProps) {
    const { navigation } = props;
    return(
        <View style={{ position: "relative", flex: 1}}>
            <StatusBar />
            <Text>About</Text>
            <Button onPress={()=>{navigation.goBack()}} title="goBack"/>
            <Button onPress={()=>{navigation.navigate(ScreenName.about_detail,{title:""})}} title="modl screen"/>
        </View>
    )
}