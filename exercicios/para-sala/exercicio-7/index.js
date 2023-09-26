const { Account } = require('./resolucao');

luaraAccount = new Account(123, 0o1, 10000, 1);
luaraAccount.credit(2000);
luaraAccount.debit(500);

outraconta = new Account(456, 0o1, 100, 2);
luaraAccount.transferTo(outraconta, 10000);

maisUmaConta = new Account(456, 0o1, 100, 1);
maisUmaConta.debit(100);
maisUmaConta.closeAccount();
console.log(maisUmaConta);