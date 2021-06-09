var maxDepth = function(root) {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); 
}

[3,9,20,null,null,15,7] // 3