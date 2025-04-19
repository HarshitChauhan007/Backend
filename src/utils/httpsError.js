export default (error, req, res, errorStatusCode) => {
    const errorObject = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            method: req.method,
            url: req.originalUrl,
        },
        message: error.message,
        trace: { stack: error.stack },
    };

    console.info("CONTROLLER_FAILED", {
        meta: errorObject,
    });

    res.status(errorStatusCode).json(errorObject);
};
