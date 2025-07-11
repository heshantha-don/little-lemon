import { ScrollView, View } from 'react-native';
import { Routes } from '../../navigation/Routes';

import LogoHeader from '../../components/LogoHeader/LogoHeader';
import TextInputField from '../../components/TextInputField/TextInputField';
import LabelView from '../../components/LabelView/LabelView';
import ActionButton from '../../components/ActionButton/ActionButton';

import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';
import { FontWeight } from '../../assets/Utils/EnumTypes';
import { Constance } from '../../assets/Utils/Constance';
import { TitleType } from '../../assets/Utils/EnumTypes';

const Onboarding = ({ navigation }: { navigation: any }) => {
    return (
        <View style={[{backgroundColor: '#DEE3E9'}, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyle.backgroundColor, globalStyle.flex]}>
                <LogoHeader backgroundColor={'#DEE3E9'} />
                <View style={style.contentContainer}>
                    <LabelView label={Constance.LET_US_GET_TO_KNOW_YOU} />
                    <View>
                        <View style={style.input}>
                            <TextInputField 
                            title={Constance.FIRST_NAME} 
                            inputLength={20}
                            fontSize={20}
                            titleType={TitleType.H3}
                            borderWidth={2}
                            height={50}
                            onChangeText={(text) => {console.log(text)}}
                            />
                        </View>
                        <View style={style.input}>
                            <TextInputField 
                            title={Constance.EMAIL}
                            inputLength={20}
                            keyboardType='email-address' 
                            fontSize={20}
                            titleType={TitleType.H3}
                            borderWidth={2}
                            height={50}
                            onChangeText={(text) => {console.log(text)}}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.buttonContainer}>
                    <ActionButton 
                        title = {Constance.NEXT}
                        color = '#465A69'
                        backgroundColor = '#CBD2D9'
                        borderColor = '#83918C'
                        borderRadius = {10}
                        fontSize = {28}
                        fontWeight = {FontWeight.bold}
                        height = {70}
                        onClick={() => {
                        navigation.navigate(Routes.Home);
                    }} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Onboarding;