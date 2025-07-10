import { Text, StyleProp, ViewStyle, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { style } from './style';

type Props = {
    extraStyle?: StyleProp<ViewStyle>,
    label: string,
    value: boolean;
    onValueChange: (value: boolean)=>void;
};

const CheckBoxView = ({extraStyle, label, value = false, onValueChange}: Props) => {
    return (
        <Pressable style={[style.container, extraStyle]} onPress={() => onValueChange(!value)}>
            <CheckBox
                    style={style.checkBox}
                    value={value}
                    onValueChange={(val) => onValueChange(val)}
                    boxType={'square'}
                    onFillColor={'#40564F'}
                    onTintColor={'#40564F'}
                    onCheckColor={'#FFFFFF'}
                    lineWidth={2}
                />
            <Text style={style.label}>{label}</Text>
        </Pressable>
    );
};

export default CheckBoxView;