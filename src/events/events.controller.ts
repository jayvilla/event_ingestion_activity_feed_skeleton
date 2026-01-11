import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ListEventsQueryDto } from './dto/list-events.query.dto';
import type { Event } from './event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() dto: CreateEventDto): Event {
    // TODO: wire DTO + service call
    // TODO: proper HTTP errors (400, 500, etc.)
    return this.eventsService.createEvent(dto);
  }

  @Get()
  listEvents(@Query() query: ListEventsQueryDto): Event[] {
    // TODO: wire query DTO + service call
    // TODO: proper HTTP errors (400, 500, etc.)
    return this.eventsService.listEvents(query);
  }

  @Get(':id')
  getEventById(@Param('id') id: string): Event {
    // TODO: wire service call
    // TODO: proper HTTP errors (404 if not found, 400 for invalid ID, etc.)
    const event = this.eventsService.getEventById(id);
    if (!event) {
      throw new Error('Event not found'); // TODO: replace with proper NestJS exception
    }
    return event;
  }
}

