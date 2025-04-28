
import { useCountdown } from "../../hooks/Countdown";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteHabit } from "../../redux/slices/habitSlice";

interface FCprops {
    id: number,
    title: string
}
const dueDate = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 dagar från nu
export const HabitCard: React.FC<FCprops> = ({id, title})=> {
    const { days, hours, minutes, seconds } = useCountdown(dueDate);
    const dispatch = useAppDispatch();
    return (
        <>
        <p>{title}</p>
        {days}d {hours}h {minutes}m {seconds}s kvar!
        <button onClick={()=> {dispatch(deleteHabit(id))}}>Delete Habit</button>
        </>
    )
}