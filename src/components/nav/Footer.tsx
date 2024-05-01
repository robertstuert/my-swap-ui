import Image from 'next/image';
import Link from 'next/link';

import FooterBg from '../../images/backgrounds/footer-bg.svg';
import { Discord } from '../icons/Discord';
import { Github } from '../icons/Github';
import { Medium } from '../icons/Medium';
import { Twitter } from '../icons/Twitter';

const footerLinks1 = [
  { title: 'Docs', url: "", external: true },
  { title: 'Homepage', url: "", external: true },
  { title: 'Explorer', url: "", external: true },
  // { title: 'Chains', url: links.chains, external: true },
];

const footerLinks3 = [
  { title: 'Twitter', url: "", external: true, icon: <Twitter fill="#fff" /> },
  { title: 'Discord', url: "", external: true, icon: <Discord fill="#fff" /> },
  { title: 'Github', url: "", external: true, icon: <Github fill="#fff" /> },
  { title: 'Blog', url: "", external: true, icon: <Medium fill="#fff" /> },
];

export function Footer() {
  return (
    <footer className="text-white relative">
      <div className="relative w-full">
        <Image className="z-0 w-full" src={FooterBg} alt="" />
      </div>
      <div className="relative z-10 px-8 pb-5 pt-2 sm:pt-0 bg-pink-500">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-between">
          <div className="flex items-center justify-center">
            {/* <div className="ml-2 w-12 sm:w-16 h-12 sm:h-16">
              <HyperlaneLogo fill={Color.primaryWhite} />
            </div> */}
            <div className="text-lg sm:text-xl font-medium ml-6 space-y-1 ">
              <div>Swap</div>
              {/* <div>With Hyperlane</div> */}
            </div>
          </div>
          <nav className="flex text-md font-medium">
            <ul className={`${styles.linkCol} mr-14`}>
              {footerLinks1.map((item) => (
                <li className="" key={item.title}>
                  <Link
                    className={styles.linkItem}
                    target={item.external ? '_blank' : '_self'}
                    href={item.url}
                  >
                    <div className="">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={`${styles.linkCol}`}>
              {footerLinks3.map((item) => (
                <li key={item.title}>
                  <Link
                    className={styles.linkItem}
                    target={item.external ? '_blank' : '_self'}
                    href={item.url}
                  >
                    {item?.icon && <div className="mr-4 w-6">{item?.icon}</div>}
                    <div className="">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  linkCol: 'flex flex-col gap-1.5',
  linkItem: 'flex items-center capitalize text-decoration-none hover:underline underline-offset-2',
};
