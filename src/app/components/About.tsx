export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://scontent.fskt5-2.fna.fbcdn.net/v/t39.30808-6/497799309_122098829540874262_4631276596015960512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NtzW5jwGUx8Q7kNvwELBCOI&_nc_oc=AdonH9S0-xhI73k0jaVVBLkxQI9BN9oGJtq8PGHfxfWDarxtiAWDIabKMWJeJVGqOJE&_nc_zt=23&_nc_ht=scontent.fskt5-2.fna&_nc_gid=eXL-svBuJ3A_xMv-OZbP_w&_nc_ss=7a389&oh=00_Af2sF1W51Z3Ylg5_ec3Qcp4alzuZQte255HnajvCtNiIKw&oe=69D32FDD"
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
