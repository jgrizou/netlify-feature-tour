exports.handler = async () => {
    const mysecret = process.env.MY_SECRET;
    console.log(mysecret)
    return {
      statusCode: 200,
      body: 'hello world! ' + mysecret,
    };
  };
  