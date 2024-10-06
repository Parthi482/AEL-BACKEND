/* eslint-disable prettier/prettier */
import { Controller, Body, Put } from '@nestjs/common';
import { DatabaseProvider } from 'src/database/database.providers';


@Controller('entities')
export class EntitiesHandlerController { 
    constructor(private readonly mongoDBService: DatabaseProvider
    ) {

    }
 
    @Put('student_registration/')
    async UpdatedStudentRegistration(
        @Body() body: any
    ) {
        try {

            const collection = this.mongoDBService.getDatabase().collection("registration");
            const filter = {
                first_name: body.first_name,
                lastName: body.lastName,
                date_of_birth: body.date_of_birth,

            };
            
            const result = await collection.findOneAndUpdate(
                filter,
                { $set: body },
                { upsert: true, returnDocument: 'after' }

            );
            return {
                message: 'Updated successfully',
                data: [result],
            };


        } catch (error) {
            console.error(error);
            return {
                message: 'An error occurred while updating the entity',
                error: error.message
            };
        }
    }






}
