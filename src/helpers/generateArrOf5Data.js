const generateArrOf5Data = (data) => {
  let result = []
  let temp = [] 

  data.forEach((el, index) => {
    temp.push(el)

    if (temp.length === 5) {
      result.push(temp)
      temp = []
    }

    if (index === data.length - 1 && temp.length) {
      result.push(temp)
    }
  })

  return result
}

export default generateArrOf5Data