import React, { ReactElement, useState } from 'react';

import { Box, Center, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ButtonsBlock from 'helpers/ButtonsBlock';
import CustomInput from 'helpers/Input';
import Layout from 'helpers/Layout';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateUser } from 'redux/slices/user';

// Компонент экрана информации о компании
const ScreensAuthAboutСompany = (): ReactElement => {
  const { companyName, personResponsible } = useAppSelector(state => state.currentUser);

  const [company, setСompany] = useState<string>(companyName || '');
  const [personInfo, setPersonInfo] = useState<string>(personResponsible || '');

  const { navigate, goBack } = useNavigation<ScreensAuthIndexNavigationProps>();

  const dispatch = useAppDispatch();

  // Обработка ввода названии компании
  const handleChangeCompany = (text: string) => setСompany(text);

  // Обработка ввода данных ответственного лица
  const handleChangePersonInfo = (text: string) => setPersonInfo(text);

  // Переход на этап регистрации с вводом информации об оказании услуг + сохранение введенных данных
  const openProvideServicesScreen = () => {
    dispatch(updateUser({ companyName: company, personResponsible: personInfo }));

    navigate('ScreensAuthProvideServices');
  };

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='xl' textAlign='center' color='primary' bold mb={10}>Как называется Ваша компания?</Text>

          <CustomInput value={company}
                       onChangeText={handleChangeCompany}
                       placeholder='Название компании' />

          <CustomInput value={personInfo}
                       onChangeText={handleChangePersonInfo}
                       placeholder='ФИО ответственного лица за анкету' />
        </Center>

        <ButtonsBlock mainButtonFunction={openProvideServicesScreen}
                      sideButtonFunction={goBack} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthAboutСompany;
