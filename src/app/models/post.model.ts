export interface PostModel {
  length: number;
  id: number;
  title: string;
  body: string;
  reactions: number;
  tags: [];
  userId: number;
}