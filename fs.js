const fs = require('fs')

/* const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

const title = 'este es un archivo nuevo'

fs.writeFileSync('./data/four.txt', title, {
    flag: 'a'
}) */

fs.readFile('./data/first.txt','utf-8', function(error, data){
    if (error) {
        console.log(error) 
    }
    console.log(data)
    
    
 fs.readFile('./data/second.txt', 'utf-8', function(error, data){
        if (error) {
            console.log(error)
        }
        console.log(data)

        fs.writeFile('./data/newFile.txt', 'archivo creado desde fs', (err, data)=>{
            console.log(err)
            console.log(data)
                
            fs.writeFile('./data/newFile2.txt', 'archivo creado desde fs', (err, data)=>{
                console.log(err)
                console.log(data)
                fs.writeFile('./data/newFile2.txt', 'archivo creado desde fs', (err, data)=>{
                    console.log(err)
                    console.log(data)
                })
            })
        })
    })
})

