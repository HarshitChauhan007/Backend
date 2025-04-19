import httpsError from "./httpsError";

export default reqestHandler => {
    (req, res, next) => {
        try {
            reqestHandler(req, res, next);
        } catch (error) {
            res.status(error.statusCode).json(
                httpsError(error, req, res, error.statusCode)
            );
        }
    };
};
