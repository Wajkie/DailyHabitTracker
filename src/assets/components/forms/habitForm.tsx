import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { newHabit } from "../../redux/slices/habitSlice";


const Habitform = ()=> {
    const dispatch = useAppDispatch();
    const [habitName, updateName] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log(habitName);
        updateName('');
        dispatch(newHabit(habitName));
    }
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        updateName(e.target.value)
        
    }
    return (
        <div className="bg-primary">
            <h3>Register a new habit!</h3>
        <form onSubmit={handleSubmit} >
            <label htmlFor="habitName">Name your Habit</label>
            <input type="text" name="habitName" id="habitName" value={habitName} onChange={ onChange}/>
            <button type="submit">Add new Habit</button>
        </form>
        </div>
    )
}
export default Habitform