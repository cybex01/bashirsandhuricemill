export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1762529485734-e1d92344c7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwbWlsbCUyMGZhY3RvcnklMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzczNTEzNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bashir Sandhu Rice Mill facility with rice fields"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#c5a655] text-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl">30+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl mb-6 text-[#2d5016]">About Bashir Sandhu Rice Mill</h2>
            <p className="text-lg text-gray-700 mb-6">
              Established over three decades ago, Bashir Sandhu Rice Mill has been at the forefront 
              of rice processing excellence in Pakistan. Our commitment to quality and tradition has 
              made us a trusted name among rice traders and exporters worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in processing premium paddy into the finest Super Basmati and PK-386 rice 
              varieties. With state-of-the-art machinery and traditional expertise, we ensure every 
              grain meets international quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
