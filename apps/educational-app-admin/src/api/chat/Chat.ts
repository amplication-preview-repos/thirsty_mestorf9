export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  sender: string | null;
  receiver: string | null;
  timestamp: Date | null;
};
