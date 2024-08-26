import { AboutDetailScreenNavigationProp, IHomeScreenPropsHomeScreenNavigationProp } from "navigation/navigation.model";
import { StatusBar, Text, View } from "react-native";

export default function AboutDetailScreen(props: AboutDetailScreenNavigationProp) {
    const { navigation } = props;
    return(
        <View style={{ position: "relative", flex: 1}}>
            <StatusBar />
            <Text>AboutDetail</Text>
        </View>
    )
}