var findRelativeRanks = function(score) {
  const copySortScore = [...score].sort((a, b) => b - a)
  const mapScore = {}

  for (let i = 0; i < copySortScore.length; i++) {
    if (i === 0) {
      mapScore[copySortScore[i]] = "Gold Medal"
    } else if (i === 1) {
      mapScore[copySortScore[i]] = "Silver Medal"
    } else if (i === 2) {
      mapScore[copySortScore[i]] = "Bronze Medal"
    } else {
      mapScore[copySortScore[i]] = String(i + 1)
    }
  }
  
  return score.map(elem => {
    return mapScore[elem]
  })
}

console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))