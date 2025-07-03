import { View, Text } from 'react-native';
import { style } from './style';

type props = {
    title: string;
    color?: string;
};

const TitleView = ({title, color = '#324551'} : props) => {
    return (
        <View style={style.container}>
            <Text style={[style.titleText, {color: color}]}>{title}</Text>
        </View>
    );
};

export default TitleView;