// Code your solution in this file!
function logDriverNames(drivers) {

  drivers.forEach(function (driver) {console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown)
      {console.log(driver.name)}
  })
}

function driversByRevenue(drivers) {
  const driverRevenuesSorter = function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  }
  return drivers.slice().sort(driverRevenuesSorter)
}

function driversByName(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

function totalRevenue(drivers) {
  const callback = (function (totalRev, driver) {
    return driver.revenue + totalRev
  })
  return drivers.reduce(callback, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ drivers.length
}
