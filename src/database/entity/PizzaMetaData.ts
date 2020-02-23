import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm'
import { Pizza } from './Pizza'

@Entity()
export class PizzaMetaData {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    meat_percentage: number

    @Column()
    suitable_for_stuffed_crust: boolean

    @Column()
    date_invented: Date

    @OneToOne(type => Pizza)
    // decides which entity owns the relationship.
    @JoinColumn()
    pizza: Pizza
}
