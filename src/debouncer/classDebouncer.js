class ClassDebouncer {
    constructor(callback, delay){
        this.callback = callback;
        this.delay = delay;
        this.timer = null;
    }

    startTimer = (value) => {
        this.timer = setTimeout(()=> {
            console.log('class setTimeout called with value: ', value);
            this.callback(value);
        }, this.delay)
    }

    debounceFun = (value) => {
        if(this.timer) clearTimeout(this.timer);
        this.startTimer(value);
    }
}

export default ClassDebouncer;
