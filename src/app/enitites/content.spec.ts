import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 caracteres', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 caracteres', () => {
    expect(() => new Content('v'.repeat(241))).toThrow();
  });
});
