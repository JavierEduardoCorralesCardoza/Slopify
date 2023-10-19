const express = require("express");
const cors = require("cors"); // Importa el módulo cors
const app = express();
const port = 3001;

app.use((req, res, next) => {
    console.log('Middleware de registro personalizado:', req.method, req.url);
    next();
});

// Configura cors como middleware
app.use(cors());

app.get('/api/data', (req, res) => {
    clientes = {
        "clientes": [
            {
                "nombre": "cliente1",
                "datos": {
                    "a": 1,
                    "b": 2
                }
            },
            {
                "nombre": "cliente2",
                "datos": {
                    "a": 3,
                    "b": 4
                }
            }
        ]
    };

    res.json(clientes)
});

app.get("/api/playlist", (req, res) => {
    playlists = {
        "playlists":[
            {
                "id": 1,
                "nombre": "Playlist 1"
            },
            {
                "id": 2,
                "nombre": "Playlist 2"
            },
            {
                "id": 3,
                "nombre": "Playlist 3"
            }
        ]
    };

    res.json(playlists);
})

app.post("/api/cuenta", (req, res) => {
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
