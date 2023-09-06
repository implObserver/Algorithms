export const Node = (val) => {
    let value = val;
    let left;
    let right;

    const setValue = (val) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    const setLeft = (node) => {
        left = node;
    }

    const getLeft = () => {
        return left;
    }

    const setRight = (node) => {
        right = node;
    }

    const getRight = () => {
        return right;
    }

    return { setValue, getValue, setLeft, getLeft, setRight, getRight }
}