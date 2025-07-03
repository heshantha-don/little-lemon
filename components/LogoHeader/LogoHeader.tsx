import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { style } from './style';

const LogoHeader = () => {
    return (
        <SafeAreaView style={style.logoContainer}>
            <Image 
                source={require('../../assets/images/Logo.png')} 
                style={style.logo}
                resizeMode='contain'
            />
        </SafeAreaView>
    );
};

export default LogoHeader;