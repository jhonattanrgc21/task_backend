import Faker from 'faker';
import { define } from 'typeorm-seeding';
import Task from '../entities/tasks.entity';

// ======================================
//				Task Factory
// ======================================
define(Task, (faker: typeof Faker) => {
	const task= new Task();
	task.title = faker.name.jobTitle();
	task.description = faker.name.jobDescriptor();
	return task;
});