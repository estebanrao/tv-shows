import Router from 'next/router';

import axios from 'axios';

const Home = () => null;

Home.getInitialProps = async context => {
  const ipDataResponse = await axios.get(
    `https://api.ipdata.co?api-key=${process.env.IPDATA_API_KEY}`
  );
  const country = ipDataResponse.data?.country_code?.toLowerCase() || 'us';

  process.browser
    ? Router.replace('/[country]', `${country}`)
    : context.res.writeHead(302, { Location: `/${country}` });

  context.res.end();
};

export default Home;
