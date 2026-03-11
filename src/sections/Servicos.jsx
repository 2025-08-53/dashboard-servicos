import CardServico from "../components/CardServico"
import { useState } from "react"

function Servicos(){

  const [mostrarServicos, setMostrarServicos] = useState(true)

  const listaServicos = [
    {
      titulo:"Consultoria",
      descricao:"Ajudamos empresas a crescer."
    },
    {
      titulo:"Desenvolvimento Web",
      descricao:"Criamos aplicações modernas."
    },
    {
      titulo:"Automação",
      descricao:"Automatizamos processos."
    }
  ]

  function alternarServicos(){
    setMostrarServicos(!mostrarServicos)
  }

  return(

    <section className="servicos">

      <h2>Nossos Serviços</h2>

      <button onClick={alternarServicos}>
        {mostrarServicos ? "Esconder Serviços" : "Mostrar Serviços"}
      </button>

      <div className="grid-servicos">

        {listaServicos.map((servico, index) => (
          
          <CardServico
            key={index}
            titulo={servico.titulo}
            descricao={servico.descricao}
          />

        ))}

      </div>

    </section>

  )
}

export default Servicos