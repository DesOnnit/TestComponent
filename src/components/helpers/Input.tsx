import React, { ReactElement } from 'react';

import { Box, Input, Text } from 'native-base';

interface PropsInterface {
  value: string, // Значение инпута
  onChangeText: (value: string) => void, // Изменение текста
  placeholder: string, // Плэйсхолдер
  error?: string | null, // Ошибка
  type?: 'phone'
}

// Вывод кастомного инпута приложения
const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  error,
  type
}: PropsInterface): ReactElement => {
  // Вывод основного контента
  const renderContent = () => (
    <Box mb={3}>
      <Input variant='unstyled'
             value={value}
             w='full'
             px={2}
             color='black'
             onChangeText={onChangeText}
             placeholder={placeholder}
             borderColor='primary'
             borderBottomWidth={1}
             keyboardType={type === 'phone' ? 'numeric' : 'default'}
             h={12} />

      {error && <Text color='error' fontSize='xs' lineHeight='sm' mt={2}>{error}</Text>}
    </Box>

  );

  return renderContent();
};

export default CustomInput;
