'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { products } from '../lib/products';

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-3">
              Research Formulations
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Trusted Formulations
            </h2>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="group block relative h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-border shadow-sm group-hover:shadow-2xl transition-all duration-500 p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-bold text-lg text-emerald-700">{product.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center text-sm font-bold text-emerald-600">
                      Explore Details
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}