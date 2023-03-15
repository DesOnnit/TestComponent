import React, { ReactElement, useState } from 'react';

import { Box, Center, Text } from 'native-base';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';
import { xorBy } from 'lodash';

import ButtonsBlock from 'helpers/ButtonsBlock';
import CheckboxBlock from 'helpers/CheckboxBlock';
import Layout from 'helpers/Layout';
import SwitchBlock from 'helpers/SwitchBlock';

import { IconCar, IconHome, IconPC } from 'svg/common';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateUser } from 'redux/slices/user';

// Компонент экрана информации по оказанию услуг
const ScreensAuthProvideServices = (): ReactElement => {
  const { wayOfServices, placeOfServices } = useAppSelector(state => state.currentUser);

  const [activeSwitchs, setActiveSwitchs] = useState<string[]>(wayOfServices || []);
  const [activeCheckboxes, setActiveCheckboxes] = useState<string[]>(placeOfServices || []);

  const { navigate, goBack } = useNavigation<ScreensAuthIndexNavigationProps>();

  const dispatch = useAppDispatch();

  const servicesData = {
    switchInfo: [
      {
        icon: <IconPC />,
        text: 'Работаю удаленно',
        value: 'Работаю удаленно'
      },
      {
        icon: <IconHome />,
        text: 'Принимаю у себя',
        value: 'Принимаю у себя'
      },
      {
        icon: <IconCar />,
        text: 'Выезжаю к клиентам',
        value: 'Выезжаю к клиентам'
      }
    ],
    checkboxInfo: [
      { text: 'Москва', value: 'Москва' },
      { text: 'Московская область', value: 'Московская область' },
      { text: 'По согласованию', value: 'По согласованию' }
    ]
  };

  // Переход на этап регистрации с выводом введенных данных + сохранение выбранных данных
  const openEnteredDataScreen = () => {
    dispatch(updateUser({ wayOfServices: activeSwitchs, placeOfServices: activeCheckboxes }));

    navigate('ScreensAuthEnteredData');
  };

  // Вывод списка Switch переключателей
  const renderSwitchBlockList = () => {
    const { switchInfo } = servicesData;

    return (
      <Box minH={10} h={140} w='100%'>
        <FlashList data={switchInfo}
                   estimatedItemSize={40}
                   renderItem={({ item: { icon, text, value } }) => (
                     <SwitchBlock icon={icon}
                                  text={text}
                                  isActive={activeSwitchs.includes(value)}
                                  action={() => setActiveSwitchs(prevState => xorBy(prevState, [value]))} />
                   )}
                   showsVerticalScrollIndicator={false}
                   extraData={activeCheckboxes} />
      </Box>
    );
  };

  // Вывод списка чекбоксов
  const renderCheckboxBlockList = () => {
    const { checkboxInfo } = servicesData;

    return (
      <Box minH={10} h={100} w='100%' ml={16}>
        <FlashList data={checkboxInfo}
                   estimatedItemSize={40}
                   renderItem={({ item: { text, value } }) => (
                     <CheckboxBlock isSelected={activeCheckboxes.includes(value)}
                                    setIsSelected={() => setActiveCheckboxes(prevState => xorBy(prevState, [value]))}
                                    text={text}
                                    fontSize='sm'
                                    mb='4' />
                   )}
                   showsVerticalScrollIndicator={false}
                   extraData={activeCheckboxes} />
      </Box>
    );
  };

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='xl' textAlign='center' color='primary' bold mb={10}>Где вы оказываете услуги?</Text>

          {renderSwitchBlockList()}

          {renderCheckboxBlockList()}
        </Center>

        <ButtonsBlock mainButtonFunction={openEnteredDataScreen}
                      sideButtonFunction={goBack} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthProvideServices;
