import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from '../errors/notification-not-found';
import { ReadNotification } from '../read-notification';

describe('Read Notification', () => {
  it('Should be able to Read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not be able read a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(async () => {
      return await readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
