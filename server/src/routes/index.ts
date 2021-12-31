import Router from "koa-router";
import prisma from "../../prismaClient";
import auth from "./auth";
import category from "./category";

const router = new Router();

router.get("/api", async (ctx, next) => {
  const categories = await prisma.category.findMany();
  ctx.body = { categories };

  await next();
});

router.use(auth.routes(), auth.allowedMethods());
router.use(category.routes(), category.allowedMethods());

export default router;
