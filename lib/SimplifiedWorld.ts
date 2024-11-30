import { Bot } from "../node_modules/mineflayer/index";
import { Vec3 } from "../node_modules/vec3/index";


export class SimplifiedWorld {
    private readonly bot: Bot;

    getBlock(pos: Vec3) {
        return this.bot.blockAt(pos);
    }
}
