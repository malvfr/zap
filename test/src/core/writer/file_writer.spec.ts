import { writeToFile } from '../../../../src/core/writer/file_writer';

describe('Test File writing feature', () => {
  test('Should write data correctly ', async () => {
    await writeToFile('TEST STRING', 'TEST TABLE');

    //expect().toBeCalled();
  });
});
