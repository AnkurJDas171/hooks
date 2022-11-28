import { useCallback, useRef } from "react";

const useDebouncer = (callback, delay) => {
    const timerRef = useRef(null);

    const startTimer = useCallback((value) =>
        setTimeout(() => {
            console.log('setTimeOut called with value', value);
            callback(value);
        }, delay)
    , []);

    const fun = useCallback((value) => {
        if (timerRef.current === null) {
            const timer = startTimer();
            timerRef.current = timer;
            clearTimeout(timer);

            return;
        }

        clearTimeout(timerRef.current);
        const timer = startTimer(value);
        timerRef.current = timer;
    }, []);

    return fun;
}

export default useDebouncer;
