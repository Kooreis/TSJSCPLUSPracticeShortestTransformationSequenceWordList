Here is a JavaScript solution using Breadth-First Search (BFS) algorithm:

```javascript
class Node {
    constructor(word, steps) {
        this.word = word;
        this.steps = steps;
    }
}

function findShortestTransformationSequence(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let queue = [];
    queue.push(new Node(beginWord, 1));

    while(queue.length > 0) {
        let node = queue.shift();
        let word = node.word;
        let steps = node.steps;

        if(word === endWord) {
            return steps;
        }

        for(let i = 0; i < word.length; i++) {
            for(let j = 0; j < 26; j++) {
                let newWord = word.substring(0, i) + String.fromCharCode(97 + j) + word.substring(i + 1);
                if(wordSet.has(newWord)) {
                    queue.push(new Node(newWord, steps + 1));
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}

console.log(findShortestTransformationSequence("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
```

This console application will find the shortest transformation sequence from one word to another using a word list. It uses a breadth-first search algorithm to find the shortest path. The `Node` class is used to store each word and the number of steps it took to transform from the beginning word to the current word. The `findShortestTransformationSequence` function takes in the beginning word, the end word, and the word list. It then uses a queue to store each node and checks if the current word is the end word. If it is, it returns the number of steps. If it's not, it generates all possible words by changing each character of the current word and checks if the new word is in the word list. If it is, it adds the new word to the queue and removes it from the word list. The function continues this process until it finds the end word or the queue is empty. If the queue is empty, it means there is no transformation sequence from the beginning word to the end word, so it returns 0.