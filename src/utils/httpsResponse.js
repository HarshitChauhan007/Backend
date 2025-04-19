export default (req, res, responseStatusCode, responseMessage, data) => {
    const response = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            method: req.method,
            url: req.originalUrl,
        },
        message: responseMessage,
        data: data,
    };

    console.info("CONTROLLER_RESPONSE", {
        meta: response,
    });

    res.status(responseStatusCode).json(response);
};
