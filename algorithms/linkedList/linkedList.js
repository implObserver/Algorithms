import { Node } from "./node.js";

export const linkedList = () => {
    const head = Node();
    let tail = head;
    let pretail;
    let length = 0;

    const append = (value) => {
        const node = Node(value);
        tail.setLink(node);
        pretail = tail;
        tail = node;
        ++length;
    }

    const prepend = (value) => {
        const node = Node(value);
        node.setLink(head.getLink());
        head.setLink(node);
        ++length;
    }

    const insertAt = (value, index) => {
        if (index === 0) {
            prepend(value);
        } else {
            const node = Node(value);
            let pointer = head.getLink();
            for (let i = 0; i < index - 1; i++) {
                pointer = pointer.getLink();
            }
            node.setLink(pointer.getLink());
            pointer.setLink(node);
        }
    }

    const getHead = () => {
        return head.getLink();
    }

    const getTail = () => {
        return tail;
    }

    const at = (index) => {
        let pointer = head.getLink();
        for (let i = 0; i < index; i++) {
            pointer = pointer.getLink();
        }
        return pointer;
    }

    const pop = () => {
        pretail.setLink();
        --length;
    }

    const removeAt = (index) => {
        let preNode = index === 0 ? head : at(index - 1);
        let nextNode = at(index + 1);
        preNode.setLink(nextNode);
    }

    const contains = (value) => {
        let pointer = head.getLink();
        while (pointer !== null) {
            if (pointer.getValue() === value) {
                return true;
            }
            pointer = pointer.getLink();
        }
        return false;
    }

    const find = (value) => {
        let pointer = head.getLink();
        let counter = 0;
        while (pointer !== null) {
            if (pointer.getValue() === value) {
                return counter;
            }
            ++counter;
            pointer = pointer.getLink();
        }
        return null;
    }

    const size = () => {
        return length;
    }

    const toString = () => {
        const str = getStr(head);
        console.log(str);
    }

    const getStr = (node) => {
        const link = node.getLink();
        if (link === undefined || link === null) {
            return 'null';
        } else {
            return `${link.getValue()} -> ${getStr(link)}`;
        }
    }

    return { append, prepend, insertAt, getHead, getTail, at, pop, removeAt, contains, find, size, toString };
}