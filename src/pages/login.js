import FormularioLogin from "../components/formularioLogin";

export default function Login() {
  return (
    <section>
      <div id="introducao">
        <h2>BEM-VINDO DE VOLTA</h2>
        <p>Por favor, faça login para continuar</p>
      </div>

      <FormularioLogin />
    </section>
  );
}
