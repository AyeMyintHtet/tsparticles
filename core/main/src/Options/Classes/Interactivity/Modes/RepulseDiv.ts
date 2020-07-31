import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IRepulseDiv } from "../../../Interfaces/Interactivity/Modes/IRepulseDiv";
import { RepulseBase } from "./RepulseBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

export class RepulseDiv extends RepulseBase implements IRepulseDiv, IOptionLoader<IRepulseDiv> {
    public ids: SingleOrMultiple<string>;

    constructor() {
        super();

        this.ids = [];
    }

    public load(data?: RecursivePartial<IRepulseDiv>): void {
        super.load(data);

        if (data === undefined) {
            return;
        }

        if (data.ids === undefined) {
            return;
        }

        this.ids = data.ids;
    }
}
