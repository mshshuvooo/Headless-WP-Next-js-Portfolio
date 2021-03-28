import About from "../src/components/About";
import Layout from "../src/components/Layout";
import Testimonial from "../src/components/Testimonial";
import getAppCommonData from "../src/inc/data/appCommonData";
import getHomePageData from "../src/inc/data/homePageData";



const Home = ({appCommonData, homePageData}) => {

  const aboutData = homePageData.data.homePage.aboutSection;
  const testimonialData = homePageData.data.homePage.testimonialSection
  console.log(testimonialData);


  return (
    <Layout appCommonData = {appCommonData}>
      
        <About aboutData={aboutData} />
        <Testimonial testimonialData={testimonialData} />
    </Layout>
  );
};


export async function getStaticProps() {
  return {
    props: {
      appCommonData: await getAppCommonData(),
      homePageData: await getHomePageData()
    }
  }
}



export default Home;



