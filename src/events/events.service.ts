import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { ListEventsQueryDto } from './dto/list-events.query.dto';

@Injectable()
export class EventsService {
  // In-memory array placeholder for events
  private events: Event[] = [];

  createEvent(dto: CreateEventDto): Event {
    // TODO: implement event creation
    // TODO: generate unique ID
    // TODO: set createdAt timestamp
    // TODO: store event in memory array
    throw new Error('Method not implemented.');
  }

  listEvents(filters: ListEventsQueryDto): Event[] {
    // TODO: implement filtering, pagination, sorting
    // TODO: filter by type if provided
    // TODO: filter by date range (from/to) if provided
    // TODO: apply pagination (page, pageSize)
    // TODO: sort by createdAt (most recent first)
    throw new Error('Method not implemented.');
  }

  getEventById(id: string): Event | null {
    // TODO: find event by ID in memory array
    // TODO: return null if not found
    throw new Error('Method not implemented.');
  }
}

