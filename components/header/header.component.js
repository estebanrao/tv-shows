import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { countries } from './header.data';

import styles from './header.module.scss';

const Header = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  const handleChange = ({ target: { value } }) => {
    setSelectedCountry(value);
    router.push(`/[country]`, `/${value}`);
  };

  useEffect(() => {
    setCookie(null, 'defaultCountry', selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, [selectedCountry]);

  return (
    <div className={styles.header}>
      <select value={selectedCountry} onChange={handleChange}>
        {countries.map(({ name, alpha2Code }) => (
          <option key={alpha2Code} value={alpha2Code.toLowerCase()}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
