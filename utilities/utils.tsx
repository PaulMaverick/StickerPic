let lastNum = 0;

export const setID = (): number => {
    const max = 10000;
    let result
    do {
        result = Math.floor(Math.random() * max);
    } while( result === lastNum)
    
    lastNum = result;
    return result;
}