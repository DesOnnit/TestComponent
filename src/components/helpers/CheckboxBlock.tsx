import React, { ReactElement } from 'react';

import { Box, Center, Pressable, Row, Text } from 'native-base';

interface PropsInterface {
  isSelected: boolean, // Выбран ли чекбокс
  setIsSelected: () => void, // Выбор/ отмена выбора чекбокса
  text: string, // Текст
  fontSize: string, // Размер текста
  mb?: string // Нижний отступ
}

// Коспонент вывода чекбокса
const CheckboxBlock = ({ isSelected, setIsSelected, text, fontSize, mb }: PropsInterface): ReactElement => {
  // Вывод основного контента
  const renderContent = () => (
    <Pressable onPress={setIsSelected} mb={mb}>
      <Row alignItems='center'>
        <Center h={5}
                w={5}
                borderWidth={2}
                borderColor='textGray'>
          {isSelected && <Box w={3} h={3} bgColor='primary' />}
        </Center>

        <Text pl={3} fontSize={fontSize} fontWeight='semibold' color='black'>{text}</Text>
      </Row>
    </Pressable>
  );

  return renderContent();
};

export default CheckboxBlock;
