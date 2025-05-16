'use client'
import { useEffect, useState } from 'react'
import styles from '../../styles/components/grid/specialOffers.module.scss'
import ProductCard from '../cards/ProductCard'

const SpecialOffers = ({productsData}) => {
  const [activeButton, setActiveButton] = useState('all');
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const [products, setProducts] = useState([]);
  const categoryChange = (title, key) => {
    setActiveButtonIndex(key)
    setActiveButton(title)
  }
  const categoryProductChange  = (key) =>{
    let productsNewData = []
    let totalCount = productsData.reduce((acc, category) => acc + category.products.length, 0);
    let counter = 0;
    if(key===-1){
        for (let i = 0; i < productsData.length; i++) {
            if(productsNewData.length===8 || totalCount===productsNewData){
                break
            }else{
                productsNewData.push(productsData[i].products[counter])
                if(productsNewData.length<=8 && i===productsData.length-1){
                    i = 0;
                    counter++
                }
            }
        }
        return productsNewData
    }
    else{
        return productsData[key].products.slice(0, 8)
    }
  } 
  useEffect(()=>{
    setProducts(categoryProductChange(-1))
  },[])
  useEffect(()=>{
    setProducts(categoryProductChange(activeButtonIndex))
  },[activeButton])
  
  return (
    (productsData!==null && productsData.length>0) &&
    <div className={styles.specialOffers}>
        <div className={styles.descriptions}>
            <div className={styles.titles}>
                <span className={styles.specialTitle}>Özəl təkliflər</span>
                <span className={styles.specialDesc}>Payız gəldi, şərtlər indi daha da sadələşdi!</span>
            </div>
            <div className={styles.buttons}>
                <div className={styles.box}>
                    <button onClick={() => {categoryChange('all', -1)}} className={`${activeButton==='all' ? `${styles.active}` : `${styles.deactive}`}`}>Hamısı</button>
                    {productsData.map((product, index)=>(
                        <button onClick={() => {categoryChange(product.title, index)}} key={index} className={`${activeButton===`${product.title}` ? `${styles.active}` : `${styles.deactive}`}`}>{product.title}</button>
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.products}>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default SpecialOffers