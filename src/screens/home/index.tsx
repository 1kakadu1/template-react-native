import { Button, InputField, SelectField, SelectType, InputMask } from "../../components/ui";
import { IHomeScreenPropsHomeScreenNavigationProp, ScreenName } from "../../navigation/navigation.model";
import { ScrollView, StatusBar, View } from "react-native";
import QrIcon from "../../assets/svg/qr.svg";
import QrRedIcon from "../../assets/svg/qr-red.svg";
import { useEffect, useState } from "react";

export default function HomeScreen( { navigation, route }: IHomeScreenPropsHomeScreenNavigationProp) {
    const [text,setText] = useState("");
    const [phone,setPhone] = useState("");
    const [phoneInit,setPhoneinit] = useState("980");
    const [select, setSelect]= useState< SelectType<any> | undefined>(undefined);
    const [selectInit, setSelectInit]= useState< SelectType<any> | undefined>({title: "3", value: 3});

    return(
        <ScrollView style={{ position: "relative", flex: 1, paddingHorizontal: 20, backgroundColor:"#fff"}}>
            <StatusBar />
            <View style={{gap: 10}}>
            <SelectField<SelectType<any>> options={[{title: "1", value: 1}, {title: "3", value: 3}]} label="Number" onChange={setSelect} value={select}/>
            <SelectField<SelectType<any>> 
                options={[{title: "1", value: 1}, {title: "3", value: 3}]} 
                label="Number init" 
                onChange={setSelectInit} 
                value={selectInit}
            />
            <SelectField<SelectType<any>> 
                options={[{title: "1", value: 1}, {title: "3", value: 3}]} 
                label="Number error" 
                onChange={setSelectInit} 
                value={selectInit}
                error="Value null"
            />
            <SelectField<SelectType<any>> 
                options={[{title: "1", value: 1}, {title: "3", value: 3}]} 
                label="Number disabled" 
                onChange={setSelectInit} 
                disabled={true}
            />
            <InputField label="Description" endAdornment={<QrRedIcon/>} />
            <InputField label="Description" value="text"/>
            <InputField label="Description editable" value="text" editable={false} />
            <InputField label="Edit text" value={text} onChangeText={setText} />
            <InputField label="Description" error="Field empty" />
            <InputMask 
                label="Phone" 
                value={phone} 
                onChangeText={setPhone}
                placeholderOff={true}
                mask={['+', '7','(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
            />
            <InputMask 
                label="Phone" 
                value={phoneInit} 
                onChangeText={setPhoneinit}
                placeholderOff={true}
                mask={['+', '7','(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
            />
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