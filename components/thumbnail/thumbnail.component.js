import Link from 'next/link';

import styles from './thumbnail.module.scss';

const Thumbnail = ({
  imageUrl = 'https://via.placeholder.com/210x295.png?text=No%20image%20found',
  caption,
  href = '',
  as = '',
}) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} alt="" className={styles.image} />
          <h4 className={styles.caption}>{caption}</h4>
        </a>
      </Link>
    </div>
  );
};

export default Thumbnail;
