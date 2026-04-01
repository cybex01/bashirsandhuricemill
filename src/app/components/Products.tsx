import { Check } from 'lucide-react';

export function Products() {
  const products = [
    {
      name: 'Super Basmati Rice',
      image: 'https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwYmFzbWF0aSUyMHJpY2UlMjBncmFpbnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDYzMTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium long-grain aromatic rice known for its exceptional fragrance and taste.',
      features: [
        'Extra-long grain length',
        'Distinctive aroma',
        'Non-sticky texture',
        'High cooking elongation',
        'Export quality',
      ],
      color: 'bg-gradient-to-br from-[#2d5016] to-[#3d6820]',
    },
    {
      name: 'PK-386 Rice',
      image: 'https://images.unsplash.com/photo-1763431158054-ccc996a3deac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJpY2UlMjBncmFpbnMlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NDYzMTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'High-yielding aromatic rice variety with excellent grain quality and taste.',
      features: [
        'Aromatic grains',
        'Fine texture',
        'Excellent cooking quality',
        'Cost-effective',
        'Consistent quality',
      ],
      color: 'bg-gradient-to-br from-[#c5a655] to-[#b59545]',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2d5016]">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in two premium rice varieties, carefully processed to meet international standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${product.color} opacity-20`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl mb-4 text-[#2d5016]">{product.name}</h3>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#c5a655] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 bg-[#2d5016] text-white rounded-lg hover:bg-[#3d6820] transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
