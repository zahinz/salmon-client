import Container from "../components/dumb/Container";
import Header from "../components/smart/Header";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";

export default function Home() {
  return (
    <>
      <Header />
      <Container withHeader>
        <div className=" h-full flex items-center justify-center text-8xl pb-16 text-gray-600">
          Hello <span className="ml-5 text-blue-600">Salmon</span>.
        </div>
      </Container>
    </>
  );
}
