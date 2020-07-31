import type { IHoverEvent } from "../../../Interfaces/Interactivity/Events/IHoverEvent";
import { HoverMode } from "../../../../Enums";
import { Parallax } from "./Parallax";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

export class HoverEvent implements IHoverEvent, IOptionLoader<IHoverEvent> {
    public enable: boolean;
    public mode: SingleOrMultiple<HoverMode | keyof typeof HoverMode | string>;
    public parallax: Parallax;

    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax();
    }

    public load(data?: RecursivePartial<IHoverEvent>): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.mode !== undefined) {
            this.mode = data.mode;
        }

        this.parallax.load(data.parallax);
    }
}
