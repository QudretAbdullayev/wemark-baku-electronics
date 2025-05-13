import BannerCarousel from "@/components/carousels/BannerCarousel";
import styles from "./page.module.scss";
import Header from "@/components/layout/Header";

async function getCarouselData() {
  const res = await fetch('https://api.b-e.az/task/big-sliders', {
    cache: 'force-cache', 
  });
  return res.json();
}

async function getBigSlidersData() {
  const res = await fetch('https://api.b-e.az/task/big-sliders', {
    cache: 'force-cache', 
  });
  return res.json();
}

async function getInfoCardsData() {
  const res = await fetch('https://api.b-e.az/task/features', {
    cache: 'force-cache', 
  });
  return res.json();
}

async function getProductsData() {
  const res = await fetch('https://api.b-e.az/task/features', {
    cache: 'force-cache', 
  });
  return res.json();
}

export default async function HomePage() {
  const slidersData = await getBigSlidersData();
  const infoCardsData = await getInfoCardsData();
  const productsData = await getProductsData();
  console.log(slidersData, infoCardsData, productsData)
  
  return (
    <div className={styles.page}>
      <Header/>
      <BannerCarousel/>
    </div>
  );
}
