const accountId = 12234
let accountEmail = "hiteshchaudhary@gmail.com"
var accountPassword = "1234"
accountCity = " Jaipur"
console.table([accountId,accountEmail,accountPassword,accountCity])
/*
Summary of Differences:
Scope: var is function-scoped, while let and const are block-scoped.
Re-declaration: var allows re-declaration within the same scope; let and const do not.
Hoisting: All are hoisted, but let and const remain in the "temporal dead zone" until they're initialized. var is initialized with undefined.
Immutability: const cannot be reassigned after declaration, whereas var and let can be.
*/