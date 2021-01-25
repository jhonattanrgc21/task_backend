import ITasks from '../interfaces/tasks.interface';
import Task from '../database/entities/tasks.entity';
import { Repository, EntityRepository } from 'typeorm';
import GeneralResponse from '../config/general-response';
import { Service } from 'typedi';

@Service()
@EntityRepository(Task)
export default class TasksService extends Repository<Task> {
	// ======================================
	//				Created
	// ======================================
	public async created(
		input: ITasks
	): Promise<Task> {
		const entity = this.create(input);
		return await entity.save();
	}

	// ======================================
	//				Find All
	// ======================================
	public async findAll(): Promise<Task[]> {
		return await this.find();
	}

	// ======================================
	//			Find One By ID
	// ======================================
	public async findOneByID(id: string): Promise<Task | undefined> {
		return await this.findOne(id);
	}

	// ======================================
	//			Find One By Name
	// ======================================
	public async findOneByTitle(title: string): Promise<Task | undefined> {
		return await this.findOne({ title });
	}

	// ======================================
	//				Update
	// ======================================
	public async updated(
		id: string,
		input: ITasks,
	): Promise<Task> {
		const entity = await this.findOneOrFail(id);
		entity.title = input.title ? input.title : entity.title;
		entity.description = input.description ? input.description : entity.description;
		return await this.save(entity);
	}

	// ======================================
	//				Deleted
	// ======================================
	public async deleted(id: string): Promise<GeneralResponse> {
		await this.delete(id);

		return {
			status: '200',
			message: 'Registro eliminado.',
		};
	}
}