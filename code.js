// function dfs(graph, current_node, target, visited = [], path = []) {
//   // Mark current node as visited and add it to path
//   visited.push(current_node);
//   path.push(current_node);

//   // Exit condition: current and target nodes are the same
//   if (current_node === target) return [...path];

//   let neighbors = graph[current_node] || [];

//   for (let i = 0; i < neighbors.length; i++) {
//     let neighbor = neighbors[i];

//     // Only proceed with a neighbor if it hasn't been looked at
//     if (!visited.includes(neighbor)) {
//       let result = dfs(graph, neighbor, target, visited, [...path]);

//       // Should only have a positive length if it found something
//       if (result.length > 0) {
//         return result;
//       }
//     }
//   }

//   path.pop();
//   return [];
// }

class Graph {
  constructor(adjList) {
    this.graph = JSON.parse(JSON.stringify(adjList));

    // Restructure graph so each edge has a 'flow' and 'capacity' value
    for (let u in this.graph) {
      for (let v in this.graph[u]) {
        let capacity = this.graph[u][v];

        this.graph[u][v] = {
          flow: 0,
          capacity: capacity,
        };
      }
    }
  }

  getResidual(u, v) {
    if (v in this.graph[u]) {
      let edge = graph[u][v];

      return edge["capacity"] - edge["flow"];
    } else {
      return null;
    }
  }

  getNeighbors(u) {
    return this.graph[u];
  }

  print() {
    console.log(this.graph);
  }
}

function ap(graph, current, end, visited = [], path = []) {
  visited.push(current);
  path.push(current);

  // Exit condition
  if (current === end) return [...path];

  let neighbors = graph.getNeighbors(current);

  for (let neighbor in neighbors) {
    let residual = graph.getResidual(current, neighbor);

    // Make sure the residual is not zero so flow can continue
    if (residual === 0) return [];

    // Only proceed with a neighbor if it hasn't been looked at
    if (!visited.includes(neighbor)) {
      let result = ap(graph, neighbor, end, visited, [...path]);

      // Should only have a positive length if it found something
      if (result.length > 0) {
        return result;
      }
    }
  }

  path.pop();
  return [];
}

function augmentingPath(graphData, start, end) {
  const G = new Graph(graphData);

  return ap(G, start, end);
}

module.exports = {
    Graph,
    augmentingPath
};
  