const CustomError = ({ statusCode }) => {
  return (
    <>
      <h1>{statusCode}</h1>
      <h2>
        {statusCode === 404
          ? 'Resource not found'
          : 'Oops! something went wrong'}
      </h2>
      <img
        src="https://i.imgur.com/Q2BAOd2.png"
        alt=""
        style={{ width: '400px', margin: '0 auto', display: 'block' }}
      />
    </>
  );
};

CustomError.getInitialProps = ({ err, res }) => {
  return {
    statusCode: res?.statusCode || err?.statusCode || '404',
  };
};

export default CustomError;
