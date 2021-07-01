import {articles} from '../../../data'

// fetching ALL articles
const handler = (req, res) => {
    const id = req.query.id;

    const filtered = articles.filter(article => article.id === id)

    if (filtered.length > 0) {

        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({message: `article with the id of: ${id} is not found`})
    }
        
}

export default handler