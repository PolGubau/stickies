import { useAppSelector } from "src/redux/app/hooks";
import { actualCategories } from "src/redux/features/categoriesSlice";
import {
  CategoriesContainerStyled,
  CategoryName,
} from "./CategoriesStyled";
import useCategoriesFunctions from "./utils/useCategoriesFunctions";
//

const Categories = () => {
  const f = useCategoriesFunctions();
  const { categories } = useAppSelector(actualCategories) || [];



  return (
    <CategoriesContainerStyled>
      {/* <form className="formCategories" onSubmit={(e) => handleNewCategory(e)}>
        <input
          className="nomCategoria"
          type="text"
          placeholder="Crea una categoría"
          ref={categoryRef}
        />

        <select className="chooseColor" ref={colorRef}>
          {availableColors.map((color) => {
            return (
              <OptionColor color={color[1]} value={color[1]} key={color[0]}>
                {color[0]}
              </OptionColor>
            );
          })}
        </select>

        <button type="submit" className="submit">
          <MdOutlineCreateNewFolder size={30} />
        </button>
      </form> */}
      {categories.map((category: any) => (
        <CategoryName
          onClick={() => f.selectThisCategory(category)}
          color={category.color}
          key={category.id}
        >
          {category.name}
        </CategoryName>
      ))}
    </CategoriesContainerStyled>
  );
};

export default Categories;
