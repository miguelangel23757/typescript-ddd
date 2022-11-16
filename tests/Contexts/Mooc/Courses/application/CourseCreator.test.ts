// import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
// import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
// import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
//
// let repository: CourseRepositoryMock;
// let creator: CourseCreator;
//
// beforeEach(() => {
//   repository = new CourseRepositoryMock();
//   creator = new CourseCreator(repository);
// });
//
// describe('CourseCreator', () => {
//   it('should create a valid course', async () => {
//
//     const id = 'some-id';
//     const name = 'some-name';
//     const duration = 'some-duration';
//
//     const course = new Course({id, name, duration});
//
//     await creator.run(id, name, duration);
//
//     repository.assertLastSavedCourseIs(course);
//   });
// });

import {CourseRepository} from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import {CourseCreator} from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import {Course} from '../../../../../src/Contexts/Mooc/Courses/domain/Course';

describe('CourseCreator', () => {
  it('Should create a valid course', async () => {

    const repository: CourseRepository = {
      save: jest.fn()
    };

    const creator = new CourseCreator(repository);

    const id = 'some-id';
    const name = 'some-name';
    const duration = '5 hours';
    const expectedCourse = new Course({id, name, duration});

    await creator.run(id, name, duration);

    expect(repository.save).toHaveBeenCalledWith(expectedCourse);
  });
});
