import { Notification } from '@app/enitites/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificaitonIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificaitonIndex >= 0) {
      this.notifications[notificaitonIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
}
