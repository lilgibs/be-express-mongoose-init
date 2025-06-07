import { NextFunction, Request, Response, Router } from "express";
// import multer from "multer";
import { getUserBrandDeviceOverview, getUserDigitalInterestOverview, getUserGenderOverview, getUserLocationTypeOverview, getUsers, importUserCsv } from "../controllers/user-controller";

// const tempUploads = multer({ dest: "temp_uploads/users" });

export class UserRoutes {
  public readonly route = "/users"

  public setupRoutes(router: Router) {
    // router.post(
    //   this.route + "/import-csv",
    //   tempUploads.single("userCsv"),
    //   async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //       await importUserCsv(req, res);
    //     } catch (err) {
    //       next(err);
    //     }
    //   }
    // );

    router.get(this.route,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await getUsers(req, res);
        } catch (err) {
          next(err);
        }
      }
    )

    router.get(this.route + "/gender-overview",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await getUserGenderOverview(req, res);
        } catch (err) {
          next(err);
        }
      }
    )

    router.get(this.route + "/brand-device-overview",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await getUserBrandDeviceOverview(req, res);
        } catch (err) {
          next(err);
        }
      }
    )

    router.get(this.route + "/digital-interest-overview",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await getUserDigitalInterestOverview(req, res);
        } catch (err) {
          next(err);
        }
      }
    )

    router.get(this.route + "/location-type-overview",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          await getUserLocationTypeOverview(req, res);
        } catch (err) {
          next(err);
        }
      }
    )
  }
}