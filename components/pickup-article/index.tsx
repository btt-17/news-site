import styles from './index.module.css'
import moment from 'moment'
import CustomType from '../types'

const PickupArticle: React.FC<CustomType.Props> = ({ articles }) => {
  return (
    <section className={styles.pickup}>
      <h1 className={styles.article__heading}>Pickup</h1>
      {articles!.map((article, index) => {
       const time = moment(article.publishedAt || moment.now())
            .fromNow()
            .slice(0, 1) == "a"
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
                  {time}時間前
                </p>
              </div>
              {article.urlToImage && (
                <img 
                  key={index}
                  src={article.urlToImage}
                  className={styles.article__img}
                />
              )}
            </article>
          </a>
        )
      })}
    </section>
  )
}

export default PickupArticle 
