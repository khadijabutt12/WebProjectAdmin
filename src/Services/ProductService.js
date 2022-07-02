import GenericService from "./GenericService";
 class ProductService extends GenericService
 {
     constructor()
     
     {
        super();
         }

     addProduct = (data)=> this.post("products",data);

     deleteProduct = (_id)=> this.delete("products/" + _id );

     getSingle = (id)=> this.get("products/" + id );

     getProduct = ()=> this.get("products");

     updateProduct = (_id,data)=> this.put("products/"+ _id ,data);
 }
 let productService =new ProductService();
 export default productService;