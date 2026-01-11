export interface Event {
  id: string;
  type: string;
  actorId?: string;
  title: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

