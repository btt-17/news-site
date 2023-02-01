
namespace CustomType{
  export type articlesType = [
    article: {
      author: string
      title: string
      publishedAt: string
      url: string 
      urlToImage: string 
    } 
  ] ;

  export type weatherNewsType = {
    weather: [
      {
        id: number 
        main: string
        description: string 
        icon: string 
      }
    ] 
    main: {
      temp: number 
      visibility: number
    }

  daily: [
    {
      dt: number
      temp: {
        min: number 
        max: number 
      }
      weather: [
        {
          id: number 
          main: string
          icon: string
        }
      ]
    }
  ]
  }

  export type Props = {
    articles?: articlesType

    title?: string ;

    weatherNews?: weatherNewsType
  }
}

export default CustomType;

