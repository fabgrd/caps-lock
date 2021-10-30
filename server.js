const express = require('express')
const app = express()
const fs = require('fs');

app.set('view engine', 'ejs')
app.use(express.static('public'))

// Afrique
app.get('/reunion', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Afrique/Reunion/reunion.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

// Asie
app.get('/vietnam', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Asie/Vietnam/vietnam.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

// Belgique
app.get('/bruxelles-capitale', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Belgique/bruxelles-capitale.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/hainaut', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Belgique/hainaut.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/namur', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Belgique/namur.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

// Espagne
app.get('/iles-canaries', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Espagne/iles-canaries.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/murcie', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Espagne/murcie.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1226', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Espagne/j-s-juan-antonio.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//France
//Auvergne Rhone Alpes
//ain
app.get('/ain', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/ain.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/11102021.1411', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/herbelin-margot.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/11102021.0837', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/lannel-william.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.2152', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/morvan-tanguy.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.2130', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/pasi-antoine.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1330', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/01/thureau-marie.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/allier', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/03/allier.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//26
app.get('/drome', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/26/drome.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//38
app.get('/isere', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/38/isere.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1333', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/38/unknown-lael.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/11102021.1111', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/38/unknown-lilou.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//42
app.get('/loire', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/42/loire.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//63
app.get('/puy-de-dome', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/63/puy-de-dome.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//69
app.get('/rhone', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/69/rhone.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//74
app.get('/haute-savoie', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Auvergne-Rhone-Alpes/74/haute-savoie.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Bourgogne
//21
app.get('/cote-dor', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bourgogne-Franche-Comte/21/cote-dor.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//25
app.get('/doubs', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bourgogne-Franche-Comte/25/doubs.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//39
app.get('/jura', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bourgogne-Franche-Comte/39/jura.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//71
app.get('/saone-et-loire', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bourgogne-Franche-Comte/71/saone-et-loire.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1209.2', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bourgogne-Franche-Comte/71/c-myriam.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Bretagne
//22
app.get('/cotes-darmor', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bretagne/22/cotes-darmor.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//29
app.get('/finistere', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bretagne/29/finistere.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//35
app.get('/ille-et-vilaine', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bretagne/35/ille-et-vilaine', {
                items: JSON.parse(data)
            })
        }
    })
})

//56
app.get('/morbihan', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Bretagne/56/morbihan.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Centre Val de Loire
//28
app.get('/eure-et-loire', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Centre-Val-De-Loire/28/eure-et-loire.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//37
app.get('/indre-et-loire', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Centre-Val-De-Loire/37/indre-et-loire.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//45
app.get('/loiret', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Centre-Val-De-Loire/45/loiret.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Grand Est
//54
app.get('/meurthe-et-moselle', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Grand-Est/54/meurthe-et-moselle.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//67
app.get('/bas-rhin', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Grand-Est/67/bas-rhin.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//68
app.get('/haut-rhin', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Grand-Est/68/haut-rhin.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Hauts de France
//02
app.get('/aisne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Hauts-De-France/02/aisne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//59
app.get('/nord', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Hauts-De-France/59/nord.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//60
app.get('/oise', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Hauts-De-France/60/oise.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//62
app.get('/pas-de-calais', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Hauts-De-France/62/pas-de-calais.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//80
app.get('/somme', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Hauts-De-France/80/somme.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Ile de France
//75
app.get('/paris', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/75/paris.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//77
app.get('/seine-et-marne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/77/seine-et-marne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//78
app.get('/yvelines', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/78/yvelines.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//91
app.get('/essonne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/91/essonne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//92
app.get('/hauts-de-seine', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/92/hauts-de-seine.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//93
app.get('/seine-saint-denis', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/93/seine-saint-denis.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//94
app.get('/val-de-marne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Ile-De-France/94/val-de-marne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Normandie
//14
app.get('/calvados', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Normandie/14/calvados.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//27
app.get('/eure', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Normandie/27/eure.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//50
app.get('/manche', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Normandie/50/manche.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//76
app.get('/seine-maritime', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Normandie/76/seine-maritime.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Nouvelle-Aquitaine
//24
app.get('/dordogne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Nouvelle-Aquitaine/24/dordogne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//33
app.get('/gironde', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Nouvelle-Aquitaine/33/gironde.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//40
app.get('/landes', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Nouvelle-Aquitaine/40/landes.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//47
app.get('/lot-et-garonne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Nouvelle-Aquitaine/47/lot-et-garonne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//64
app.get('/pyrenees-atlantiques', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Nouvelle-Aquitaine/64/pyrenees-atlantiques.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Occitanie
//31
app.get('/haute-garonne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Occitanie/31/haute-garonne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//66
app.get('/pyrenees-orientales', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Occitanie/66/pyrenees-orientales.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//81
app.get('/tarn', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Occitanie/81/tarn.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//82
app.get('/tarn-et-garonne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Occitanie/82/tarn-et-garonne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Pays de la Loire
//44
app.get('/loire-atlantique', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Pays-De-La-Loire/44/loire-atlantique.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//49
app.get('/maine-et-loire', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Pays-De-La-Loire/49/maine-et-loire.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//53
app.get('/mayenne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Pays-De-La-Loire/53/mayenne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//72
app.get('/sarthe', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Pays-De-La-Loire/72/sarthe.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//85
app.get('/vendee', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Pays-De-La-Loire/85/vendee.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Provences Alpes Cote d'Azur
//05
app.get('/hautes-alpes', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Provence-Alpes-Cote-Dazur/05/hautes-alpes.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//06
app.get('/alpes-maritimes', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Provence-Alpes-Cote-Dazur/06/alpes-maritimes.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//13
app.get('/bouches-du-rhone', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Provence-Alpes-Cote-Dazur/13/bouches-du-rhone.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//83
app.get('/var', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/France/Provence-Alpes-Cote-Dazur/83/var.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})


//Luxembourg
app.get('/grevenmacher', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Luxembourg/grevenmacher.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1705', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Luxembourg/wijnbergen-sam.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Monaco
app.get('/monaco', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Monaco/monaco.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/15102021.1832', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Monaco/nouaihac-nathan.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Norvege
app.get('/oppland', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Norvege/oppland.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Pays Bas
app.get('/hollande-meridionale', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Pays-Bas/hollande-meridionale.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

//Suisse
app.get('/berne', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/berne.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/geneve', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/geneve.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/17102021.1002', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/deleani-luna.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1724', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/fatemi-touka.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/11102021.2200', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/felix-clement.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/17102021.1843.2', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/mitrovic-zorana.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/17102021.1843', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/morel-norma.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.1309', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/sanchez-pedro.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/valais', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/valais.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/07102021.2220', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/aymon-colin.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/vaud', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('Europe/Suisse/vaud.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.get('/page', function (req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
        res.status(500).end()
        } else {
            res.render('page.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)
