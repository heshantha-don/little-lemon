import { ScrollView, View } from 'react-native';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import TextInputField from '../../components/TextInputField/TextInputField';
import TitleView from '../../components/TitleView/TitleView';
import ActionButton from '../../components/ActionButton/ActionButton';

import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';

const Onboarding = () => {
    return (
        <View style={[globalStyle.backgroundColor, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyle.backgroundColor, globalStyle.flex]}>
                <LogoHeader />
                <View style={style.contentContainer}>
                    <TitleView title={'Let us get to know you'} />
                    <View style={style.inputContainer}>
                        <TextInputField 
                        title='First Name' 
                        inputLength={20}
                        onChangeText={(text) => {console.log(text)}}
                        />
                        <TextInputField 
                        title='Email'
                        inputLength={20}
                        keyboardType='email-address' 
                        onChangeText={(text) => {console.log(text)}}
                        />
                    </View>
                </View>
                <View style={style.buttonContainer}>
                    <ActionButton title='Next' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Onboarding;