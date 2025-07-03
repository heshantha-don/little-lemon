import { Pressable, Text } from "react-native";
import { style } from './style';

type props = {
    title: string,
    color?: string,
    onClick: () => void,
};

const ActionButton = ({title, color = '#465A69', onClick} : props) => {
    return (
        <Pressable style={style.container} onPress={onClick}>
            <Text style={[style.font, {color: color}]}>{title}</Text>
        </Pressable>
    );
};

export default ActionButton;