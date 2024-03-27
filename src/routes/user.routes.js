import { Router } from "express";
import {
  changeCurrentPassword,
  getAllUsers,
  getUserChannelProfile,
  getUserDetails,
  getUserWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateCoverImage,
  updateUserAvatar,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").patch(verifyJWT, changeCurrentPassword);

router.route("/details").patch(verifyJWT, updateUserDetails);
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

router
  .route("/cover-photo")
  .patch(verifyJWT, upload.single("coverPhoto"), updateCoverImage);

router.route("/current-user").get(verifyJWT, getUserDetails);

router.route("/channel/:username").get(verifyJWT, getUserChannelProfile);

router.route("/all-users").get(verifyJWT, getAllUsers);

router.route("/watch-history").get(verifyJWT, getUserWatchHistory);
export default router;
