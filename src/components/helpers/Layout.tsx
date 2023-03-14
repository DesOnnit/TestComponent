import React, { FC, ReactElement } from 'react';

import { Box, StatusBar } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { light } from 'theme/themeConfig';

// Интерфейс обертки экранов
interface LayoutInterface {
  children: ReactElement | ReactElement[],
  safeAreaTop?: boolean,
  safeAreaBottom?: boolean,
  safeAreaBottomColor?: string, // Цвет нижней safe area
  safeAreaTopColor?: string // Цвет верхней safe area
}

const defaultProps = {
  safeAreaTop: true,
  safeAreaBottom: true,
  safeAreaBottomColor: light,
  safeAreaTopColor: light
};

// Компонент вывода обертки экранов приложения
const Layout: FC<LayoutInterface> = ({
  children,
  safeAreaTop,
  safeAreaBottom,
  safeAreaBottomColor,
  safeAreaTopColor
}): ReactElement => {
  const insets = useSafeAreaInsets();

  // Вывод основного контента
  const renderContent = () => (
    <Box flex={1}
         bgColor={safeAreaTopColor}
         pt={safeAreaTop ? `${insets.top}px` : 0}
         pb={safeAreaBottom ? `${insets.bottom}px` : 0}>
      <StatusBar barStyle='dark-content' backgroundColor={safeAreaTopColor} translucent={true} />

      <Box position='absolute' bottom={0} w='100%' h='50%' bgColor={safeAreaBottomColor} />

      <Box flex={1} bg={light} position='relative'>
        {children}
      </Box>
    </Box>
  );

  return renderContent();
};

Layout.defaultProps = defaultProps;

export default Layout;
