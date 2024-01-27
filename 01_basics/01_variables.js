const accountId = 144533
let accountEmail = "mayank123@gmail.com"
var accountPassword = "1234"
accountCity = "Gurugram"
let accountState;  //Undefined

// accountId = 2   //not allowed

accountEmail = "my@my.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
beacuseof issues in block scope and functional scope
*/

console.table([accountId, accountEmail , accountPassword, accountCity, accountState])