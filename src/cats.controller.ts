import { Body, Controller, Get, Param, Post, Query, Redirect, Req } from '@nestjs/common'
import { CreateCatDto } from './create-cat.dto'
import { Request } from "express"

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto : CreateCatDto): string {
        return 'This action creates a new cat'
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats'
    }

    @Get("async")
    async findAllAsync(): Promise<any[]> {
        return []
    }

    @Get("redirect")
    @Redirect('https://docs.nestjs.com/controllers')
    doRedirect(@Query('page') page) {
        if (page) {
            console.log(page)
            return {
                url: `https://docs.nestjs.com/${page}`,
                statusCode: 302
            }
        }
    }

    @Get(':id')
    findOne(@Param() params): string {
        const { id }: { id: string } = params
        return `This action returns #${id} cat`
    }
}
