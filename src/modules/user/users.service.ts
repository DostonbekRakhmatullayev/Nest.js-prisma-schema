import { PrismaService } from 'src/prisma/prisma.service';

export class UserService {
  constructor(private readonly userPrisma: PrismaService) {}
  async createUser(data: any) {
    if (data.bankId && data.cardId) {
      const user = await this.userPrisma.users.create({
        data: {
          name: data.name,
          bank: {
            connect: {
              id: data.bankId ? data.bankId : null,
            },
          },
          card: {
            connect: {
              id: data.cardId ? data.cardId : null,
            },
          },
        },
      });
    }

    if (!data.bankId && !data.cardId) {
      console.log(data.name);

      const user = await this.userPrisma.users.create({
        data: {
          name: data.name,
        },
      });
    }
  }

  async fetchAll() {
    return this.userPrisma.users.findMany();
  }
}
