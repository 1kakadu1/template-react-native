
import { formatWithMask, useMaskedInputProps } from 'react-native-mask-input';
import { IInputMaskProps, IMaskProps } from './input.model';
import { InputField } from './input.component';
import { Text, View } from 'react-native';
import { memo, useEffect, useState } from 'react';
import { appStyles } from "../../../styles/styles"
import stylesInput from "./input.styles"

const PlaceholderMask = memo(({placeholderOff, maskPlaceholder}: {placeholderOff: boolean, maskPlaceholder?: string})=>{
  if(placeholderOff === false) return null;
  return(
    <View style={[stylesInput.maskWrap]}>
      <Text style={[appStyles.text16, appStyles.textWeight500, stylesInput.maskText]}>{maskPlaceholder}</Text>
    </View>
  )
})

const Mask = (props: IMaskProps)=>{
  const { makeMask, value, placeholderOff } = props
  const [maskPlaceholder, setMaskPlaceholder] = useState(makeMask.placeholder)

  const cretatePlaceholderMask = (text: string) =>{
    if(placeholderOff && maskPlaceholder && makeMask.placeholder){
      const valueLen = value?.length || 0;
      const { masked } = formatWithMask({
          text: text, 
          mask: props.mask,
      });

      if(masked.length > valueLen){
          setMaskPlaceholder(masked+maskPlaceholder.slice(masked.length, maskPlaceholder.length))
      } else{
          setMaskPlaceholder(masked+makeMask.placeholder.slice(masked.length, makeMask.placeholder.length))
      }
  }
  }
  
  const onChangeTextMask = (text: string) => {
    cretatePlaceholderMask(text);
    makeMask.onChangeText(text)
  }

  useEffect(()=>{
    cretatePlaceholderMask(value || "")
  }, []);

  const InnrerComponent = <PlaceholderMask placeholderOff={placeholderOff || true} maskPlaceholder={maskPlaceholder}/>
  return(
      <InputField 
        {...props} 
        {...makeMask}
        beforeElement={InnrerComponent}
        onChangeText={onChangeTextMask}
        placeholder={placeholderOff ? undefined : makeMask.placeholder}
    />
  )
}

export const InputMask = (props: IInputMaskProps) =>{
  const { value, mask, onChangeText, placeholderOff = true } = props;

  const maskedInputProps = useMaskedInputProps({
    value: value,
    onChangeText: onChangeText,
    mask: mask,
  });


  return <Mask makeMask={maskedInputProps} {...props} placeholderOff={placeholderOff}/>
} 