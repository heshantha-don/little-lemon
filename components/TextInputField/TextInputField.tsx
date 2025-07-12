import React, {useState} from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { style } from './style';
import LabelView from '../LabelView/LabelView';
import { TitleType } from '../../assets/utils/EnumTypes';

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
                         titleType = TitleType.H6,
                         borderWidth = 0.4,
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
                <LabelView  label={title} 
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