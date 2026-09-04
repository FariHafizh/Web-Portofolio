import { content } from '../content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} {content.site.name}. {content.footer.rights}
      </p>
    </footer>
  );
}
