import {PrismaClient} from '@prisma/client';

export const database = new PrismaClient();

async function main() {
    const user = await database.user.create({
        data: {
            email: 'test-' + Math.random() + '@test.com',
            password: 'test',
            name: 'test',
            posts: {
                create: {
                    title: 'test',
                    content: 'test'
                }
            }
        }
    });

    console.log(user);
}

main().catch(console.error);
