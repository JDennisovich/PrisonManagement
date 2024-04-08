const prisoners = 
[

{
    'id' : 1,
    'name' : 'Nico',
    'age' : 25,
    'crime' : 'Illegal Drugs',
    'sentence' : '25 years',

},

{
    'id' : 2,
    'name' : 'JC',
    'age' : 23,
    'crime' : 'Frustrated Murder sa mesa',
    'sentence' : '15 years',

},

{
    'id' : 3,
    'name' : 'Lince',
    'age' : 21,
    'crime' : 'Beating the red light',
    'sentence' : '10 years',

},

{
    'id' : 4,
    'name' : 'Justin',
    'age' : 69,
    'crime' : 'Kasong puti',
    'sentence' : '10 sentence and 1 paragraph',
}
]

module.exports.prisoners = (req, res) => {
    res.json({'PRISONERS' : prisoners})
}

//search a prisoner by id using /prisoner/(id)
//method name must be prisoner

module.exports.prisoner = (req, res) => {
    const {id} = req.params

    console.log(id)

    const matchingprisoners = prisoners.filter(
        (prisoner) => prisoner.id === parseInt(id)
    )

    if(matchingprisoners.length === 0){
        res.status(404).json({'error' : `prisoner with ${id} not found`})
    }
    
    else{
        res.status(200).json({'prisoner' : matchingprisoners[0]})
    }
}

module.exports.greet = (req, res) => {
    const {name} = req.query
    console.log(name)
    res.status(200).json({'hello' : name})
}

module.exports.searchPrisoner = (req, res) => {
    const {id , name} = req.query
    console.log(id, name)

    const matchingPrisoner = prisoners.filter(
        (p) => p.id === parseInt(id) && p.name === name
    )

    if(matchingPrisoner.length === 0){
        res.status(404).json({'error' : `prisoner with ${id} and ${name} not found`})
    }
    else{
        res.status(200).json({'found' :matchingPrisoner[0]})
    }
}