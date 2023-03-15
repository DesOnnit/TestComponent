import React, { ReactElement } from 'react';

import { Box, Center, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ButtonsBlock from 'helpers/ButtonsBlock';
import Layout from 'helpers/Layout';

import { ScreensAuthIndexNavigationProps } from 'models/Screens';

import { useAppSelector } from 'redux/hooks';

// Компонент экрана вывода всеx введенных данных
const ScreensAuthEnteredData = (): ReactElement => {
  const {
    email,
    phone,
    employment,
    companyName,
    personResponsible,
    userSurname,
    userName,
    userMiddleName,
    wayOfServices,
    placeOfServices
  } = useAppSelector(state => state.currentUser);
  const currentUser = useAppSelector(state => state.currentUser);

  const { goBack } = useNavigation<ScreensAuthIndexNavigationProps>();

  // Вывод блока с электронной почтой и телефоном пользователя
  const renderEmailAndPhoneBlock = () => (
    <>
      <Box mb={2}>
        <Text fontSize='md' color='primary'>Ваш адрес электронной почты:</Text>

        <Text fontSize='xs' textAlign='center' color='black' mt={1}>{email}</Text>
      </Box>

      <Box mb={2}>
        <Text fontSize='md' color='primary'>Ваш телефон:</Text>

        <Text fontSize='xs' textAlign='center' color='black' mt={1}>8{phone}</Text>
      </Box>
    </>
  );

  // Вывод блока с информацией о типе работы
  const renderEmploymentBlock = () => (
    <Box mb={2}>
      <Text fontSize='md' color='primary'>Как Вы работаете:</Text>

      <Text fontSize='xs' textAlign='center' color='black' mt={1}>
        {employment === 'myself' ? 'На себя, я частный специалист' : 'Я ИП или представитель компании'}
      </Text>
    </Box>
  );

  // Вывод информации о компании пользователя
  const renderCompanyBlock = () => (
    <Box>
      {(companyName || personResponsible) && (
        <Box mb={2}>
          <Text fontSize='md' color='primary'>Информация о вашей компании:</Text>

          <Text fontSize='xs' textAlign='center' color='black' mt={1}>{companyName}</Text>

          <Text fontSize='xs' textAlign='center' color='black' mt={1}>{personResponsible}</Text>
        </Box>
      )}
    </Box>
  );

  // Вывод ФИО пользователя
  const renderUserInfoBlock = () => (
    <Box>
      {(userSurname || userName || userMiddleName) && (
        <Box mb={2}>
          <Text fontSize='md' color='primary'>Вас зовут:</Text>

          <Text fontSize='xs' textAlign='center' color='black' mt={1}>{userSurname} {userName} {userMiddleName}</Text>
        </Box>
      )}
    </Box>
  );

  // Вывод информации об оказываемых услугах
  const renderProvideServicesBlock = () => (
    <Box>
      {wayOfServices.length > 0 && (
        <Box>
          <Text fontSize='md' color='primary'>Способ оказания услуг:</Text>

          {wayOfServices.map(elem => (<Text fontSize='xs' textAlign='center' color='black' mt={1}>{elem}</Text>))}
        </Box>
      )}

      {placeOfServices.length > 0 && (
        <Box>
          <Text fontSize='md' color='primary'>Место оказания услуг:</Text>

          {placeOfServices.map(elem => (<Text fontSize='xs' textAlign='center' color='black' mt={1}>{elem}</Text>))}
        </Box>
      )}
    </Box>
  );

  // Вывод блока с введенными пользователем данными
  const renderEnteredDataBlock = () => (
    <Box>
      {renderEmailAndPhoneBlock()}

      {renderEmploymentBlock()}

      {renderCompanyBlock()}

      {renderUserInfoBlock()}

      {renderProvideServicesBlock()}
    </Box>
  );

  // Вывод основного контента
  const renderContent = () => (
    <Layout>
      <Box flex={1}>
        <Center flex={1} px={4}>
          <Text fontSize='xl' textAlign='center' color='primary' bold mb={5}>Введенные данные</Text>

          {renderEnteredDataBlock()}
        </Center>

        <ButtonsBlock mainButtonTitle='Отправить'
                      mainButtonFunction={() => console.log(JSON.stringify(currentUser))}
                      sideButtonFunction={goBack} />
      </Box>
    </Layout>
  );

  return renderContent();
};

export default ScreensAuthEnteredData;
