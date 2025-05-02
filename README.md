# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = { foo: { boo: 7 }, boo: { foo: 3, bar: 2 }, bar: { boo: 4 } };
augmentingPath(graph, "foo", "bar");
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

---

Answer:

I used a depth-first search approach to finding a path from the source node to the target (sink) node; however, I added an extra check in the main part of the DFS logic that ensures that at each recursive step, the residual capacity is not zero. This check happens in constant time, so it doesn't affect much. It also ensures that all nodes in the resulting DFS path have nonzero residual capacities. I tried designing and using a `Graph` class to restructure the adjacency list (define 'capacity' and 'flow' properties for edges) and separate some of the graph processes, such as getting residuals between nodes and whatever else.

With this implementation, there is a little bit of overhead involved in instantiating a `Graph` object ($\Theta(|E|)$, because it goes through each edge and adds a 'flow' property). The rest of the code is basically DFS, which has a complexity of $\Theta(|V| + |E|)$ in all cases. Therefore, the worst-case runtime complexity for this implementation is $\Theta(|E| + |V| + |E|)$ or $\Theta(|V| + |E|)$.

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**
