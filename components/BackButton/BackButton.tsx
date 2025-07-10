import { View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
import { style } from './style';

type Props = {
    onPress?: () => void,
};

const BackButton = ({ onPress = ()=>{} } : Props) => {
    return (
        <Pressable style={style.container} onPress={() => onPress()}>
            <View style={style.iconContainer} >
                <FontAwesomeIcon style={style.icon} icon={faArrowLeftLong} />
            </View>
        </Pressable>
    );
};

export default BackButton;