import { Request, Response, NextFunction } from 'express';

export function globalMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`\n\nInside global middleware at ${new Date().getTime()}`);
  next();
}
