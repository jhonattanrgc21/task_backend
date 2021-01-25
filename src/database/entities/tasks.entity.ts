import {
    PrimaryGeneratedColumn,
    Index,
    Entity,
    Column,
    BaseEntity
} from 'typeorm';

// ======================================
//		Task Entity - SQL
// ======================================
@Entity('tasks')
export default class Task extends BaseEntity{
    
    @PrimaryGeneratedColumn({
        type: 'bigint',
        comment: 'ID de la tarea.'})
    public id!: number;


    @Index('tasks_name_unique', { unique: true })
    @Column({ 
        type: 'varchar', 
        length: 50, 
        comment: 'Titulo de la tarea.' 
    })
	public title!: string;

	@Column({
		type: 'text',
		comment: 'Descripción de la tarea.',
	})
	public description!: string;
}