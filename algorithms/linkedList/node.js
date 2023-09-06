export const Node = (val = 'head') => {
    let value = val;
    let link;

    const setValue = (val) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    const setLink = (l = null) => {
        link = l;
    }

    const getLink = () => {
        return link;
    }

    return { setValue, getValue, setLink, getLink }
}