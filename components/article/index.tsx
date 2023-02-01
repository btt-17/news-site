import styles from './index.module.css'
import moment from 'moment'
import CustomType from '../types'

const Article: React.FC<CustomType.Props> = ({ articles, title}) => {
  return (
    <section className={styles.article}>
      <div className={styles.article__heading}>
        <h1>{title!.charAt(0).toUpperCase()+title!.slice(1).toLowerCase()}</h1>
      </div>

      {articles!.map((article, index) => {
          const time = moment(article.publishedAt || moment.now())
              .fromNow()
              .slice(0, 1)== "a"
              ? 1 
              : moment(article.publishedAt || moment.now())
                .fromNow()
                .slice(0, 1)
          return (
            <a href={article.url} key={index} >
              <article className={styles.article__main}>
                <div className={styles.article__title}>
                  <p>{article.title}</p>
                  <p className={styles.article__time}>
                    {time} 時間前
                  </p>
                </div>
                {article.urlToImage && (
                  <img
                      key={index}
                      src={article.urlToImage}
                      className={styles.article__img}
                      alt={`${article.title} image`}
                      width={40}
                      height={40}
                  />
                )}
              </article>
            </a>
          )
        })
      }

    </section>  
  )
}

export default Article;
