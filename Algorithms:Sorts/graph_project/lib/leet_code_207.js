// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(edges) {
  let graph = {}
  edges.forEach((ele) => {
    let [ destination, src ] = ele.map(String);
      if (destination in graph) {
        graph[destination].push(src);
      } else {
        graph[destination] = [ src ];
      }

      if(!(src in graph)) {
        graph[src] = [];
      }
  });
  return graph;
  
}

function canFinish(numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);
  let totalCourses = Object.keys(graph).length;
  let visited = new Set();

    let eligibleNodeExists = true;
    while (eligibleNodeExists) {
      eligibleNodeExists = false;
      for(let destination in graph){
        let validDestination = graph[destination].every((ele) => visited.has(ele));
          if(!visited.has(destination) && validDestination){
            eligibleNodeExists = true;
            visited.add(destination)
          }
      }
    }
    
  return visited.size === totalCourses
}
