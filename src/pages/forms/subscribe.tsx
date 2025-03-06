const Subscribe = () => {
    return(
        <div>
            <div>
                <h1>Cadastro</h1>
                <br></br>
            </div>

            <form > 
                <fieldset>
                    <div>
                        <label><strong>Nome</strong></label>
                        <input type="text" name="nome" id="nome" />
                    </div>
                    <div>
                        <label><strong>Sobrenome</strong></label>
                        <input type="text" name="sobrenome" id="sobrenome" />
                    </div>
                    <div>
                        <label><strong>Sobrenome</strong></label>
                        <input type="text" name="sobrenome" id="sobrenome" />
                    </div>
                    <div>
                        <label><strong>Idade</strong></label>
                        <input type="number" name="idade" id="idade" />
                    </div>
                </fieldset>

                <div>
                    <label><strong>Email</strong></label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>

                </div>
            </form>
        </div>
    )
}


export default Subscribe;