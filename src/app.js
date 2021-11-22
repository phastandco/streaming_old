import Koa from 'koa'
import {extname, resolve} from 'path'
import {createReadStream, stat} from 'fs'
import {promisify} from 'util'

const app = new Koa()

app.use(async ({request, response}, next) => {
    //on check que l'url est bien
    if (
        !request.url.startsWith('/api/onepiece')
        || !request.query.video
        //à revoir
        //|| !request.query.video.match(/^[a-z0-9-_]+\.(mp4)$/i)
    ) {
        console.log("url : " + request.url)
        return next()
    }
    //Resolve pour la videos dans le dossier videos en local => à refaire pour la vm
    const video = resolve("videos", request.query.video)

    console.log("notre chemin vers la vidéo : " + video)

    const range = request.
    console.log("range : " + request.headers.values)
    if (!range) {
        response.type = extname(video)
        response.body = createReadStream(video)
        console.log("No Range")
        return next()
    }

    const parts = range.replace('bytes', '').split('-')
    const videoStat = await promisify(stat)(video)
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : videoStat.size -1
    //ajouter une entête
    response.set('Content-Range', `bytes ${start}-${end}/${videoStat.size}`)
    response.set('Accept-Ranges', `bytes`)
    response.status = 206
    response.body = createReadStream(video, {start, end})
})

app.listen(3000)

/**
var on = document.getElementById("buttonON");

function allumage ()
{
alert("je suis ON");
console.log("OUI OUI");
};

on.onclick = allumage;
*/

//url https://ianime-fr.com/voir-one-piece-episode-[NUMBER]-vostfr/
