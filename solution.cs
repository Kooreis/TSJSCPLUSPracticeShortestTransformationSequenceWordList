function findShortestTransformationSequence(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let queue = [];
    queue.push(new Node(beginWord, 1));