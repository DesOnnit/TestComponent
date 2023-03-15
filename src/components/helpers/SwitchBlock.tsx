import React, { ReactElement } from 'react';

import { Row, Text } from 'native-base';

import Switch from 'helpers/Switch';

interface PropsInterface {
  icon: ReactElement, // Иконка для блока
  text: string, // Текст информации
  action: () => void, // Действие для Switch переключателя
  isActive: boolean // Переключен ли Switch
}

// Вывод блока информации со Switch переключателем
const SwitchBlock = ({ icon, text, action, isActive }: PropsInterface): ReactElement => {
  // Вывод основного контента
  const renderContent = () => (
    <Row justifyContent='space-between' alignItems='center' mb={5}>
      <Row alignItems='center'>
        {icon}

        <Text fontSize='md' fontWeight='semibold' color='black' ml={4}>{text}</Text>
      </Row>

      <Switch action={action} isActive={isActive} />
    </Row>
  );

  return renderContent();
};

export default SwitchBlock;
