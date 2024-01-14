import Footer from "../footer";
import ReloadNavbar from "../navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <ReloadNavbar />
      {children}
      <Footer />
    </div>
  );
}
