import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';





 const getHomePageData = async () => {
   const homePageData = await client.query({
      query: gql`
      query HomePageQuery {
        homePage: pageBy(uri: "http://portfolio.local/home/") {
          aboutSection {
            aboutSectionTitle
            aboutText
            skils {
              sourceUrl
            }
          }
          testimonialSection {
            testimonialSectionTitle
            testimonials {
              clientName
              clientDesignation
              comment
              clientImage {
                sourceUrl
              }
            }
          }
        }
      }
      `
    })


    

    return homePageData;
}

export default getHomePageData;