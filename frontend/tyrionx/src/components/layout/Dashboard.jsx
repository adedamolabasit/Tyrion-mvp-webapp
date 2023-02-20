import { Footer } from "../../pages/landing/Footer";

export function Dashboard({ children }) {
  return (
    <div className="h-full">
      {children}
      <Footer />
    </div>
  );
}
