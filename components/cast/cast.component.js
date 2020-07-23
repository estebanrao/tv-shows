import Thumbnail from '../thumbnail/thumbnail.component';

import styles from './cast.module.scss';

const Cast = ({ cast }) => {
  return (
    <div>
      <h3>Cast</h3>
      <ul className={styles.list}>
        {cast.map(({ person: { id, name, image } }) => {
          return (
            <li key={id}>
              <Thumbnail imageUrl={image?.medium} caption={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
