import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { style } from './style';

type Props = {
    backgroundColor?: string,
};

const LogoHeader = ({ backgroundColor = '#RRGGBBAA' } : Props) => {
    return (
        <SafeAreaView style={[style.logoContainer, {backgroundColor: backgroundColor}]}>
            <Image 
                source={require('../../assets/images/Logo.png')} 
                style={style.logo}
                resizeMode='contain'
            />
        </SafeAreaView>
    );
};

export default LogoHeader;