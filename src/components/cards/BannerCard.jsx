import Image from "next/image";
import styles from "../../styles/components/cards/bannerCard.module.scss";
import Link from "next/link"


const BannerCard = ({url, bannerPicture}) => {
  return (
    <div className={styles.slider}>
        <Link href={url}>
            <Image
                alt={url}
                layout="fill"
                style={{ objectFit: 'cover'}} 
                src={bannerPicture}
            />
        </Link>
    </div>
  )
}

export default BannerCard