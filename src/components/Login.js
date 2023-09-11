function Login(){
    return(
        <div>
            <div className ="FazerLogin">
                <div className="EntradaDados"></div>
                    <input className="SenhaEmail" type ="name" placeholder ="Email ou telefone"></input>
                    <br/><br/>
                    <input className="SenhaEmail" type ="password" placeholder ="Senha"></input>
                    <br/>
                <div className="Botoes">
                    <button className="BotaoEntrada">Entrar</button>
                    <br/>
                    <button className="BotaoCriar">Criar nova conta</button>
                    <br/>
                    <a className="per1" href="">Esqueceu a senha?</a>
                </div>
                <div>
                    <a className="per2" href="">Cria uma Página</a>
                    <p className="CriarPag">para uma celebridade, uma marca ou uma empresa. </p>
                </div>
            </div>

        </div>
    )
}
export default Login