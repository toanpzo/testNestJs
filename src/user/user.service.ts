import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async addUser(name?: string, pass?: string): Promise<any> {
    if (!name || !pass) {
      return { message: 'Missing name or password' };
    }

    const newUser = this.userRepository.create({ name, pass });
    const savedUser = await this.userRepository.save(newUser);
    return { message: 'User added successfully', user: savedUser };
  }

  async getUser(id: number): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    return user;
  }

  async searchUser(name: string): Promise<any> {
    const users = await this.userRepository.find({
      where: { name: Like(`%${name}%`) },
    });
    return users;
  }

  async editUser(id: number, name?: string, pass?: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };

    if (name) user.name = name;
    if (pass) user.pass = pass;

    const updatedUser = await this.userRepository.save(user);
    return { message: 'User updated successfully', user: updatedUser };
  }

  async deleteUser(id: number): Promise<any> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) return { message: 'User not found or already deleted' };
    return { message: 'User deleted successfully' };
  }
}
