import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { style } from './style';
import { TitleType } from '../../assets/Utils/EnumTypes';

type props = {
    extraStyle?: StyleProp<ViewStyle>;
    label: string;
    color?: string;
    titleType?: TitleType;
    fontWeight?: TextStyle['fontWeight'];
};

const LabelView = ({extraStyle, 
                    label: title, 
                    color = '#324551', 
                    titleType = TitleType.H2,
                    fontWeight = (titleType !== TitleType.H2 ? '700' : '500'),
                   } : props) => {
    return (
        <View style={[style.container, extraStyle]}>
            <Text style={[
                    style.titleText, 
                    {color: color, 
                    fontSize: titleType, 
                    fontWeight: fontWeight}
                ]}>{title}</Text>
        </View>
    );
};

export default LabelView;