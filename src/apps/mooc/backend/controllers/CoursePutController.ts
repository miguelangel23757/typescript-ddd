import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from './Controller';
import {CourseCreator} from '../../../../Contexts/Mooc/Courses/application/CourseCreator';

export class CoursePutController implements Controller {
  constructor(private curseCreator: CourseCreator) {
  }

  async run(req: Request, res: Response) {
    const {id, name, duration} = req.body;

    await this.curseCreator.run(id, name, duration);
    res.status(httpStatus.CREATED).send();
  }
}
