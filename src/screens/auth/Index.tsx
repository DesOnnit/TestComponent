import React, { ReactElement, useState } from 'react';

import * as EmailValidator from 'email-validator';
import { Box, Center, Text } from 'native-base';
import parsePhoneNumber from 'libphonenumber-js';
import { useNavigation } from '@react-navigation/native';

import ButtonsBlock from 'helpers/ButtonsBlock';
import CustomInput from 'helpers/Input';
import Layout from 'helpers/Layout';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateUser } from 'redux/slices/user';

// Компонент экрана первого шага регистрации
const ScreensAuthIndex = (): ReactElement => {
  const { email: userEmail, phone: userPhone } = useAppSelector(state => state.currentUser);

  const [email, setEmail] = useState<string>(userEmail || '');
  const [phone, setPhone] = useState<string>(userPhone || '');

  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const { navigate } = useNavigation<ScreensAuthIndexNavigationProps>();

  const dispatch = useAppDispatch();

  // Обработка ввода email
  const handleChangeEmail = (text: string) => setEmail(text);

  // Обработка ввода phone
  const handleChangePhone = (phoneNumber: string) => setPhone(phoneNumber);

  // Проверка введенного телефона
  const phoneCheck = () => {
    const phoneNumber = parsePhoneNumber(phone, 'RU');

    // Корректный ли номер
    let isValidPhone = false;
    // Отформатированный номер телефона
    let phoneFormat = '';

    //  Если возможно распарсить номер телефона
    if (phoneNumber) {
      isValidPhone = phoneNumber.isValid();
      phoneFormat = phoneNumber.formatNational().split(' ').join('').substring(1, phoneNumber.formatNational().length);
    }

    if (!isValidPhone) setPhoneError('Введите корректный номер');
    else setPhoneError('');

    return { isValidPhone, phoneFormat };
  };

  // Проверка введенного email
  const emailCheck = () => {
    const isValidEmail = EmailValidator.validate(email);

    if (!isValidEmail) setEmailError('Введите корректный email');
    else setEmailError('');

    return isValidEmail;
  };

  // Переход на этап регистрации с вводом типа работы + сохранение введенных данных
  const openHowWorkScreen = () => {
    const { isValidPhone, phoneFormat } = phoneCheck();
    const isValidEmail = emailCheck();

    if (isValidPhone && isValidEmail) {
      dispatch(updateUser({ email, phone: phoneFormat }));
      navigate('ScreensAuthHowWork');
    }
  };

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='2xl' textAlign='center' color='primary' bold mb={10}>Регистрация</Text>

          <CustomInput value={email}
                       onChangeText={handleChangeEmail}
                       placeholder='Введите пожалуйста Ваш адрес электронной почты'
                       error={emailError} />

          <CustomInput value={phone}
                       onChangeText={handleChangePhone}
                       placeholder='Введите пожалуйста Ваш телефон'
                       type='phone'
                       error={phoneError} />
        </Center>

        <ButtonsBlock mainButtonFunction={openHowWorkScreen}
                      sideButtonFunction={() => console.log('Нет пути назад)')} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthIndex;
