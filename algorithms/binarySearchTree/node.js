export const Node = (val) => {
    let parent;
    let value = val;
    let left = null;
    let right = null;
    let count = 1;

    const implDuplicate = () => {
        ++count;
    }

    const decDuplicate = () => {
        --count;
    }

    const getCount = () => {
        return count;
    }

    const setValue = (val) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    const setLeft = (node = null, p = null) => {
        left = node;
        node === null ? null : node.setParent(p);
    }

    const getLeft = () => {
        return left;
    }

    const setRight = (node = null, p = null) => {
        right = node;
        node === null ? null : node.setParent(p);
    }

    const getRight = () => {
        return right;
    }

    const getParent = () => {
        return parent;
    }

    const setParent = (p) => {
        parent = p;
    }

    return { setValue, getValue, setLeft, getLeft, setRight, getRight, implDuplicate, decDuplicate, getCount, getParent, setParent }
}