import { View, Text } from 'react-native';
import { style } from './style';
import { TitleType } from '../../assets/Utils/EnumTypes';

type props = {
    title: string;
    color?: string;
    titleType?: TitleType;
};

const TitleView = ({title, color = '#324551', titleType = TitleType.H1} : props) => {
    return (
        <View style={style.container}>
            <Text style={[
                    style.titleText, 
                    {color: color, 
                    fontSize: titleType, 
                    fontWeight: titleType !== TitleType.H1 ? '700' : '500'}
                ]}>{title}</Text>
        </View>
    );
};

export default TitleView;