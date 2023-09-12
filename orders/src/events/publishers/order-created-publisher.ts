import { Publisher, OrderCreatedEvent, Subjects } from '@ctntickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
