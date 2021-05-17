function meeting(s) {
  return s.split(';')
          .map(elem => {
            const newElem = elem.toUpperCase().split(":")
            return newElem[1] + " " + newElem[0]
          })
          .sort((a,b) => {
            if (a < b) return -1
            if (a > b) return 1

            return 0
          })
          .map(elem => {
            return "(" + elem.replace(' ', ', ') + ")"
          })
          .join('')
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))