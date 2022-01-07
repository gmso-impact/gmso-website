// filter results by paramater
async function filterJson(filters, array) {
  let arrayNew = [...array]
  filters.forEach((filter)=>{
    arrayNew = arrayNew.filter((record)=>{
      record[filter.key] === filter.value 
    }) 

  })
 return arrayNew
}
module.exports = filterJson;
