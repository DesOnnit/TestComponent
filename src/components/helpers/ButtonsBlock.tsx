import React, { ReactElement } from 'react';

import { Box, Button, Text } from 'native-base';

interface PropsInterface {
  mainButtonFunction: ()=> void, // Функция основной кнопки
  sideButtonFunction: ()=> void // Функция второстепенной кнопки
}

// Вывод блока кнопок
const ButtonsBlock = ({ mainButtonFunction, sideButtonFunction }: PropsInterface): ReactElement => {
  // Вывод основного контента
  const renderContent = () => (
    <Box w='full' px={4}>
      <Button onPress={mainButtonFunction} h={12} borderRadius={8} bg='primary'>
        <Text fontSize='lg' color='light' fontWeight='semibold'>Продолжить</Text>
      </Button>

      <Button onPress={sideButtonFunction}>
        <Text fontSize='lg' color='primary' fontWeight='bold'>НАЗАД</Text>
      </Button>
    </Box>
  );

  return renderContent();
};

export default ButtonsBlock;
