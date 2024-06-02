const accountId =14443
let accountEmail="sahillohan@gmail.com"
var accountPassword="12345"
accountCity="Jind"
let accountState;

// accountId=2 // not allowed

accountEmail="sahil@gmail.com"
accountPassword="212121"
accountCity="Hisar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope nd functional scope.
*/
console.table([accountEmail,accountPassword,accountCity,accountState]);