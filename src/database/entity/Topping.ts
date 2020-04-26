import { Pizza } from './Pizza'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Topping {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: Buffer

    @ManyToOne(
        type => Pizza,
        pizza => pizza.toppings,
    )
    pizza: Pizza
}
