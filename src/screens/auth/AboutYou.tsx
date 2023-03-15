import React, { ReactElement, useState } from 'react';

import { Box, Center, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ButtonsBlock from 'helpers/ButtonsBlock';
import CustomInput from 'helpers/Input';
import Layout from 'helpers/Layout';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateUser } from 'redux/slices/user';

// Компонент экрана информации о текущем пользователе
const ScreensAuthAboutYou = (): ReactElement => {
  const { userSurname, userName, userMiddleName } = useAppSelector(state => state.currentUser);

  const [surname, setSurname] = useState<string>(userSurname || '');
  const [name, setName] = useState<string>(userName || '');
  const [middleName, setMiddleName] = useState<string>(userMiddleName || '');

  const { navigate, goBack } = useNavigation<ScreensAuthIndexNavigationProps>();

  const dispatch = useAppDispatch();

  // Обработка ввода фамилии пользователя
  const handleChangeSurname = (text: string) => setSurname(text);

  // Обработка ввода имени пользователя
  const handleChangeName = (text: string) => setName(text);

  // Обработка ввода отчества пользователя
  const handleChangeMiddleName = (text: string) => setMiddleName(text);

  // Переход на этап регистрации с вводом информации об оказании услуг + сохранение введенных данных
  const openProvideServicesScreen = () => {
    dispatch(updateUser({ userSurname: surname, userName: name, userMiddleName: middleName }));

    navigate('ScreensAuthProvideServices');
  };

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='xl' textAlign='center' color='primary' bold mb={5}>Как Вас зовут?</Text>

          <Text fontSize='xs' color='textGray' fontWeight='semibold' mb={5}>
            Пожалуйста, укажите  Ваши ФИО как в паспорте, это  важно для проверки
          </Text>

          <CustomInput value={surname}
                       onChangeText={handleChangeSurname}
                       placeholder='Фамилия' />

          <CustomInput value={name}
                       onChangeText={handleChangeName}
                       placeholder='Имя' />

          <CustomInput value={middleName}
                       onChangeText={handleChangeMiddleName}
                       placeholder='Отчество' />
        </Center>

        <ButtonsBlock mainButtonFunction={openProvideServicesScreen}
                      sideButtonFunction={goBack} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthAboutYou;
