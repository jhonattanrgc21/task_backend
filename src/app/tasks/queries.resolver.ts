import TasksService from '../../services/tasks.service';
import { Arg, ID, Query, Resolver } from 'type-graphql';
import Task from '../../models/tasks.model';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Resolver()
export default class TasksQueries {
	// ======================================
	//				Constructor
    // ======================================
    constructor(
		@InjectRepository(TasksService)
		private readonly service: TasksService,
    ) {}
    
    // ======================================
	//			Get All Products
	// ======================================
	@Query(() => [Task], { description: 'Get all Tasks' })
	public async allTasks() {
		return await this.service.findAll();
    }
    
    // ======================================
	//				Get Product
	// ======================================
	@Query(() => Task, { description: 'Get Task By ID' })
	public async task(@Arg('id', () => ID) id: string) {
		return await this.service.findOneByID(id);
    }
    
    // ======================================
	//			Get Products By Title
	// ======================================
	@Query(() => Task, { description: 'Get Tasks By Title' })
	public async tasksByTitle(@Arg('title', () => String) title: string) {
		return await this.service.findOneByTitle(title);
	}
}