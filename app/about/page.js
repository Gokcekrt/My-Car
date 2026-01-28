export default function About() {
  return (
    <div className="bg-black justify-center items-center flex flex-col gap-8 p-4 min-h-screen text-white">
      <h1>About page</h1>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export const metadata = {
  title: "About My Tesla",
};
