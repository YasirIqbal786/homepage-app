import { FaSun, FaLongArrowAltRight } from 'react-icons/fa';

const GrowSection = () => {
  return (
    <section 
      className="container w-full hidden md:block text-center" 
    >
      
        <div className=" mx-auto px-4 xl:px-0 ">
          <div className="text-center mb-8">
            <FaSun className="text-4xl text-gray-200 mx-auto" />
          </div>
         <h1 className="text-2xl md:text-3xl font-semibold ml-2 text-gray-800 mb-2">
  Best Software House in Pakistan
  <br className="block lg:hidden" />
  <span className="inline"> to grow your Business Online</span>
</h1>

          <h2 className="text-sm  font-bold text-gray-400 mb-8">
            Top Rated Software Company in Pakistan
          </h2>
          <div className="text-justify space-y-3 mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong className="font-semibold">Digital Applications </strong>is one of the <strong className="font-semibold">Most Popular Software Companies in Pakistan</strong>. Our highly professional team will get your project running quickly and realise your IT goals. We are experienced in developing IT solutions that cater to all your business needs and let your business flourish organically. Our holistic approach to <strong className="font-semibold">SEO Friendly Website Development</strong> will not only make your website look great, but they will also be able to perform and meet your expectations. We are known as<em className="italic"> Best Software Company in Pakistan</em> in delivering end to end IT solutions for a business. In this fast-paced world that is rapidly globalizing, having a presence on the internet is paramount towards the long-term sustainability for a business. <em className="italic">Digital Applications</em> is Top Rated Software House in Pakistan at the forefront of the technological revolution of our world where every business is trying to make a mark, and with our help, you can do just that.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Having a successful website depends on a lot of factors, and you should trust only the experts to execute your vision very professionally. A website can only succeed if it uses SEO properly, and our <strong className="font-semibold">Software House in Pakistan</strong> is highly rated & very popular in developing great SEO strategies with user friendly web designs. Our <strong className="font-semibold">Professional Software Company</strong> is in this space for a very long time now and have a track record of delivering highly optimized websites that bring thousands of visitors daily. Our content strategies are geared towards bringing organic traffic to sites and increase sale revenues for a business. So, when it comes to a <em className="italic">Software House</em> for<strong className="font-semibold"> SEO Friendly Website development</strong> or a <strong className="font-semibold">Professional Mobile App Development</strong>, you can trust our expertise and experience in this field.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our portfolio includes a lot of successful websites that are now performing according to our customer's expectations. We put creativity as our cornerstone, delivering stellar websites that are geared towards growing your business and our results driven approach will bring in instant rewards for you. A website is a quintessential element in increasing the credibility of an organization, and we believe that we are one of the Most Popular &<strong className="font-semibold"> Best Software Houses in Pakistan</strong> to execute your vision and deliver a high quality responsive website that can really put your business in the global stage.
            </p>
          </div>
          <div className="py-8">
            <a 
              href="https://dgaps.com/about-us" 
              className="inline-flex items-center px-8 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              See more about us <FaLongArrowAltRight className="ml-2" />
            </a>
          </div>
        </div>
      
    </section>
  );
};

export default GrowSection;