export const timeHandler = (start: number, postpone: number)=>{
    const dueDate = Date.now() + postpone * 24 * 60 * 60 * 1000;
    return {startTime: start, dueTime: dueDate}
}