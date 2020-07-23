import Head from 'next/head';
import axios from 'axios';

import CustomError from '../_error';
import Thumbnail from '../../components/thumbnail/thumbnail.component';

import styles from './index.module.scss';

const CountryHome = ({ shows, country, statusCode }) => {
  if (statusCode) {
    return <CustomError statusCode={statusCode} />;
  }

  return (
    <>
      <Head>
        <title>TV Shows App ({country?.toUpperCase()})</title>
      </Head>
      {shows.length ? (
        <ul className={styles.tvShows}>
          {shows.map(({ show }, index) => {
            return (
              <li key={index}>
                <Thumbnail
                  imageUrl={show.image?.medium}
                  caption={show.name}
                  href="/[country]/[showId]"
                  as={`/${country}/${show.id}`}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </>
  );
};

export const getServerSideProps = async ({ query: { country } }) => {
  try {
    const response = await axios.get(
      `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );

    return {
      props: {
        shows: response.data,
        country,
      },
    };
  } catch (error) {
    return {
      props: {
        statusCode: error?.response?.status || 500,
      },
    };
  }
};

export default CountryHome;
