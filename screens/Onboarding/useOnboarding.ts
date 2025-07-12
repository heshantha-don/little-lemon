import { useState } from 'react';
import { Routes } from '../../navigation/Routes';
import { updateUserData } from '../../database/AsyncStorage/UserStorage';
import { showAlert } from '../../assets/utils/AlertService';


export const useOnboarding = ({ navigation } : {navigation: any}) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email.trim());

    const handleSubmit = async () => {
        if (!firstName.trim() || !isValidEmail(email)) {
            showAlert('Error', 'Invalid user information', [{text: 'OK'}]);
            return;
        };

        await updateUserData({
            firstName: firstName,
            email: email,
            loggedIn: true,
        });

        navigation.navigate(Routes.Home);
    };

    return {
        setFirstName,
        setEmail,
        handleSubmit,
    };
};