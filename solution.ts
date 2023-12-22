Here is a TypeScript solution using a breadth-first search (BFS) algorithm:

```typescript
class Node {
    word: string;
    steps: number;
    constructor(word: string, steps: number) {
        this.word = word;
        this.steps = steps;
    }
}

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue: Node[] = [];
    queue.push(new Node(beginWord, 1));
    while (queue.length > 0) {
        let node = queue.shift()!;
        let word = node.word;
        if (word === endWord) return node.steps;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let newWord = word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push(new Node(newWord, node.steps + 1));
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList));
```

This TypeScript program finds the shortest transformation sequence from one word to another using a word list. It uses a breadth-first search algorithm to find the shortest path. The `ladderLength` function takes in a `beginWord`, an `endWord`, and a `wordList`. It first checks if the `endWord` is in the `wordList`. If it is not, it returns 0. It then creates a queue and adds the `beginWord` to the queue. It then enters a while loop that continues until the queue is empty. In each iteration of the loop, it removes the first word from the queue and checks if it is the `endWord`. If it is, it returns the number of steps taken to reach the `endWord`. If it is not, it generates all possible words that can be formed by changing one letter of the current word and checks if any of these words are in the `wordList`. If they are, it adds them to the queue and removes them from the `wordList`. It then increments the number of steps taken. If the `endWord` is not found after going through all the words in the `wordList`, it returns 0. The program then calls the `ladderLength` function with a `beginWord` of "hit", an `endWord` of "cog", and a `wordList` of ["hot","dot","dog","lot","log","cog"], and logs the result to the console.