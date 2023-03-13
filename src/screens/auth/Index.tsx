import React, { ReactElement } from 'react';

import { Text } from 'native-base';

// Компонент экрана первого шага регистрации
const ScreensAuthIndex = (): ReactElement => {
  // Вывод основного контента
  const renderContent = () => (
    <Text>Регистрация</Text>
  );

  return renderContent();
};

export default ScreensAuthIndex;
