// hooks/useStateSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Importera din rootReducer typ

// Använd en typad selector
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;