import { mergeSort } from "../mergeSort/mergeSort.js"
import { Node } from "./node.js";

export const Tree = (arr) => {
    const tree = buildTree(arr);
    const getRoot = () => {
        return tree;
    }

    return { getRoot };
}

const buildTree = (arr) => {
    const sortArr = mergeSort(arr);
    const set = new Set(sortArr);
    const processedArr = [...set];
    const start = 0;
    const end = processedArr.length - 1;
    const tree = processedArrayToBST(processedArr, start, end);
    return tree;
}

function processedArrayToBST(arr, start, end) {
    if (start > end) {
        return null;
    }

    var mid = parseInt((start + end) / 2);
    var node = Node(arr[mid]);
    node.setLeft(processedArrayToBST(arr, start, mid - 1));
    node.setRight(processedArrayToBST(arr, mid + 1, end));
    return node;
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.getRight() !== null) {
        prettyPrint(node.getRight(), `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.getValue()}`);
    if (node.getLeft() !== null) {
        prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};