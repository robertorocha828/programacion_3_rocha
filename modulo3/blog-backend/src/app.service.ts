import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { find } from 'rxjs/internal/operators/find';

@Injectable()
export class AppService {
  private products: ProductDto[] = [
    { id: 1, 
      name: 'Laptop', 
      price: 10.99, 
      stock: 100 },

     { id: 2, 
      name: 'Mouse', 
      price: 10.99, 
      stock: 100 }, 
  ];

  getHealth(): any {
    return {
      "service":"blog service api",
      "version":"1.0.0",
      "date": new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct = {
      ...product,
      id: Math.random(), 
      
    }
    
    this.products.push(newProduct);
    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }  

  findAll(): ProductDto[] {
    return this.products;
  }

  findById(id: string): ProductDto {
    return this.products!
        .find(product => product.id === Number(id))!;
  }

  update(id: string, updateProductDto: ProductDto): any {
    const product:ProductDto = this.products!
        .find(product => product.id === Number(id))!;
    if(!product) {
      return;
}
    Object.assign(product, updateProductDto)
    return product;
  }

  delete(id: string): any {
    const index = this.products!
        .findIndex(product => product.id === Number(id))!;
    if(index === -1) {
      return;
    }
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }    

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) / 2;
    return {
    "base": data.base,
    "altura": data.altura,
    "areaTriangulo": area,
    };
  }
}