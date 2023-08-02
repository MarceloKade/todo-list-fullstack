export default function RegisterProduct() {
    return (
        <>
            <form>
                <label>Login</label>
                <div>
                    <input placeholder="Nome" />
                </div>

                <div>
                    <input placeholder="Preço" />
                </div>

                <div>
                    <input placeholder="Quantidade" />
                </div>
                <div>
                    <button>Registrar</button>
                </div>
            </form>

            <section>
                <h2>Produtos registrados:</h2>
                <table>
                    <thead>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </thead>
                    <tbody id="tbody">

                    </tbody>
                </table>
            </section>
        </>
    );
}