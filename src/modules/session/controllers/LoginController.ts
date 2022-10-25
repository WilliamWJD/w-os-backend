import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

const loginService = new LoginService();

class LoginController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body;
        return res.status(201).json(await loginService.execute({ email, senha }));
    }
}

export { LoginController }