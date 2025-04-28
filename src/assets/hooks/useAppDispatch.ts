// hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store'; // Importera din AppDispatch typ

export const useAppDispatch = () => useDispatch<AppDispatch>();
