const {writeFile} =require('fs/promises')

const createBigFile = async()=>{
    await writeFile('./data/bigfile.txt', 'Hello world'.repeat(100000))
}

createBigFile()

/* const {createReadStream}=require('fs')

const stream = createReadStream('./data/bigfile2.txt', {
    encoding : 'utf-8',
    
})

stream.on('data', (chunk) =>{
    console.log(chunk)
})

stream.on('end', ()=>{
    console.log('ya termine de leer el archivo')
})

stream.on('error', (error)=>{
    console.log(error)
}) */