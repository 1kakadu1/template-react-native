import { Button, InputField } from "../../components/ui";
import { IHomeScreenPropsHomeScreenNavigationProp, ScreenName } from "../../navigation/navigation.model";
import { ScrollView, StatusBar, View } from "react-native";
import QrIcon from "../../assets/svg/qr.svg";
import QrRedIcon from "../../assets/svg/qr-red.svg";
import { useState } from "react";

export default function HomeScreen( { navigation, route }: IHomeScreenPropsHomeScreenNavigationProp) {
    const [text,setText] = useState("");
    return(
        <ScrollView style={{ position: "relative", flex: 1, paddingHorizontal: 20, backgroundColor:"#000"}}>
            <StatusBar />
            <View style={{gap: 10}}>

            <InputField label="Description" endAdornment={<QrRedIcon/>} />
            <InputField label="Description" value="text"/>
            <InputField label="Edit text" value={text} onChangeText={setText} />
            <InputField label="Description" error="Field empty" />

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.about, {title: ""})}} 
                title="about"/>

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.qr_code)}} 
                title="qr code" theme="outline" 
            />

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.qr_code)}} 
                title="qr code"
                icon={<QrIcon />}
             />

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.qr_code)}} 
                title="qr code" 
                theme="outline" 
                icon={<QrRedIcon/>}
            />

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.qr_code)}} 
                title="qr code"
                disabled
            />

            <Button 
                onPress={()=>{navigation.navigate(ScreenName.qr_code)}} 
                title="qr code"
                theme="outline"
                disabled
            />

            <Button 
                onPress={()=>{}}
                title="Qr code"
                theme='outlineSecondary'
                disabled
            />

            <Button 
                onPress={()=>{}}
                title="Qr code"
                theme='outlineSecondary'
            />

            <Button 
                onPress={()=>{}}
                title="Qr code"
                theme="fillSecondary"
            />

            <Button 
                onPress={()=>{}}
                title="Qr code"
                theme="fillSecondary"
                disabled
            />
            
            </View>  
        </ScrollView>
    )
}