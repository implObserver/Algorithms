import { mergeSort } from "../mergeSort/mergeSort.js"
import { Node } from "./node.js";

export const Tree = (arr) => {
    const root = buildTree(arr);
    const getRoot = () => {
        return root;
    }

    const insert = (val, node = root) => {
        const left = node.getLeft();
        const right = node.getRight();
        const value = node.getValue();
        if (val > value) {
            if (right === null) {
                const newNode = Node(val);
                node.setRight(newNode, node);
                return
            }
            insert(val, right);
        } else if (val < value) {
            if (left === null) {
                const newNode = Node(val);
                node.setLeft(newNode, node);
                return
            }
            insert(val, left);
        } else if (val === value) {
            node.implDuplicate();
            return
        }
    }

    const del = (val, node = root, flag = 'root') => {
        if (node === null) {
            return
        }
        const left = node.getLeft();
        const right = node.getRight();
        const value = node.getValue();
        const count = node.getCount();
        if (val > value) {
            del(val, right, 'right');
        } else if (val < value) {
            del(val, left, 'left');
        } else if (val === value) {
            if (count > 1) {
                node.decDuplicate();
            } else {
                const parent = node.getParent();
                let subNode;
                if (left !== null && right !== null) {
                    subNode = deepLeft(right);
                    const subParent = subNode.getParent();
                    const subRight = subNode.getRight();
                    if (subRight !== null) {
                        subParent.setLeft(subRight, subParent);
                    } else {
                        subParent.setLeft();
                    }
                    if (subNode !== right) {
                        subNode.setRight(right);
                    }
                    subNode.setLeft(left);
                } else {
                    subNode = left === null ? right : left;
                }
                flag === 'left' ? parent.setLeft(subNode, parent) : parent.setRight(subNode, parent);
            }
        }
    }

    const deepLeft = (node) => {
        const left = node.getLeft();
        if (left === null) {
            return node;
        }
        return deepLeft(left);
    }

    return { getRoot, insert, del };
}

const buildTree = (arr) => {
    const sortArr = mergeSort(arr);
    const set = new Set(sortArr);
    const processedArr = [...set];
    const start = 0;
    const end = processedArr.length - 1;
    const root = processedArrayToBST(processedArr, start, end);
    return root;
}

function processedArrayToBST(arr, start, end) {
    if (start > end) {
        return null;
    }

    var mid = parseInt((start + end) / 2);
    var node = Node(arr[mid]);
    const left = processedArrayToBST(arr, start, mid - 1);
    const right = processedArrayToBST(arr, mid + 1, end);
    node.setLeft(left, node);
    node.setRight(right, node);
    return node;
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.getRight() !== null) {
        prettyPrint(node.getRight(), `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getValue()}(${node.getCount()})`);
    if (node.getLeft() !== null) {
        prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};