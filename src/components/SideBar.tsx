import '../styles/sidebar.scss';

type Props = {
  children: JSX.Element
}

export function SideBar({ children }: Props) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      {children}
    </nav>
  );
}
