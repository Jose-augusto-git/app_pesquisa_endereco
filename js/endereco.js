function getDadosEnderecoPorCEP(cep){
 //   console.log(cep)

    let url = 'https://viacep.com.br/ws/'+cep+'/json/unicode/'
 //   console.log(url)

    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)

    xmlHttp.onreadystatechange = () =>{
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            //console.log(xmlHttp.responseText)
            let dadosJSONText = xmlHttp.responseText
            let dadosJSONObj = JSON.parse(dadosJSONText)

            document.getElementById('endereco').value = dadosJSONObj.logradouro
            document.getElementById('bairro').value = dadosJSONObj.bairro
            document.getElementById('cidade').value = dadosJSONObj.localidade
            document.getElementById('uf').value = dadosJSONObj.uf


            console.log(dadosJSONObj.logradouro)
            console.log(dadosJSONObj.bairro)
            console.log(dadosJSONObj.localidade)
            console.log(dadosJSONObj.uf)

        }
    }

    xmlHttp.send()



}