import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

   @Post("/products")
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findBYId(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  update(@Param('id') id: string,
  @Body() updateProductDto: ProductDto): any {
    return this.appService.update(id, updateProductDto);
  }

  @Delete("/products/:id")
  delete(@Param('id') id: string): ProductDto {
    return this.appService.delete(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
  return this.appService.areaTriangulo(data);
  }
}