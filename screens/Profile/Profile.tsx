import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LogoHeader from '../../components/LogoHeader/LogoHeader';
import TextInputField from '../../components/TextInputField/TextInputField';
import ActionButton from '../../components/ActionButton/ActionButton';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import BackButton from '../../components/BackButton/BackButton';
import LabelView from '../../components/LabelView/LabelView';
import CheckBoxView from '../../components/CheckBoxView/CheckBoxView';

import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';
import { Constance } from '../../assets/utils/Constance';
import { TitleType, FontWeight } from '../../assets/utils/EnumTypes';



const Profile = ({navigation}: { navigation: any}) => {
    const [isOrderStatusesChecked, setIsOrderStatusesChecked] = useState(false);
    const [isPasswordChanges, setIsPasswordChanges] = useState(false);
    const [isSpecialOffers, setIsSpecialOffers] = useState(false);
    const [isNewsletter, setIsNewsletter] = useState(false);

    return (<SafeAreaView style={[globalStyle.flex, globalStyle.backgroundColor]} edges={['top', 'left', 'right']} >
                <View style={style.header}>
                    <BackButton 
                        extraStyle={style.backButton}
                        onPress={() => {
                        navigation.goBack();
                        }} />
                    <LogoHeader width={200} />
                    <ProfilePicture extraStyle={style.profilePic} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.bodyContainer}>
                        <View style={style.personalInfoContainer}>
                            <View style={style.titleContainer}>
                                <LabelView label={Constance.PERSONAL_INFORMATION} titleType={TitleType.H3} />
                            </View>
                            <View style={style.avatarContainer}>
                                <LabelView label={Constance.AVATAR} titleType={TitleType.H6} />
                                <View style={style.avatarSubContainer}>
                                    <ProfilePicture size={70} />
                                    <View style={style.avatarButton}>
                                        <ActionButton
                                        title={Constance.CHANGE} 
                                        color={'#FFFFFF'}
                                        backgroundColor={'#495E57'}
                                        borderRadius={8}
                                        fontSize={13}
                                        fontWeight={FontWeight.bold}
                                        width = {90}
                                        height = {40}
                                        onClick={() => {}} />
                                    </View>
                                        
                                    <View style={style.avatarButton}>
                                        <ActionButton
                                        title={Constance.REMOVE} 
                                        color={'#495E57'}
                                        borderWidth={1}
                                        borderColor={'#495E57'}
                                        fontSize={13}
                                        fontWeight={FontWeight.bold}
                                        width = {90}
                                        height = {40}
                                        onClick={() => {}} />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.FIRST_NAME} placeholder={'Tilly'} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.LAST_NAME} placeholder={'Doe'} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.EMAIL} 
                                                    keyboardType={'email-address'} placeholder={'tillydoe@example.com'} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.PHONE_NUMBER} 
                                                    keyboardType={'phone-pad'} placeholder={'(217) 555-0113'} />
                                </View>
                            </View>
                        </View>
                        <View style={style.emailInfoContainer}>
                            <View style={style.titleContainer}>
                                <LabelView label={Constance.EMAIL_NOTIFICATIONS} titleType={TitleType.H4} />
                            </View>
                            <View style={style.checkBoxContainer}>
                                <CheckBoxView 
                                    extraStyle={style.checkBox}
                                    label={Constance.ORDER_STATUSES} 
                                    value={isOrderStatusesChecked} 
                                    onValueChange={(val) => {setIsOrderStatusesChecked(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.PASSWORD_CHANGES} 
                                    value={isPasswordChanges} 
                                    onValueChange={(val) => {setIsPasswordChanges(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.SPECIAL_OFFERS} 
                                    value={isSpecialOffers} 
                                    onValueChange={(val) => {setIsSpecialOffers(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.NEWSLETTER} 
                                    value={isNewsletter} 
                                    onValueChange={(val) => {setIsNewsletter(val)}} />
                            </View>
                        </View>
                    </View>
                    <View style={style.buttonContainer}>
                        <ActionButton 
                            title={Constance.LOG_OUT}
                            color={'#181402'}
                            backgroundColor={'#F4CE14'}
                            borderWidth={1}
                            borderColor={'#DCAD54'}
                            borderRadius={5}
                            fontSize={14}
                            fontWeight={FontWeight.bold}
                            height = {40}
                            onClick={() => {}}
                        />
                        <View style={style.saveButtonContainer}>
                            <ActionButton 
                                title={Constance.DISCARD_CHANGES}
                                color={'#495E57'}
                                borderWidth={1}
                                borderColor={'#495E57'}
                                borderRadius={5}
                                fontSize={14}
                                fontWeight={FontWeight.bold}
                                height = {40}
                                paddingLeft={16}
                                paddingRight={16}
                                onClick={() => {}} />

                            <ActionButton 
                                title={Constance.SAVE_CHANGES}
                                color={'#FFFFFF'}
                                backgroundColor={'#495E57'}
                                borderWidth={1}
                                borderColor={'#495E57'}
                                borderRadius={5}
                                fontSize={14}
                                fontWeight={FontWeight.bold}
                                height = {40}
                                paddingLeft={16}
                                paddingRight={16}
                                onClick={() => {}} />
                        </View>
                    </View>
                </ScrollView>
    </SafeAreaView>);
};

export default Profile;