import { gql } from '@apollo/client';
import { client } from '../ApolloClientConfig';





 const getAppCommonData = async () => {
   const commonData = await client.query({
      query: gql`
      query CommonDataQuery {
        headerMenus: menuItems(where: {location: PRIMARY}) {
          edges {
            node {
              id
              label
              path
              menuIcon {
                icon
              }
            }
          }
        }
          themeSidebarSettings {
            sidebar {
              name
              subTitle
              profilePicture {
                sourceUrl
              }
              socialNetwork {
                socialIconName
                socialUrl
              }
              buttonOne {
                buttonText
                buttonUrl
                buttonIconName
              }
              buttonTwo {
                buttonText
                buttonUrl
                buttonIconName
              }
            }
          }
        
      }`
    })


    

    return commonData;
}

export default getAppCommonData;