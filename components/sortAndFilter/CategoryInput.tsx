import React from 'react';
import { ICategory } from '../../interface/products';
import styles from './../../styles/checkbox.module.scss';
interface CategoryInputProps {
  category: ICategory;
  selectCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ids: number[];
}

const CategoryInput = ({
  category,
  selectCategory,
  ids,
}: CategoryInputProps) => {
  return (
    <div>
      {' '}
      <div key={category.id} className={styles.myCheckbox}>
        <span>
          <input
            className={styles.myCheckbox__input}
            type="checkbox"
            value={category.id}
            onChange={(event) => selectCategory(event)}
            checked={ids.includes(category.id) ? true : false}
          />
        </span>
        <label className={styles.myCheckbox__label} htmlFor={category.name}>
          {category.name}{' '}
        </label>
      </div>
    </div>
  );
};

export default CategoryInput;
