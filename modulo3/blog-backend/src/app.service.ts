import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductDto[]=[
    
  ]

  getHeath(): any {
    return {
      "status":"online",
      "services" : "blog service api",
      "version":"0.0.1",
      "date": new Date()

    }
  }

 createProducto(product:ProductDto): ProductDto {
    const newProduct: ProductDto={
      id: Math.floor(Math.random()*1000),
      ...product
    }
    this.products.push(newProduct)
    return {
      "id":product.id,
      "name":product.name,
      "price":product.price,
      "stock": 10

    }
  }

  findAll():ProductDto[]{
    return this.products
  }

  findById(id:string):ProductDto{
    return this.products!
        .find(product=>product.id===Number(id))!;
  }

}
