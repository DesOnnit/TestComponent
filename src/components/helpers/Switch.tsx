import React, { ReactElement, useState } from 'react';

import ToggleSwitch from 'toggle-switch-react-native';
import { useTheme } from 'native-base';

interface PropsInterface {
  action: () => void, // Переданная функция для Switch переключения
  isActive: boolean // Переключен ли Switch
}

// Вывод кнопки переключателя
const Switch = ({ action, isActive }: PropsInterface): ReactElement => {
  const [isToggled, setIsToggled] = useState<boolean>(isActive || false);

  const { colors } = useTheme();

  // Переключение состояния кнопки + выполнение переданного действия
  const toggleSwitch = () => {
    action();

    setIsToggled(!isToggled);
  };

  // Вывод основного контента
  const renderContent = () => (
    <ToggleSwitch isOn={isToggled}
                  onColor={colors.primary}
                  offColor={colors.textGray}
                  size='medium'
                  onToggle={() => toggleSwitch()} />
  );

  return renderContent();
};

export default Switch;
