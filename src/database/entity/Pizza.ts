import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
