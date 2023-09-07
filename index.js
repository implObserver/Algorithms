import { Tree, prettyPrint } from "./algorithms/binarySearchTree/binarySearchTree.js";
import { linkedList } from "./algorithms/linkedList/linkedList.js";

const list = linkedList();
list.append('one');
list.append('two');
list.append('three');
list.prepend('four');
list.toString();
console.log(list.getHead().getValue());
console.log(list.getTail().getValue());
console.log(list.size())
console.log(list.at(3).getValue())
list.pop();
list.toString();

console.log(list.contains('one'));
console.log(list.find('two'));
list.insertAt('new', 0);
list.toString();
list.removeAt(0);
list.toString();

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(testArr);

prettyPrint(tree.getRoot());
tree.insert(18);
prettyPrint(tree.getRoot());
tree.insert(5000);
prettyPrint(tree.getRoot());
tree.insert(7000);
prettyPrint(tree.getRoot());
tree.insert(4);
prettyPrint(tree.getRoot());
tree.del(777);
prettyPrint(tree.getRoot());