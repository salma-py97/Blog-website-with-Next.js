import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    return (
        <Link href={`/article/${article.id}`} >
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem


{/* <button className="btn">Learn More</button>
<style jsx>
    {`
    .btn {
        padding: 10px 20px;
        border: 0;
        color: white;
        background: #333;
        border-radius: 5px;
    }
    `}
</style> */}