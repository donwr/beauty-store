import Image from 'next/image';
import Link from 'next/link';

const footerData = [
  {
    title: 'Help & Support',
    links: [
      { name: 'Help', url: '#' },
      { name: 'Track order', url: '#' },
      { name: 'Delivery & returns', url: '#' }
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Corporate responsibility', url: '#' }
    ]
  },
  {
    title: 'More from Shopi',
    links: [
      { name: 'Mobile & SHOPI apps', url: '#' },
      { name: 'SHOPI Marketplace', url: '#' },
      { name: 'Gift vouchers', url: '#' },
      { name: 'Investor’s site', url: '#' }
    ]
  },
  {
    title: 'Shopping from',
    links: [{ name: 'Germany - CHANGE', url: '#' }]
  }
];

const Footer = () => {
  return (
    <footer className="h-full">
      <div className="top hidden w-full bg-[#FAF8F7] md:block">
        <div className="top-wrapper mx-auto max-w-[85.25rem] px-4 py-16 md:h-[20rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {footerData.map((section) => (
              <div key={section.title}>
                <h3 className="mb-8 font-semibold uppercase">{section.title}</h3>
                <ul className="space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="icons mt-8 flex space-x-48 items-center">
            <div className="socials flex space-x-4">
              <Link href="">
                <Image
                  src="/images/icons/ig.svg"
                  height={22}
                  width={22}
                  className=""
                  alt="instagram logo"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/fb.svg"
                  height={22}
                  width={22}
                  className=""
                  alt="instagram logo"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/pinterest.svg"
                  height={22}
                  width={22}
                  className=""
                  alt="instagram logo"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/twitter.svg"
                  height={22}
                  width={22}
                  className=""
                  alt="instagram logo"
                />
              </Link>
            </div>
            <div className="payment-cards flex space-x-4">
              <Image
                src="/images/icons/visa.svg"
                height={30}
                width={46}
                className=""
                alt="instagram logo"
              />
              <Image
                src="/images/icons/mastercard.svg"
                height={30}
                width={46}
                className=""
                alt="instagram logo"
              />
              <Image
                src="/images/icons/paypal.svg"
                height={30}
                width={46}
                className=""
                alt="instagram logo"
              />
              <Image
                src="/images/icons/american-experess.svg"
                height={30}
                width={46}
                className=""
                alt="instagram logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom w-full bg-[#F7F4F2]">
        <div className="bottom-wrapper mx-auto flex max-w-[85.25rem] justify-between px-4 py-4">
          <p className="text-xs text-[#7E7B77]">Ⓒ 2021 lOOMI</p>
          <div className="links flex space-x-4">
            <Link href="" className="text-xs text-[#E09C7F]">
              Privacy & Cookies
            </Link>
            <Link href="" className="text-xs text-[#E09C7F]">
              Ts&Cs
            </Link>
            <Link href="" className="text-xs text-[#E09C7F]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
