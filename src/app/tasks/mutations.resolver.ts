import Task  from "../../models/tasks.model";
import { Arg, ID, Resolver, Mutation } from 'type-graphql';
import TasksService from "../../services/tasks.service";
import TaskInput from "./inputs.resolver";
import GeneralResponse from "../../config/general-response";

// ======================================
//				Tasks Mutations
// ======================================
@Resolver()
export default class TasksMutations {
    // ======================================
	//				Constructor
	// ======================================
	constructor(
		//@InjectRepository(TasksService)
		private readonly service: TasksService,
    ) {}
    
    // ======================================
	//			Created Task Resolver
	// ======================================
	@Mutation(() => Task, {
		description: 'Created A New Task Entity',
	})
	public async createTask(
		@Arg('input', () => TaskInput) input: TaskInput,
	) {
		return await this.service.created(input);
    }
    
    // ======================================
	//		Updated Task Resolver
	// ======================================
	@Mutation(() => Task, { description: 'Updated A Task Entity' })
	public async updateTaskt(
		@Arg('id', () => ID) id: string,
		@Arg('input', () => TaskInput) input: TaskInput,
	) {
		return await this.service.updated(id, input);
    }
    
    // ======================================
	//		Deleted Product Resolver
	// ======================================
	@Mutation(() => GeneralResponse, {
		description: 'Deleted A Product Entity',
	})
	public async deleteTask(@Arg('id', () => ID) id: string) {
		return await this.service.deleted(id);
	}
}