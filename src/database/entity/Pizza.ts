import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Topping } from './Topping'

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(
        type => Topping,
        topping => topping.pizza,
    )
    toppings: Topping[]
}
