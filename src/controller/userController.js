import asyncHandler from "../utils/asyncHandler";

const loginUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
    });
});
