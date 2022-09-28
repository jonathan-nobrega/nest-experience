import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV001', 'Aprendendo TS', 29.9),
    new Produto('LIV002', 'Exercicios sobre Algoritmos', 45.9),
    new Produto('LIV003', 'Banco de dados SQL', 49.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 100;
    return this.produtos.push(produto);
  }

  @Put(':id')
  atualizar(@Body() produto: Produto, @Param() params: any): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params: any) {
    this.produtos.pop();
  }
}
