// import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common"
// import { ConfigModule } from "@nestjs/config";
// import { Test, TestingModule } from '@nestjs/testing'
// import { config } from "../../../config";
// import { PrismaService } from "../../../prisma/prisma.service";
// import * as request from "supertest";
// import { PrismaModule } from "../../../prisma/prisma.module";
// import { EmployeesModule } from "../employees.module";

// describe('EmployeeModule', (): void => {
//     let app: INestApplication;
//     let module: TestingModule;
//     let prisma: PrismaService

//     beforeAll(async (): Promise<void> => {
//         module = await Test.createTestingModule({
//             imports: [ConfigModule.forRoot(config), PrismaModule, EmployeesModule],
//             providers: [PrismaService],
//         })
//         .compile()

//         prisma = module.get<PrismaService>(PrismaService)

//         app = module.createNestApplication()

//         app.useGlobalPipes(new ValidationPipe())

//         app.init()
//     })

//     afterAll(async(): Promise<void> => {
//         await app.close()
//     })

//     describe('/employees/list', (): void => {
//         it('should return the list of users', async(): Promise<void> => {
//             const result = [
//                 {
//                     id: 3,
//                     name: "Chris",
//                     jobs: [
//                         {
//                             id: 1,
//                             title: "Node.js"
//                         }
//                     ]
//                 }
//             ]

//             const response = await request(app.getHttpServer()).get('/employees/list')

//             expect(JSON.stringify(response.body)).toBeDefined()
//         })
//     })

//     describe('/employees/create', (): void => {
//         it('should return the list of users', async(): Promise<void> => {
//             const result = [
//                 {
//                     id: 3,
//                     name: "Chris",
//                     jobs: [
//                         {
//                             id: 1,
//                             title: "Node.js"
//                         }
//                     ]
//                 }
//             ]

//             const response = await request(app.getHttpServer())
//                 .post('/employees/create')
//                 .send({ name: 'Stewie', jobId: 1 })

//             expect(response.status).toBe(HttpStatus.CREATED)
//         })
//     })
// })
