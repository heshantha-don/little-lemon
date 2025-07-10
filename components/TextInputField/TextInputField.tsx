import React, {useState} from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { style } from './style';
import TitleView from '../../components/TitleView/TitleView';
import { TitleType } from '../../assets/Utils/EnumTypes';

type Props = {
    title: string;
    inputLength?: number;
    placeholder?: string;
    isSecureEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    color?: string;
    backgroundColor?: string;
    fontSize?: number;
    titleType?: TitleType;
    borderWidth?: number;
    height?: number;
    onChangeText?: (text: string) => void;
};

const TextInputField = ({title, 
                         inputLength = Infinity, 
                         placeholder, 
                         isSecureEntry = false,
                         color = '#324551',
                         backgroundColor = '#RRGGBBAA',
                         keyboardType = 'default',
                         fontSize = 12,
                         titleType = TitleType.H4,
                         borderWidth = 1,
                         height = 39,
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
            <View style={style.title}>
                <TitleView  title={title} 
                        color={color}
                        titleType={titleType}  />
            </View>

            <TextInput 
                style={[style.inputField, 
                        style.font, 
                        {color: color,
                         fontSize: fontSize,
                         backgroundColor: backgroundColor,
                         borderWidth: borderWidth,
                         height: height,
                        }]} 
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