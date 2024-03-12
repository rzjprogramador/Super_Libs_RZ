
const file = fetch('./data.json')

file.then((res) => {
  const js = JSON.parse(res.array)
  console.log(js)
})

// file.then(i => console.log(i))