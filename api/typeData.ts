export interface UserPerson {
    map(arg0: (user: any, idx: any) => JSX.Element): import("react").ReactNode;
    id: number;
    friend: any;
    name:string;
    userInfo : string[];
}

export interface typePhone{
    id: number;
    brand: string;
    model: string;
    price : string;
    imageUrl:string
}

export interface typeLaptop{
    id: number;
    brand: string;
    model: string;
    price : string;
    imageUrl:string
}