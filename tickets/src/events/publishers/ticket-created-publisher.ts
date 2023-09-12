import { Publisher, Subjects, TicketCreatedEvent } from '@ctntickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
