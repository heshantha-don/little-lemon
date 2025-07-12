import { useState, useEffect } from 'react';
import { getUserData, updateUserData, clearUserData } from '../database/AsyncStorage/UserStorage';
import { showAlert } from '../assets/utils/AlertService';

export const useProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orderStatuses, setOrderStatuses] = useState(false);
    const [passwordChanges, setPasswordChanges] = useState(false);
    const [specialOffers, setSpecialOffers] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email.trim());
    const isValidPhoneNumber = (phone: string) => /^\d+$/.test(phone.trim());

    const setUserData = async () => {
        try {
            const userData = await getUserData();
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setEmail(userData.email);
            setPhoneNumber(userData.phoneNumber);
            setOrderStatuses(userData.preferences.orderStatus);
            setPasswordChanges(userData.preferences.passwordChanges);
            setSpecialOffers(userData.preferences.specialOffers);
            setNewsletter(userData.preferences.newsletter);
        } catch (e) {
            console.error('Failed to get user data', (e));
        };
    };

    useEffect(() => {
        setUserData();
    }, []);

    const discardChanges = () => {
        setUserData();
    };

    const saveChanges = async () => {
        try {
            if (!firstName.trim() || !lastName.trim() || !isValidEmail(email) || !isValidPhoneNumber(phoneNumber)) {
                showAlert('Error', 'Invalid user information. Please try again', [{text: 'OK'}]);
                return;
            };

            await updateUserData({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                preferences: {
                    orderStatus: orderStatuses,
                    passwordChanges: passwordChanges,
                    specialOffers: specialOffers,
                    newsletter: newsletter,
                },
            });

            showAlert('Hurray!', 'Great! Information successfully saved!', [{text: 'OK'}]);
        } catch(e) {
            console.log('Error saving user information!', e);
        };
    };

    const logOutUser = async () => {
        try {
            await clearUserData();
        } catch (e) {
            console.error('Error clearing user data', e);
        }
    };

    return{
        firstName,
        lastName,
        email,
        phoneNumber,
        orderStatuses,
        passwordChanges,
        specialOffers,
        newsletter,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setOrderStatuses,
        setPasswordChanges,
        setSpecialOffers,
        setNewsletter,
        discardChanges,
        saveChanges,
        logOutUser,
    };
};