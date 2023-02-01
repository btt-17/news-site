import Image from 'next/image'
import styles from './index.module.css'
import Link from 'next/link'
import CustomType from '../types'

const week = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

// const date1 = {
//   dt: 1662030000, 
//   temp: {
//      min: 18.93,
//      max: 19.66,
//    },
//   weather: [
//      {
      
//        id: 500,
//        main: "Cloudy",
//        icon: "04d"
//      },
//   ]
// }
// dummy weather data 
const dailyWeather  = [
   {
     dt: 1662030000, 
     temp: {
        min: 18.93,
        max: 19.66,
      },
     weather: [
        {
          id: 500,
          main: "Cloudy",
          icon: "04d"
        }
      ], 
  },

  {
    dt:1661943600,
    temp: {
      min:17.73,
      max:18.76,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        icon: "10d",
      }
    ],
  },

  {
    dt:1662030000,
    temp: {
      min:18.06,
      max:19.38,
    },
    weather: [
      {
        id: 500,
        main:"Rain",
        icon:"10d" ,
      }
    ],
  },

  {
     dt: 1662030000+24 * 3600, 
     temp: {
        min: 18.93,
        max: 19.66,
      },
     weather: [
        {
          id: 500,
          main: "Sunny",
          icon: "01d"
        }
      ], 
  },

]

const WeatherNews: React.FC<CustomType.Props> = ({  weatherNews }) => {
  console.log(weatherNews)
  const currentWeatherMain = weatherNews!.weather[0].main
  const currentWeatherTemp = weatherNews!.main.temp 
  const currentWeatherIcon = weatherNews!.weather[0].icon.slice(0,2) + "d"
  
  // console.log("WeatherNews test: ", weatherNews)
  // dummy weather data
  // weatherNews!.daily = dailyWeather
  return (
    <section className={styles.weather}>
      <h1 className={styles.city}>Tokyo</h1>
      <div className={styles.weather__main}>
        <div className={styles.weather__top}>
          <div className={styles.weather__heading}>
            <a>{currentWeatherMain}</a>
            <p>
              {currentWeatherTemp.toString()}
               <span>˚c</span>
            </p>
          </div>
          <Image
            className={styles.weatherIcon}
            src={`/img/weatherIcons/${currentWeatherIcon}.png`}
            alt="Tokyo's weather icon"
            loading="eager"
            width={52}
            height={52}
            priority
          />
        </div>
        <div className={styles.weather__weekly}>
          <ul className={styles.weather__weekly__list}>
            {/* {weatherNews!.daily.map((date, index) => { */}
            {dailyWeather.map((date, index) => {
              const time = new Date(date.dt * 1000)
              let day = week[time.getDay()]
              if (index == 0) day = "Today"
              return (
                <li key={index}>
                  <p>{day}</p>
                  <span>        
                    <Image
                      className={styles.weatherIcon}
                      src={`/img/weatherIcons/${date.weather[0].icon}.png`}
                      alt="Tokyo's weather icon"
                      loading="eager"
                      width={41} 
                      height={41}
                      priority
                    />
                  </span>
                  <div className={styles.weather__temp}>
                    <p className={styles.weather__temp__high}>
                      {parseInt(date.temp.max.toLocaleString(), 10)}˚c
                    </p>
                    <p className={styles.weather__temp__low}>
                      {parseInt(date.temp.min.toLocaleString(), 10)}˚c
                    </p>
                  </div>
                </li>
              )
            })}          
          </ul>
        </div>
        <div className={styles.weather__bottom}>
          <Link href="https://weathernews.jp/onebox/" >
            ウェザーニュース
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WeatherNews;
