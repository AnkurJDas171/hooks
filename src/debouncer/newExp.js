
const useDebounce = (callback, delay) => {

    const startTimer = (value) =>
        setTimeout(() => {
            console.log('setTimeOut called with value', value);
            callback(value);
        }, delay);

    const fun = (value) => {
        startTimer(value);
    };

    return fun;
}

export default useDebounce;
