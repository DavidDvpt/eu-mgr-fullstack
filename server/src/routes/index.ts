import Router from "koa-router";
import auth from "./auth";
import category from "./category";

const router = new Router();

router.get("/api", async (ctx, next) => {
  ctx.body = "l'api fonctionne !!!!!!!";

  await next();
});

router.use(auth.routes(), auth.allowedMethods());
router.use(category.routes(), category.allowedMethods());

export default router;
