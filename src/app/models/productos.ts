export type Productos= {
  idProduc :number,
  title : string,
  description : string,
  price : number,
  discountPercentage : number,
  rating :number,
  stock : number,
  brand : string,
  category : string
  thumbnail : string,
  images : Array<string>
}

export type ProductResponse = {
  products : Array<Productos>,
  total : number,
  skip : number | null,
  limit : number
}
