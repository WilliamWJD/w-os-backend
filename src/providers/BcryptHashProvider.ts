import { hash } from "bcrypt";

class BcryptHashProvider {
    async hashGenerator(payload: string): Promise<string> {
        return await hash(payload, 10);
    }
}

export { BcryptHashProvider }