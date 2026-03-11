function CardServico({ titulo, descricao}) {

    function mostrarMensagem({titulo, descricao}){
        alert("Você clicou no serviço: " + titulo)
    }

    return (
        <div className="card-servico">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <button onClick={() => mostrarMensagem({ titulo, descricao })}>
            Saiba Mais
        </button>
    </div>
    )   
}

export default CardServico;