import CommonTextShops from "./CommonTextShops/CommonTextShops"
import ShopCard from "./ShopCard/ShopCard"
import s from './page.module.css'


const shops = [
    {logo:'#', shopName: 'ATB', cashBack: 10 },
    {logo:'#', shopName: 'Rost', cashBack: 15 },
    {logo:'#', shopName: 'Vse po 3', cashBack: 45 },
    {logo:'#', shopName: 'BUFET', cashBack: 42 },
    {logo:'#', shopName: 'Vostorg', cashBack: 57 },
]

const mappedShops = shops.map(e => <ShopCard logo={e.logo} shopName={e.shopName} cashBack={e.cashBack}/>)



const Shops = () => {
    return (
        <div>
            <CommonTextShops />
            <div className={s.cardListWrapper}>{mappedShops}</div>
        </div>
    )
}

export default Shops