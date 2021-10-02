import '../styles/header.scss';

type Prop = {
  selectedGenre: {
    title: string,
  },
}

export function Header({ selectedGenre }: Prop) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}