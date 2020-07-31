import type { IMove } from "../../../Interfaces/Particles/Move/IMove";
import { Attract } from "../Attract";
import { MoveDirection, MoveDirectionAlt, OutMode, OutModeAlt } from "../../../../Enums";
import { Trail } from "../Trail";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { Noise } from "../Noise/Noise";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { MoveAngle } from "./MoveAngle";

export class Move implements IMove, IOptionLoader<IMove> {
    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     */
    get collisions(): boolean {
        return false;
    }

    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     * @param value
     */
    set collisions(value: boolean) {
        // deprecated
    }

    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     */
    get bounce(): boolean {
        return this.collisions;
    }

    /**
     * @deprecated this property is obsolete, please use the new collisions object on particles options
     * @param value
     */
    set bounce(value: boolean) {
        this.collisions = value;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    public get out_mode(): OutMode | keyof typeof OutMode | OutModeAlt {
        return this.outMode;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    public set out_mode(value: OutMode | keyof typeof OutMode | OutModeAlt) {
        this.outMode = value;
    }

    public angle: MoveAngle;
    public attract: Attract;
    public direction: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt;
    public enable: boolean;
    public noise: Noise;
    public outMode: OutMode | keyof typeof OutMode | OutModeAlt;
    public random: boolean;
    public speed: number;
    public straight: boolean;
    public trail: Trail;
    public vibrate: boolean;
    public warp: boolean;

    constructor() {
        this.angle = new MoveAngle();
        this.attract = new Attract();
        this.direction = MoveDirection.none;
        this.enable = false;
        this.noise = new Noise();
        this.outMode = OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail();
        this.vibrate = false;
        this.warp = false;
    }

    public load(data?: RecursivePartial<IMove>): void {
        if (data === undefined) {
            return;
        }

        if (data.angle !== undefined) {
            if (typeof data.angle === "number") {
                this.angle.value = data.angle;
            } else {
                this.angle.load(data.angle);
            }
        }

        this.attract.load(data.attract);

        if (data.direction !== undefined) {
            this.direction = data.direction;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        this.noise.load(data.noise);

        const outMode = data.outMode ?? data.out_mode;

        if (outMode !== undefined) {
            this.outMode = outMode;
        }

        if (data.random !== undefined) {
            this.random = data.random;
        }

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }

        if (data.straight !== undefined) {
            this.straight = data.straight;
        }

        this.trail.load(data.trail);

        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }

        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
