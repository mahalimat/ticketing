import { Publisher, Subjects, TicketUpdatedEvent } from '@ctntickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
