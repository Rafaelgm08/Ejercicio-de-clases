//crear un programa principal que cree un modulo registro y utilice las funciones proporcionadas para registrar usuarios

const fs = require ("fs")

const ops = requiere("./registro")
ops.registro("Jhon", 20)


fs.readfile("package.json","utf-8", (error, data) => {
    let users = JSON.parse(info)
    console.log(info)
})

if (req.method == "GET") {
    ops.retornarLista((err,data)=>{
        res.write(JSON.stringify(data))

      
    })

    
}


res.end()



