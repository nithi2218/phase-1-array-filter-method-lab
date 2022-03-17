// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter( driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

const fuzzyMatch = (drivers, Sa) => {
return drivers.filter( driver => {
  return driver.slice(0,2) === Sa;
})
} 



const matchName = (drivers, name) => {
  return drivers.filter (driver => {
    return driver.name === name;
  })

}