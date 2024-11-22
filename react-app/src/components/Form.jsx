import './Form.css'

function Form() {
  function addAcount() {
    // Metodo pra adicionar o usuario ao banco de dados
    alert("Deu certo")
  }

  return (
    <>
      <div className='body'>
        <form>
          <h1>Cadastrar</h1>
          <label>Name:</label>
          <input type="text" className="name"/>
          <label>Password:</label>
          <input type="password" className="passwd"/>
          <button type="submit" onClick={addAcount}>Criar nova conta</button>
        </form>
      </div>
    </>
  )
}

export default Form
