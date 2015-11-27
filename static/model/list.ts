export class List {
    id: number;
    startday: string;
    endday: string;
    status: string;
    userName: string;
    download: string;
}

export class Page {
    id: number;
    isChoose: boolean;
    constructor(id: number, isChoose: boolean){
        this.id = id;
        this.isChoose = isChoose;
    }
}