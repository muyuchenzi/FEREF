strng='余杭区甲磺酸23'

// strng='12'

// firm_address_temp=Array.from(strng)
// console.log(temp.length)
rest=strng.match(/.*?[区]/g)||""
console.info(rest)
firm_address_temp=Array.from(rest)
if(firm_address_temp.length==0){
    firm_address_res=""
}else{
    firm_address_res=firm_address_temp[0]
}

// console.info(rest.length)
console.log(firm_address_res)
console.info('--')