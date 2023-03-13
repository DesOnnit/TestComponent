import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'redux/store';

// Типизированный хук для изменения данных в редакс
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Типизированный хук для извлечения данных из редакс
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
