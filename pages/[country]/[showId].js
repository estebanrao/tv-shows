import parse from 'html-react-parser';
import axios from 'axios';

import CustomError from '../_error';
import Cast from '../../components/cast/cast.component';

const ShowId = ({
  show: { image, name, summary, _embedded: { cast } = {} } = {},
  statusCode,
}) => {
  if (statusCode) {
    return <CustomError statusCode={statusCode} />;
  }

  return (
    <div className="show-details">
      <div className="show-details__poster">
        <img
          src={
            image?.medium ||
            'https://via.placeholder.com/210x295.png?text=No%20image%20found'
          }
          alt=""
        />
      </div>
      <h1>{name}</h1>
      <div>{parse(summary)}</div>
      {!!cast?.length && <Cast cast={cast} />}
    </div>
  );
};

export const getServerSideProps = async ({ query: { showId } }) => {
  try {
    const response = await axios.get(
      `http://api.tvmaze.com/shows/${showId}?embed=cast`
    );

    return {
      props: {
        show: response.data,
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

export default ShowId;
