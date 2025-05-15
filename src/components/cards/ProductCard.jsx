import Star from '@/svg/Star'
import styles from '../../styles/components/cards/productCard.module.scss'
import Chat from '@/svg/Chat'
import Image from 'next/image'
import Heart from '@/svg/Heart'
import AddBasket from '@/svg/AddBasket'
import Compare from '@/svg/Compare'

const ProductCard = ({product}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image 
            alt={product.name}
            fill
            src={product.image}
          />
          <span className={styles.discountPercantage}>-{Math.round(Number(product.discount)/product.price * 100)}%</span>
          <span className={styles.compare}><Compare/></span>
        </div>
        <div className={styles.descBox}>
          <div className={styles.ratingComment}>
            <span className={styles.rating}><Star/>{product.rate}</span>
            <span className={styles.comment}><Chat/> {product.reviewCount}</span>
          </div>
          <div className={styles.title}>{product.name}</div>
        </div>
        <div className={styles.priceBox}>
          <div className={styles.prices}>
            <span className={styles.price}>{product.price} ₼</span>
            <span className={styles.discountedPrice}>{product.discounted_price} ₼</span>
          </div>
          <div className={styles.line}></div>

          <div className={styles.perMonth}>
            <span className={styles.month}>{product.perMonth.month} ay</span>
            <span className={styles.monthPrice}>{product.perMonth.price} ₼</span>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button className={styles.addBasket}>
            <AddBasket/>
            <span className={styles.mobile}>Səbətə at</span>
            <span className={styles.desktop}>Səbətə əlavə et</span>
          </button>
          <button className={styles.heart}><Heart/></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard