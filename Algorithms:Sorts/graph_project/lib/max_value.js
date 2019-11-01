function maxValue(node, visited=new Set()) {
  if (visited.has(node)) return -Infinity;
  visited.add(node);
  let neighborMax = node.neighbors.map((neighbor) => maxValue(neighbor, visited))
  return Math.max(node.val, ...neighborMax);
}

module.exports = {
    maxValue
};