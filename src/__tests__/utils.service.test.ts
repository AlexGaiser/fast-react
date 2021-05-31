import { clone } from '../services/utils.service';

describe('testing clone function', () => {
  test('should return clone', () => {
    const obj = {
      a: { b: 1 },
      c: [1, 2, 3, { e: 'test', f: [4, 5, 6] }],
      d: 1,
    };

    const clonedObj = clone(obj);
    const unClonedObj = obj;
    obj.a.b = 123;
    obj.c[3] = 10;

    expect(clonedObj).toStrictEqual({
      a: { b: 1 },
      c: [1, 2, 3, { e: 'test', f: [4, 5, 6] }],
      d: 1,
    });
    expect(unClonedObj).toStrictEqual(obj);
  });
  test('should clone circular reference', () => {
    const obj: any = {
      a: { b: 1 },
      c: [1, 2, 3, { e: 'test', f: [4, 5, 6] }],
      d: 1,
    };
    obj.circular = obj;
    ('');
    const clonedObj = clone(obj);

    expect(clonedObj).toStrictEqual(obj);
  });
});
