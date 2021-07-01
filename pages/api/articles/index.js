import {articles} from '../../../data'

// export default function handler(req, res) {
//     res.status(200).json(articles)
// }



// fetching ALL articles
const handler = (req, res) => {
    res.status(200).json(articles)
}

export default handler
