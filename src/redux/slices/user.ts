import { createSlice } from '@reduxjs/toolkit';

interface UserInterface {
  email: string, // Email пользователя
  phone: string, // Телефон пользователя
  employment: string, // Вид занятости пользователя
  companyName?: string, // Название компании
  personResponsible?: string // Информация об ответственном лице
}

// Первоначальные данные текущего пользователя
const initialState = {} as UserInterface;

// Функция Redux Toolkit для создания отдельных функций, работающих с данными текущего пользователя
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Обновление данных в redux текущего пользователя
    update: (state, { payload }) => ({ ...state, ...payload }),

    // Очистка данных в redux о текущем пользователе
    remove: () => initialState
  }
});

export const { update: updateUser, remove: removeUser } = userSlice.actions;

export default userSlice.reducer;
