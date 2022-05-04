export enum MenuType {
    none,
    own,
    stranger,
}
export interface PostProps {
    id: number,
    userName: string,
    avatar: string,
    text: string,
    likeCount: number,
    createdAt: string,
    menuType: MenuType,
}