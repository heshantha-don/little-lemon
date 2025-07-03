import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { style } from './style';

type Props = {
    title: string;
    inputLength?: number;
    placeholder?: string;
    isSecureEntry?: boolean;
    keyboardType?: 'default' | 'email-address';
    color?: string;
    onChangeText?: (text: string) => void;
};

const TextInputField = ({title, 
                         inputLength = Infinity, 
                         placeholder, 
                         isSecureEntry = false,
                         color = '#324551',
                         keyboardType = 'default',
                         onChangeText} : Props) => {
                            
    const [value, setValue] = useState('');
    const handleChangeText = (text: string) => {
        if (text.length <= inputLength) {
            setValue(text);
            onChangeText?.(text);
        };
    };

    return (
        <View style={style.containter}>
            <Text style={[style.title, 
                          style.font, 
                          {color: color}]}>{title}</Text>
            <TextInput 
                style={[style.inputField, 
                        style.font, 
                        {color: color}]} 
                onChangeText={handleChangeText} 
                value={value}
                placeholder={placeholder}
                secureTextEntry={isSecureEntry}
                keyboardType={keyboardType}
                // onChangeText={(text) => {
                //     setValue(text);
                //     onChangeText?.(text);
                // }} 
                // maxLength={inputLength}
            />
        </View>
    );
};

export default TextInputField;