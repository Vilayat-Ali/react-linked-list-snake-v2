export type coord = {
  x: number;
  y: number;
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT";
};

// Node
export class Node {
  // data member
  public data: any;
  public next: any | null;
  // constructor
  constructor(data: any, next: Node | null = null) {
    this.data = data;
    this.next = null;
  }
}

// Snake
export class Snake {
  // data member
  public head: Node;
  public size: number;
  public isAlive: Boolean;

  // constructor
  constructor(initialSpawnState: coord) {
    this.head = new Node(initialSpawnState);
    this.size = 0;
    this.isAlive = true;
  }

  private addHead(newData: coord) {
    const newNode: Node = new Node(newData, this.head);
    this.head = newNode;
  }

  private removeTail() {
    let start: Node = this.head;
    while (start.next.next !== null) {
      start = start.next;
    }
    start.next = null;
  }

  // grow snake
  public growSnake(newData: coord) {
    let start: Node = this.head;
    while (start.next !== null) {
      start = start.next;
    }
    const newNode: Node = new Node(newData);
    start.next = newNode;
    this.size += 1;
  }

  // move snake
  public moveSnake(newData: coord) {
    // removing tail
    this.removeTail();
    // adding new head
    this.addHead(newData);
  }

  // parse as JSON
  public parseAsJSON(): string {
    return JSON.stringify(this);
  }
}
