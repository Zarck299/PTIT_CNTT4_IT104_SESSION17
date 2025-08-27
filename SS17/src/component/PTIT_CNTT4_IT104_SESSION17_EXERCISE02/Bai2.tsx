import {useState} from 'react'
type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number
};
export default function Exercise02() {
    const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Iphone 14 Pro Max",
    price: 30000000,
    quantity: 1,
  });
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}
