import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Увеличиваем количество, если товар уже в корзине
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Добавляем товар в корзину
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id); // Удаляем товар из корзины
        },
        clearCart(state) {
            state.items = []; // Очищаем корзину
        },
        MinusCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem.quantity > 1 ) {
                existingItem.quantity -= 1; // Увеличиваем количество, если товар уже в корзине
            }
            else{
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } 
    },
    PlusCart(state, action) {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem.quantity >= 1) {
            existingItem.quantity += 1; 
        }
        else{
            state.items = state.items.filter(item => item.id !== action.payload.id);
        } 
},
}});

export const { addToCart, removeFromCart, clearCart, MinusCart, PlusCart } = cartSlice.actions;
export default cartSlice.reducer;