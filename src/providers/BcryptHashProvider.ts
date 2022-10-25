import { hash, compare } from "bcrypt";

class BcryptHashProvider {
    async hashGenerator(payload: string): Promise<string> {
        return await hash(payload, 10);
    }

    async compare(password: string, passwordHash: string): Promise<boolean> {
        return await compare(password, passwordHash);
    }
}

export { BcryptHashProvider }