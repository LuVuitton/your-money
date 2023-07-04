import s from './ShopCard.module.css'

const ShopCard = (props: ShopCardPropsType) => {
  
const {logo,shopName,cashBack} = props

    return (
    <div className={s.mainWrapper}>
        <div>{logo}</div>
        <div>{shopName}</div>
        <div>{cashBack}% cash back </div>
    </div>
    );
};

export default ShopCard


type ShopCardPropsType = {
    logo:string
    shopName: string
    cashBack: number
}