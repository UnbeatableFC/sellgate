import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'
import { placeholderProducts } from '../lib/products'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeatureSection from '../components/products/FeatureSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails />

        <div className='mx-auto container'>
          <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
          <ProductGrid products={placeholderProducts} />
        </div>

        <FeaturedCollection />

        <FeatureSection />
    </div>
  )
}

export default Home