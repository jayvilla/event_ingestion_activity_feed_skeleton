export class CreateEventDto {
  type: string;
  title: string;
  actorId?: string;
  metadata?: Record<string, unknown>;

  // TODO: add validation decorators (IsString, IsNotEmpty, IsOptional, etc.)
}

