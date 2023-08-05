import { Component, OnInit } from '@angular/core';

class TreeNode {
  constructor(public name: string, public children: TreeNode[] = []) {}
}
@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  nodes: TreeNode[] = [new TreeNode('Node 1'), new TreeNode('Node 2')];

  addNode(parentNode: TreeNode | null = null) {
    const newNode = new TreeNode(`Node ${this.generateUniqueIndex(parentNode)}`);
    if (parentNode) {

      parentNode.children.push(newNode);
    } else {
      this.nodes.push(newNode);
    }
console.log(this.nodes)
  }

  generateUniqueIndex(parentNode: TreeNode | null = null): number {
    const indices = this.getAllIndices(parentNode);

    let newIndex = 1;
    while (indices.includes(newIndex)) {
      newIndex++;
    }

    return newIndex;
  }

  getAllIndices(parentNode: TreeNode | null = null): number[] {
    if(parentNode){

    }

    const indices: number[] = [];

    const traverse = (node: TreeNode) => {

      const index = parseInt(node.name.split(' ')[1], 10);

      indices.push(index);

      node.children.forEach(traverse);

    };
    this.nodes.forEach(traverse);
    return indices;
  }

  getNodeIndex(parentIndex: string, index: number): string {

    return parentIndex === '1' ? (index + 1).toString() : `${parentIndex} `;

  }
}
