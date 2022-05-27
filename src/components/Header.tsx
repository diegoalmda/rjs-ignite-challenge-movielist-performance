import { memo } from "react";

type GenreTitle = {
  title: string;
}

function HeaderComponent({ title }: GenreTitle) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  );
}

export const Header = memo(HeaderComponent, (prevProps, nextProps) => {
  return prevProps === nextProps;
});