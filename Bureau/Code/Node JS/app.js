process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Quel age a tu ? ')
process.stdin.on('data', (text) => {
  if(text > 0 && text <= 99){
  
  let age=-text + 2019 ; 
  
  console.log('tu est née en ' + age)

  } else {
    console.log('Erreur')
  } 
  process.exit()
})
