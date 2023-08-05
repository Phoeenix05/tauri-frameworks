import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation()
  
  return (
    <>
      <Link href="/">Home</Link>
      {loc.params.id}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
