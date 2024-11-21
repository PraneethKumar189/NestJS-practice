import { Controller,Get,Post,Body, Param, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAll():String{
        return 'This handles get requests'
    }
    @Post()
    create(@Body() data:any ):string{
        return  'This handles the POST requests with id '

    }
    @Get(':id')
    findOne(@Param() id:string):String{
        return 'This handles GET requests with specific id'
    }
    @Put(':id')
    update(@Param() id:string):string{
        return 'this handles PUT requests with specific id'
    }
    @Delete(':id')
    delete(@Param() id:string):String{
        return 'this handles DELETE requests based on specific id'

    }
  
}
