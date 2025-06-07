import { Router } from "express";
import { UserRoutes } from "./user-routes";

export class Routes {
  private userRoutes: UserRoutes
  constructor() {
    this.userRoutes = new UserRoutes();
  }

  setupRoutes(router: Router) {
    this.userRoutes.setupRoutes(router);
  }
}