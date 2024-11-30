export class PathNode {
    data: any | null = null
    g: number = 0
    h: number = 0
    f: number = 0
    parent: PathNode | null

    constructor() {
    }

    set(data, g, h, parent = null) {
        this.data = data;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
        return this;
    }
}