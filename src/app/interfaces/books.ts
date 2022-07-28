export interface Books {
  idBooks: number;
  title: string;
  ISBN: string;
  status: boolean;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}
