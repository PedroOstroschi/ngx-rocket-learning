import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  beforeEach(() => {
    service = new UniqueIdService();
  });

  let service: UniqueIdService;

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate unique Id with prefix`, () => {
    const uniqueId = service.generateUniqueIdWithPrefix('app');
    const startWithPrefix = uniqueId.startsWith('app-');

    expect(startWithPrefix).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should not generate duplicate id's when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty prefix`, () => {
    expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedId.name} should return the number of generated Id when called`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });
});
