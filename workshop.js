//Problem 1

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorder(root, result=[]){

    if(root !== null){
        inorder(root.left, result)
        result.push(root.value)
        inorder(root.right, result)
    }

    return result
}

// Create nodes for a binary tree with values [1,2,3,4,5]
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left= new Node(4);
root.left.right = new Node(5);

//Example:
console.log(inorder(root));



//Problem 2

function isSameTree(root1, root2){
    if (root1 === null && root2 === null) {
        return true
    }

    if(root1 === null || root2 === null){
        return false
    }

    if(root1.value !== root2.value ){
        return false
    }

    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)

}


const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

//Example:
console.log(isSameTree(root1, root2)); 


//Problem 3

function countNodes(tree){

    if(tree === null){
        return 0
    }

    let count = 1;

    count += countNodes(tree.left); //this really means count = count + countNodes(tree.left)
    count += countNodes(tree.right); //this really means count = count + countNodes(tree.right)

    return count;

}



const tree = new Node(10);
tree.left = new Node(11);
tree.right = new Node(12);
tree.left.left = new Node(13);
tree.left.right = new Node(14);
tree.right.left = new Node(15);
tree.right.right = new Node(16);

//Example:
console.log(countNodes(tree));




//Problem 4

function bottomMostLeftNode(treeNode){
    if(!treeNode){
        return null
    }

    let result = null;
    let queue = [treeNode];

    while (queue.length > 0) {
        const levelSize = queue.length 

        for(let i = 0; i < levelSize; i++){
            const node = queue.shift();

            if(i === 0){
                result = node.value;
            }

            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }
    }

    return result;

}

const treeNode = new Node(1);
treeNode.left = new Node(2);
treeNode.right = new Node(3);
treeNode.left.left= new Node(4);
treeNode.left.right = new Node(5);
treeNode.left.left.left = new Node(6);

//Example:
console.log(bottomMostLeftNode(treeNode));