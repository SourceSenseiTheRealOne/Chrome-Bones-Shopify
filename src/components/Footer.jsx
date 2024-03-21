const navigation = [
  { name: "About", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div key={i} className="px-6 py-2">
              <p href={item.href} className="text-white">
                {item.name}
              </p>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-black">
          &copy; 2022 Shopify, All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
