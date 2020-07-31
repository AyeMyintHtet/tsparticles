import type { ILinksShadow } from "../../../Interfaces/Particles/Links/ILinksShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

export class LinksShadow implements ILinksShadow, IOptionLoader<ILinksShadow> {
    public blur: number;
    public color: OptionsColor;
    public enable: boolean;

    constructor() {
        this.blur = 5;
        this.color = new OptionsColor();
        this.enable = false;

        this.color.value = "#00ff00";
    }

    public load(data?: RecursivePartial<ILinksShadow>): void {
        if (data === undefined) {
            return;
        }

        if (data.blur !== undefined) {
            this.blur = data.blur;
        }

        this.color = OptionsColor.create(this.color, data.color);

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
