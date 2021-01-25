import {
    ID,
    Field,
    ObjectType
} from 'type-graphql';

// ======================================
//		Task Entity - GraphQL
// ======================================
@ObjectType({ description: 'Task Model' })
export default class Task{
    @Field(() => ID)
	public id!: string;

	@Field(() => String)
	public title!: string;

	@Field(() => String)
	public description!: string;
}