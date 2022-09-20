// import Link from 'next/link';
// import { getGlobalData } from '../../utils/global-data';
// import {
//   getNextPostBySlug,
//   getPostBySlug,
//   getPreviousPostBySlug,
//   postFilePaths,
// } from '../../utils/mdx-utils';

// import { MDXRemote } from 'next-mdx-remote';
// import Head from 'next/head';
import Link from 'next/link';
// import ArrowIcon from '../../components/ArrowIcon';
// import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
// import SEO from '../../components/SEO';

export default function Page1(){
    return(
        <Layout>
        <div>
        <Header name="UID Project"/>
        {/* <h1 className="text-3xl pt-10">
            UID Project
        </h1> */}
        <div>
        <h2 className="text-2xl pt-10">
        Problem Statement:
        </h2>
        <p>
            The user has to input the preferred weather type and the app should be able to recommend a place according to the user's preferences. The app gives a score to the user based on that preference.
        </p>
        <h2 className="text-xl pt-10">
        User's Goal:
        </h2>
        <p>
            The user has to find a city or a location with a preferable weather which will be comforting to the user.
        </p>
        <h2 className="text-xl pt-10">
        Action:
        </h2>
        <p>
            The user has to complete a questionnaire and list their preferences according to the choices mentioned in the questionnaire, for example, if the user prefers sunny weather, they would have to fill out “sunny” in the preferences tab.
        </p>
        <p>
            The application will also be able to give details about the weather history of a certain city or a certain location. The application will also be able to specify weather details of a certain city or a location, such as the precipitation rate or the average wind speed in a day.
        </p>
        <p>
            The application is also capable of returning other useful information such as the air pollution levels of a city or a location or even the air quality index (AQI) of a location.
        </p>
        <p>
            This application can take two inputs as cities or locations and can compare the weather data of these two locations. It can compare hourly, daily, monthly and yearly weather of these two locations for a comprehensive comparison.
        </p>
        </div>
        <Footer />
        </div>
        <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
        </Layout>
        
    )
}