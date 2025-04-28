import { useState } from "react";


const Habitform = ()=> {
    const [habitName, updateName] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log(habitName);
        updateName('');
    }
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        updateName(e.target.value)

    }
    return (
        <div className="bg-primary">
        <form onSubmit={handleSubmit} >
            <label htmlFor="habitName">Name your Habit</label>
            <input type="text" name="habitName" id="habitName" value={habitName} onChange={ onChange}/>
            <button type="submit">Add new Habit</button>
        </form>
        </div>
    )
}
export default Habitform