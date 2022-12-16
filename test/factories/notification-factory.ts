import { Content } from '@app/enitites/content';
import { Notification, INotification } from '@app/enitites/notification';

type Override = Partial<INotification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Nova Solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
