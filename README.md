# Criar projeto
    ## Criar pasta e abrir
    ## Verificar a presença no NODE e NPM
        node -v
        npm -v
    ## Caso não encontre esse comando, instalar node
        https://nodejs.org/
    # Executar no terminal
        npm init -y

# Criar arquivo
    ## Criar pasta src
    ## Criar arquivo src/index.js
        console.log('Olá pessoa');

# Executar
    node src/index.js

# Instalar express
    ## Executar no terminal
        npm install express --save
    ## O que aconteceu?
        1. Atualizou as dependências no package.json
        2. Criou a pasta node_modules com o código das dependências
        3. Obs.: Vamos criar um gitignore

# Como executar o projeto em outro lugar
    1. Uma vez baixado/clonado/descompactado o projeto
    2. Estando sem a pasta node_modules (boa prática)
    3. Executar para criar node_modules localmente
        npm install