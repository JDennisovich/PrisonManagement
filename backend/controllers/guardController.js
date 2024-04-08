const guards = 
[

{
    'id' : 1,
    'name' : 'Jayden',
    'rank' : 'Major',
    'years of service' : '25 years',
    'active' : true

},

{
    'id' : 2,
    'name' : 'JC',
    'rank' : 'Minor',
    'years of service' : '25 years',
    'active' : false
},

{
    'id' : 3,
    'name' : 'Lince',
    'rank' : 'ICadette',
    'years of service' : '25 years',
    'active' : true

},

{
    'id' : 4,
    'name' : 'Justin',
    'rank' : 'baliw',
    'years of service' : '25 years',
    'active' : false
}
]

module.exports.guards = (req, res) => {
    res.json({'guards' : guards})
}

//search a prisoner by id using /prisoner/(id)
//method name must be prisoner

module.exports.guard = (req, res) => {
    const {id} = req.params

    console.log(id)

    const matchingGuards = guards.filter(
        (guard) => guard.id === parseInt(id)
    )

    if(matchingGuards.length === 0){
        res.status(404).json({'error' : `guard with ${id} not found`})
    }
    
    else{
        res.status(200).json({'guard' : matchingGuards[0]})
    }
}

// module.exports.greet = (req, res) => {
//     const {name} = req.query
//     console.log(name)
//     res.status(200).json({'hello' : name})
// }

module.exports.searchGuard = (req, res) => {
    const {id, rank, yearsOfService} = req.query
    console.log(id, rank, yearsOfService)

    const matchingGuards = guards.filter(
        (g) => g.id === parseInt(id) && g.rank === rank && g["years of service"] === yearsOfService
    )

    if(matchingGuards.length === 0){
        res.status(404).json({'error' : `guard with ${id}, ${rank},and ${yearsOfService} not found`})
    }
    else{
        res.status(200).json({'found' :matchingGuards[0]})
    }
}

module.exports.deleteGuard = (req, res) => {
    const {id} = req.params
    const index = guards.findIndex(guard=>guard.id===parseInt(id))

    console.log(id)

    // const matchingGuards = guards.filter(
    //     (g) => g.id === parseInt(id)
    // )

    if(index === -1){
        res.status(404).json({'error' : `guard with ${id} not found`})
    }
    
    else{
        const deleteguard = guards[index];
        guards.splice(index,1) 
        res.status(200).json({'deleted guard' : deleteguard})
    }
} 