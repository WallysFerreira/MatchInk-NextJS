export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/estudios/${id}`);
  const data = await res.json();

  return {
    props: {
      estudio: data
    }
  };
}

export default function Estudio({ estudio }) {

}
