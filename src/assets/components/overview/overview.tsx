import { useStateSelector } from "../../hooks/useStateSelector";

const Overview = ()=> {
    
    const Userhabits = useStateSelector(state =>  state.habits.habits)
    return (
        <div>
            <h2>Habit overview</h2>
            <div>
                <h4>Active Habit trackers</h4>
                <ul>
                    {Userhabits.length === 0 && <li>Waiting for new habits!</li>}
                    {Userhabits.length <= 1 && Userhabits.map((habit, index)=> <li key={index}> {habit}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Overview;