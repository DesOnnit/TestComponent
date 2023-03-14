import React, { ReactElement, useState } from 'react';

import { Box, Center, Text } from 'native-base';

import ButtonsBlock from 'helpers/ButtonsBlock';
import CheckboxBlock from 'helpers/CheckboxBlock';
import Layout from 'helpers/Layout';

import { useNavigation } from '@react-navigation/native';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateUser } from 'redux/slices/user';

// Компонент экрана выбора способа работы
const ScreensAuthHowWork = (): ReactElement => {
  const { employment } = useAppSelector(state => state.currentUser);

  const [activeCheckbox, setActiveCheckbox] = useState<string>(employment || '');

  const { navigate, goBack } = useNavigation<ScreensAuthIndexNavigationProps>();

  const dispatch = useAppDispatch();

  // Переход на этап регистрации с уточнением по способу работы + сохранение выбранных данных
  const openEmploymentInfoScreen = () => {
    dispatch(updateUser({ employment: activeCheckbox }));

    if (activeCheckbox === 'myself') navigate('ScreensAuthAboutСompany');
    else navigate('ScreensAuthAboutYou');
  };

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='2xl' textAlign='center' color='primary' bold mb={10}>Как Вы работаете?</Text>

          <Box w='full' px={4}>
            <CheckboxBlock isSelected={activeCheckbox === 'myself'}
                           setIsSelected={() => setActiveCheckbox('myself')}
                           text='На себя, я частный специалист'
                           fontSize='md'
                           mb='8' />

            <CheckboxBlock isSelected={activeCheckbox === 'individualEntrepreneur'}
                           setIsSelected={() => setActiveCheckbox('individualEntrepreneur')}
                           text='Я ИП или представитель компании'
                           fontSize='md' />
          </Box>

        </Center>
        <ButtonsBlock mainButtonFunction={openEmploymentInfoScreen}
                      sideButtonFunction={goBack} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthHowWork;
