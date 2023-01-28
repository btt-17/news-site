import Head from 'next/head';
import MainLayout from '../layouts';
import Article from '../components/article'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'
import WeatherNews from '../components/weather-news'
import Header from '../components/header'
import Image from 'next/image'

export default function Home(props) {
  return (
     <MainLayout>
        <Head> 
          <title>Simple News</title>
        </Head>
        
        <div className={styles.menu}>     
           <Header  />
        </div>

        <div className={styles.nav}>
              <nav>
                <Nav />
              </nav>
        </div>

        <div className={styles.contents}>
          <div className={styles.blank} />
          <div className={styles.main}> 
            <Article title='headlines' articles={props.topArticles} />
          </div>
          <div className={styles.aside}>
            <WeatherNews weatherNews={props.weatherNews} />
          </div>
        </div>
     </MainLayout> 
  )
}

export const getStaticProps = async() => {
  // Get data from NewsAPI
  const pageSize = 10 // the number of news 
  const topRes = await fetch (
        `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`
  )

  const topJson = await topRes.json(); 
  const topArticles = topJson?.articles;

  // Get data from WeatherNews 
  const lat = 35.4122 // Tokyo
  const lon = 139.4130
  const exclude = 'hourly,minutely' // each hour and each minute
  
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&APPID=${process.env.OPEN_WEATHER_MAP_KEY}`
  );
  const weatherJson = await weatherRes.json();
  const weatherNews = weatherJson;

  
  return {
    props: {
      topArticles,
      weatherNews,
    },
    revalidate: 60 * 10,
  }
}  