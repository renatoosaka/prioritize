function prioritizeNodes(tree, val, swapIndex = -1) {
  if (!tree.children) return tree

  tree.children.forEach(function(item, index) {
    if (hasChildren(item)) {
      if (hasValue(item, val)) {
        swapPositions(tree.children, index, swapIndex)
        swapIndex++
      }
      return prioritizeNodes(item, val, swapIndex)
    } else {
      if (hasValue(item, val) || item.val === val) {
        const indexNode = getIndexNode(item, val);
        swapPositions(tree.children, index, indexNode)
      }      
      const indexNode = getIndexNode(item, val)
      if (indexNode > -1) return swapPositions(item.children, indexNode)
      return item.children
    }
  })
  return tree;
}

function getIndexNode(tree, val) {
  if (!tree.children) return -1
  return tree.children.findIndex(function(item) { return item.val === val})
}

function swapPositions(array, index, indexNode = -1) {
  const item = array[index]
  array.splice(index, 1)
  if (indexNode > -1) {
    array.splice(indexNode + 1, 0, item)
  } else {
    array.unshift(item)
  }
}

function hasValue(tree, val) {
  if (!tree.children && tree.val === val) return true
  if (tree.children) {
    return !!tree.children.find(function(item) { 
      if (item.children) return hasValue(item, val)
      return item.val === val 
    })
  };
  return false
}

function hasChildren(tree) {
  let response = false;  
  if (!tree.children) return response
  for (const item of tree.children) {
    response = !!item.children
    if (response) break;
  }
  return response;
}

module.exports = {
  prioritizeNodes
}