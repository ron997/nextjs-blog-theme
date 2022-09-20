import Link from 'next/link';
// import ArrowIcon from '../../components/ArrowIcon';
// import CustomLink from '../../components/CustomLink';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
// import SEO from '../components/SEO';

export default function Page1(){
    return(
        <Layout>
        <div>
        <Header name="UID Project"/>
        <h1 className="text-3xl pt-10">
            
        </h1>
        <div>
        <h2 className="text-xl pt-10">
        Problem Statement:
        </h2>
        <p className="text-justify">
        Some people do not like the weather of the city that they live in but they do not know how to find the city with suitable weather conditions for them. This app provides a list of recommended cities according to the user’s preferences. This app reduces the effort for users to find a city with suitable weather.
        </p>
        <h2 className="text-xl pt-10">
        User Goal:
        </h2>
        <p className="text-justify">
            The user has to find a city or a location with a preferable weather which will be comforting to the user.
        </p>
        <h2 className="text-xl pt-10">
        Action:
        </h2>
        <div className="justify-center">
            
        <ul className="list-group"><li className="list-group-item"><p className="text-justify">
        •	The user can complete a questionnaire and list their preferences according to the choices mentioned in the questionnaire, for example, if the user prefers sunny weather, they would have to fill out “sunny” in the preferences tab. The users can get recommendations based on the answer of the questionnaire.
        </p></li>
        <li className="list-group-item"><p className="text-justify">
        •	The user will also be able to get details about the weather history of a certain city or a certain location. The user will also get details from the application about the weather details of a certain city or a location, such as the precipitation rate or the average wind speed in a day.
        </p></li>
        <li className="list-group-item"><p className="text-justify">
        •	The user can get other useful information such as the air pollution levels of a city or a location or even the air quality index (AQI) of a location.
        </p></li>
        <li className="list-group-item"><p className="text-justify">
        •	The user can give two cities as inputs and the user will be able to compare the weather of these two cities.
        </p></li>
        </ul>
        </div>
        </div>
        <Footer />
        </div>
        <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-5 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-10 dark:opacity-30"
      />
        </Layout>
        
    )
}