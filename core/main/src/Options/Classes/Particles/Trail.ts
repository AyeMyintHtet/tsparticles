import type { ITrail } from "../../Interfaces/Particles/ITrail";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { OptionsColor } from "../OptionsColor";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";

export class Trail implements ITrail, IOptionLoader<ITrail> {
    public enable: boolean;
    public length: number;
    public fillColor: OptionsColor;

    constructor() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor();

        this.fillColor.value = "#000000";
    }

    public load(data?: RecursivePartial<ITrail>): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);

        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
