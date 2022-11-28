import ClassDebouncer from "./classDebouncer";
import isClassComponent from "./ComponentDetector";
import useDebouncer from "./functionalDebouncer";

const Debouncer = (component, callback, delay) => {
    const classDebouncer = new ClassDebouncer(callback, delay)  
    const functionalDebouncer = useDebouncer(callback, delay); 

    return isClassComponent(component) ? classDebouncer : functionalDebouncer;
}

export default Debouncer;
