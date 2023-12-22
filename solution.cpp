```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <string>

using namespace std;

vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
    unordered_set<string> dict(wordList.begin(), wordList.end());
    vector<vector<string>> res;
    queue<vector<string>> paths;
    int level = 1, minLevel = INT_MAX;
    paths.push({beginWord});

    while (!paths.empty()) {
        vector<string> path = paths.front();
        paths.pop();
        if (path.size() > level) {
            for (string w : res) dict.erase(w);
            level = path.size();
            if (level > minLevel) break;
        }
        string last = path.back();
        for (int i = 0; i < last.size(); ++i) {
            string news = last;
            for (char c = 'a'; c <= 'z'; ++c) {
                news[i] = c;
                if (dict.find(news) != dict.end()) {
                    vector<string> newpath = path;
                    newpath.push_back(news);
                    if (news == endWord) {
                        minLevel = level;
                        res.push_back(newpath);
                    } else paths.push(newpath);
                }
            }
        }
    }

    return res;
}

int main() {
    string beginWord = "hit";
    string endWord = "cog";
    vector<string> wordList = {"hot","dot","dog","lot","log","cog"};
    vector<vector<string>> res = findLadders(beginWord, endWord, wordList);
    for (auto &path : res) {
        for (string &word : path) {
            cout << word << " ";
        }
        cout << endl;
    }
    return 0;
}
```