let jamesCameron = new Map();
jamesCameron.set("Terminator 2", 1991);
jamesCameron.set("Titanic", 1997);
jamesCameron.set("Avatar", 2009);
let jKeys = jamesCameron.keys();

for (let i = 0; i < jamesCameron.size; i++) {
  let key = jKeys.next();
  console.log(`Ключ- ${key.value}, Значение- ${jamesCameron.get(key.value)}`);
}
