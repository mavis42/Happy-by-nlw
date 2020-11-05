const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng:"-49.6455874",
    name: "Lar das meninas",
    about: "presta assitência a crinça de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp:"123456789",
    images: [
        "https://images.unsplash.com/photo-1597997547878-c01a230efdc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1"
    })

    //consultar dados na tabela
   const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

  //consultar somente um orphanato, pelo id
 const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
 console.log(orphanage)

  //deletar dado da tabela
 //console.log( await db.run("DELETE FROM orphanages WHERE id='4'"))
 //console.log( await db.run("DELETE FROM orphanages WHERE id='5'"))

})