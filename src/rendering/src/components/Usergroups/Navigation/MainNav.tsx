import Link from 'next/link';
import React, { useState } from 'react';
import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { isCommerceEnabled } from '../../../helpers/CommerceHelper';
import PreviewSearchContent from '../../PreviewSearchContent/PreviewSearchContent';

export type MainNavigationProps = ComponentProps & {
  fields: {
    data: {
      item: {
        field: {
          jsonValue: ImageField;
        };
      };
      links: {
        children: {
          results: [
            {
              displayName: string;
              field: {
                jsonValue: {
                  value: {
                    anchor: string;
                    href: string;
                    linktype: string;
                    target: string;
                    text: string;
                    url: string;
                  };
                };
              };
            }
          ];
        };
      };
    };
  };
};

const MainNav = (props: MainNavigationProps): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const sxaStyles = `${props.params?.styles || ''}`;

  const shopLink = isCommerceEnabled && (
    <li className="text-menu-item">
      <Link href="/shop">Shop</Link>
    </li>
  );

  return (<>
    {console.log(props)}

    <nav className={`main-navigation ${sxaStyles}`}>
      <div className="navigation-content">
        <div className="controls-container container">
          <Link href="/" className="logo-link">
            <Image
              field={props.fields.data.item.field.jsonValue}
            />
          </Link>
          <button
            className="items-toggle"
            aria-label="open menu"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={'items-container' + (navbarOpen ? ' opened' : ' closed')}>
          <ul className="container">
            {props.fields?.data?.links?.children?.results?.map((item, index) => (
              <li className="text-menu-item" key={index}>
                <Link href={item.field?.jsonValue?.value?.href ?? '#'} prefetch={false}>
                  {item.displayName}
                </Link>
              </li>
            ))}
            {shopLink}
            <li className="button-menu-item">
              <Link href="/tickets" className="btn-main">
                Book Tickets
              </Link>
            </li>
          </ul>
          <div className="search-input-container">
            <PreviewSearchContent />
          </div>
        </div>
      </div>
    </nav></>
  );
};

export const Default = MainNav;