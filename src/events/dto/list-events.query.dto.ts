export class ListEventsQueryDto {
  type?: string;
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;

  // TODO: validation + defaults (IsOptional, IsNumber, IsString, Transform, etc.)
  // TODO: set default values for page and pageSize
}

