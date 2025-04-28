import { useState } from "react";
import { useStateSelector } from "../../hooks/useStateSelector";
import { HabitCard } from "../habitCard/habitCard";
type activeCard= {
    id: number,
    title: string
} | null;
const Overview = ()=> {
    const [showCard, updateState] = useState(false)
    const [activeCard, setActiveCard] = useState<activeCard>(null)
    const Userhabits = useStateSelector(state =>  state.habits.habits);
    return (
        <div>
            <h2>Habit overview</h2>
            <div>
                <h4>Active Habit trackers</h4>
                <ul>
                    {Userhabits.length === 0 && <li onClick={()=> {updateState(!showCard)}}>Waiting for new habits!</li>}
                    {Userhabits.length >= 1 && Userhabits
                        .map(
                            (habit, index)=> 
                                <li key={index} onClick={()=> { setActiveCard({id: index, title: habit})}}>
                                    {habit}
                                    <span onClick={()=> updateState(!showCard)}>{!showCard ? " - Show" : " - Close"}</span>
                                </li>
                        )}
                </ul>
            </div>
            {showCard && <HabitCard id={activeCard?.id ?? 0} title={activeCard?.title ?? "" }/>}
        </div>
    )
}
export default Overview;