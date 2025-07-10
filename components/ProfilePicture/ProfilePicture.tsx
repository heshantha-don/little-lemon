import { Image } from 'react-native';
import { style } from './style';

type Props = {
    size?: number,
};

const ProfilePicture = ({size = 50} : Props) => {
    return (<Image 
        style={[style.picture, {width: size, height: size, borderRadius: size,}]} 
        source={require('../../assets/images/Profile.png')} />);
};

export default ProfilePicture;