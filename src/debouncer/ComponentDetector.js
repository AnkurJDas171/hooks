const isClassComponent = (component) => {
    const prototype = component.prototype;
    return !!(prototype && prototype.isClassComponent);
}

export default isClassComponent;
