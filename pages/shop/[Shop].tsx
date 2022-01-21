import { useRouter } from "next/router";

const ShopPage=()=> {
    const router = useRouter();
    const shopId = router.query.shop;
    return (
      <div style={{ textAlign: "center" , margin : '2rem'}} >
        <p > Volvo {shopId}</p>
      </div>
    );
}

export default ShopPage
