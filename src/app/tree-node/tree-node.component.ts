import { Component, OnInit } from '@angular/core';

class TreeNode {
  constructor(
    public name: string,
    public children: TreeNode[] = [],
    public parent?: TreeNode
  ) {}
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
  selectedNode: TreeNode | null = null;

  addNode(parentNode: TreeNode | null = null) {
    if (!parentNode) {
      const newNode = new TreeNode(
        `Node ${this.generateUniqueIndex(parentNode)}`
      );
      this.nodes.push(newNode);
    } else {
      const newNode = new TreeNode(
        `Node ${this.generateUniqueIndex(parentNode)}`
      );
      parentNode.children.push(newNode);
    }
    console.log(this.nodes);
  }

  addSiblingNode(parentNode: TreeNode) {
    if (parentNode.parent) {
      const newNode = new TreeNode(
        `Node ${this.generateUniqueIndex(parentNode.parent)}`
      );
      parentNode.parent.children.push(newNode);
      console.log(this.nodes);
    }
  }

  generateUniqueIndex(parentNode: TreeNode | null = null): number {
    if (!parentNode) {
      return this.nodes.length + 1;
    }

    return parentNode.children.length + 1;
  }

  getNodeIndex(parentIndex: string, index: number): string {
    return parentIndex === ''
      ? (index + 1).toString()
      : `${parentIndex}.${index + 1}`;
  }

  onSelectNode(node: TreeNode) {
    this.selectedNode = node;
  }
}
