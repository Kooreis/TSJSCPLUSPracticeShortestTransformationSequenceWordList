function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue: Node[] = [];
    queue.push(new Node(beginWord, 1));
}